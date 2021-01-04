import {IUserController} from "../interfaces/IUserController";
import {ICanvasData} from "../interfaces/IAssets";
import {ICamera} from "../interfaces/ICamera";

export class MouseController implements IUserController{
  isoX: number;
  isoY: number;

  setControllerPosition(e: MouseEvent, canvas: ICanvasData, camera: ICamera) {
    this.isoX = e.offsetX;
    this.isoY = e.offsetY;

    if (this.isoX < canvas.width / 2 && this.isoY > canvas.height / 2) {
      camera.moveDown();
    }

    if (this.isoX > canvas.width / 2 && this.isoY < canvas.height / 2) {
      camera.moveUp();
    }

    if (this.isoX > canvas.width / 2 && this.isoY > canvas.height / 2) {
      camera.moveRight();
    }

    if (this.isoX < canvas.width / 2 && this.isoY < canvas.height / 2) {
      camera.moveLeft();
    }
  }
}
