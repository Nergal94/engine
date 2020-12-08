import {Render} from "./Render";
import {ICanvasData} from "../interfaces/IAssets";
import {ICamera} from "../interfaces/ICamera";

export class GameLoop {

  static init(camera: ICamera, canvasData: ICanvasData) {
    requestAnimationFrame(() => {
      Render.render(camera, canvasData);
      requestAnimationFrame(() => this.init(camera, canvasData));
    });
  }
}
