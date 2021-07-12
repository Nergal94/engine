import {Render} from "./Render";
import {ICanvasData} from "../interfaces/IAssets";
import {ILayer} from "../interfaces/ILayer";

export class GameLoop {

  static init(layers: ILayer[], canvasData: ICanvasData) {
    requestAnimationFrame(() => {
      Render.render(layers, canvasData);
      requestAnimationFrame(() => this.init(layers, canvasData));
    });
  }
}
