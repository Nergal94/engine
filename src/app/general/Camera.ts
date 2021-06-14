import {ICanvasData} from "../interfaces/IAssets";
import {ICamera} from "../interfaces/ICamera";
import {Constants} from "../enums/constants";
import {ILayer} from "../interfaces/ILayer";

export class Camera implements ICamera {

  x0: number;
  xEnd: number;

  y0: number;
  yEnd: number;

  isRender: boolean =  false;

  readonly _layers: ILayer[];

  private _cameraMatrix: any[] = [];


  constructor(data: ICanvasData, layers: ILayer[]) {
    this.x0 = 0;
    this.y0 = 0;
    this._layers = layers;
  }

  private getLayer(levelLayer: ILayer) {
    const cameraLayer = Array.from({length: Constants.cameraSize},
      (_, i) => Array.from({length : Constants.cameraSize}));
    for (let y = 0; y < Constants.cameraSize; y++) {
      for (let x = 0; x < Constants.cameraSize; x++) {
        cameraLayer[y][x] = levelLayer.layerMatrix[y + this.y0][x + this.x0];
      }
    }
    return cameraLayer;
  }

  private fillMatrix() {
    this._cameraMatrix = [];
    for (const layerIndex in this._layers) {
      const layer = this._layers[layerIndex];
      this._cameraMatrix.push(this.getLayer(layer));
    }
  }

  get getCamera() {
    this.fillMatrix();
    return this._cameraMatrix;
  }

  setAsRender() {
    this.isRender = true;
  }

  moveUp() {
    if (this.y0 === 0) {
      return;
    }
    this.y0 -=1;
    this.isRender = false;
  }

  moveDown() {
    if (this.y0 === Constants.levelSize - Constants.cameraSize) {
      return;
    }
    this.y0 +=1;
    this.isRender = false;
  }

  moveLeft() {
    if (this.x0 === 0) {
      return;
    }
    this.x0 -=1;
    this.isRender = false;
  }

  moveRight() {
    if (this.x0 === Constants.levelSize - Constants.cameraSize) {
      return;
    }
    this.x0 +=1;
    this.isRender = false;
  }

}
