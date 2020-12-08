import {ICanvasData} from "../interfaces/IAssets";
import {ICamera} from "../interfaces/ICamera";
import {Constants} from "../enums/constants";
import {ITexture} from "../interfaces/ITexture";
import {ILevel} from "../interfaces/ILevel";

export class Camera implements ICamera{

  x0: number;
  xEnd: number;

  y0: number;
  yEnd: number;

  isRender: boolean =  false;

  readonly _layers: ILevel[];

  private _cameraMatrix: any[] = [];

  readonly _width: number;
  readonly _height: number;

  constructor(data: ICanvasData, layers: ILevel[]) {
    this._width = data.width;
    this._height = data.height;
    this.x0 = 0;
    this.y0 = 0;
    this.xEnd = this.x0 + this._width;
    this.yEnd = this.y0 + this._height;
    this._layers = layers;
  }

  private getLayer(levelLayer: ILevel) {
    const cameraLayer = Array.from({length: Constants.cameraSize},
      (_, i) => Array.from({length : Constants.cameraSize}));
    for (let y = 0; y < Constants.cameraSize; y++) {
      for (let x = 0; x < Constants.cameraSize; x++) {
        cameraLayer[y][x] = levelLayer.levelMatrix[y][x];
      }
    }
    return cameraLayer;
  }

  private fillMatrix() {
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
}
