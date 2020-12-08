import {ICanvasData} from "../interfaces/IAssets";

export default class Game {
  private _ctx: any;
  public height: number;
  public width: number;
  public id: string;

  constructor(id: string, height: number, width: number) {
    this.id = id;
    this.height = height;
    this.width = width;
  }

  public init() {
    const body = document.querySelector('body');
    const canvas = document.createElement('canvas');

    canvas.setAttribute('width', String(this.width));
    canvas.setAttribute('height', String(this.height));
    canvas.setAttribute('id', this.id);

    body.appendChild(canvas);
    this._ctx = canvas.getContext('2d');
  }

  get canvasData() {
    const data: ICanvasData = {
      context: this._ctx,
      width: this.width,
      height: this.height
    }
    return data;
  }
}
