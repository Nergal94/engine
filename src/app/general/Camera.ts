import {ICanvasData} from "../interfaces/IAssets";
import {ICamera} from "../interfaces/ICamera";
import {Constants} from "../enums/constants";
import {ILayer} from "../interfaces/ILayer";

export class Camera {

  static x0: number = 0;
  static xEnd: number;

  static y0: number = 0;
  static yEnd: number;

  static isRender: boolean =  false;

  private static _layers: ILayer[];

  private static _cameraMatrix: any[] = [];


  // constructor(data: ICanvasData, layers: ILayer[]) {
  //   this.x0 = 0;
  //   this.y0 = 0;
  //   this._layers = layers;
  // }

  private static getLayer(levelLayer: ILayer) {
    const cameraLayer = Array.from({length: Constants.cameraSize},
      (_, i) => Array.from({length : Constants.cameraSize}));
    for (let y = 0; y < Constants.cameraSize; y++) {
      for (let x = 0; x < Constants.cameraSize; x++) {
        cameraLayer[y][x] = levelLayer.layerMatrix[y + this.y0][x + this.x0];
      }
    }
    return cameraLayer;
  }

  private static fillMatrix() {
    this._cameraMatrix = [];
    for (const layerIndex in this._layers) {
      const layer = this._layers[layerIndex];
      this._cameraMatrix.push(this.getLayer(layer));
    }
  }

  static getCamera(layers: ILayer[]) {
    this._layers = layers;
    this.fillMatrix();
    return this._cameraMatrix;
  }

  static setAsNeedRender() {
    this.isRender = false;
  }

  static setAsRender() {
    this.isRender = true;
  }

  static moveUp() {
    if (this.y0 === 0) {
      return;
    }
    this.y0 -=1;
    this.setAsNeedRender();
  }

  static moveDown() {
    if (this.y0 === Constants.levelSize - Constants.cameraSize) {
      return;
    }
    this.y0 +=1;
    this.setAsNeedRender();
  }

  static moveLeft() {
    if (this.x0 === 0) {
      return;
    }
    this.x0 -=1;
    this.setAsNeedRender();
  }

  static moveRight() {
    if (this.x0 === Constants.levelSize - Constants.cameraSize) {
      return;
    }
    this.x0 +=1;
    this.setAsNeedRender();
  }

}
