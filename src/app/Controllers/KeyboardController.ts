import {IUserController} from "../interfaces/IUserController";
import {ICanvasData} from "../interfaces/IAssets";
import {ICamera} from "../interfaces/ICamera";

export class KeyboardController implements IUserController{

  setControllerPosition(e: KeyboardEvent, canvas: ICanvasData, camera: ICamera) {
    switch (e.key) {
      case 'ArrowDown': {
        camera.moveDown();
        break;
      }
      case 'ArrowUp': {
        camera.moveUp();
        break;
      }
      case 'ArrowLeft': {
        camera.moveLeft();
        break;
      }
      case 'ArrowRight': {
        camera.moveRight();
        break;
      }
    }
  }
}
