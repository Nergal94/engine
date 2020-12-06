import {ICanvasData} from "../interfaces/index";

export class Render {

  static render(camera: HTMLCanvasElement, canvasData: ICanvasData) {
    canvasData.context.drawImage(camera, 0, 0, canvasData.width, canvasData.height);
  }
}
