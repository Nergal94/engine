import {ICanvasData} from "../interfaces/index";

export class Camera {

  private _height: number;
  private _width: number;

  constructor(data: ICanvasData) {
    this._width = data.width;
    this._height = data.height;
  }

  get view() {
    const canvas = document.createElement('canvas');

    canvas.setAttribute('width', String(this._width));
    canvas.setAttribute('height', String(this._height));

    const ctx = canvas.getContext('2d');

    ctx.fillStyle= "blue";

    ctx.fillRect(100, 100, 100, 100);


    return canvas;
  }
}
