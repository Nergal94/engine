export default abstract class Model {
  readonly _img: any;
  readonly _height: number;
  readonly _width: number;
  private _model: HTMLCanvasElement;

  protected constructor(img: any, width: number, height: number) {
    this._img = img;
    this._height = height;
    this._width = width;
  }

  private createModel() {
    this._model = document.createElement('canvas');
    const ctx = this._model.getContext('2d');
    ctx.drawImage(this._img, 0, 0, this._width, this._height);
  }

  get model() {
    this.createModel();
    return this._model;
  }
}
