import {Render} from "./Render";
import {ICanvasData} from "../interfaces/index";

export class GameLoop {

  static init(camera: HTMLCanvasElement, canvasData: ICanvasData) {
    requestAnimationFrame(() => {
      Render.render(camera, canvasData);
      requestAnimationFrame(() => this.init(camera, canvasData));
    });
  }
}
