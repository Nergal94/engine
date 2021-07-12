import {IUserController} from "../interfaces/IUserController";
import {ICanvasData} from "../interfaces/IAssets";
import {Camera} from "../general/Camera";

export class KeyboardController implements IUserController{

  setControllerPosition(e: KeyboardEvent, canvas: ICanvasData) {
    switch (e.key) {
      case 'ArrowDown': {
        Camera.moveDown();
        break;
      }
      case 'ArrowUp': {
        Camera.moveUp();
        break;
      }
      case 'ArrowLeft': {
        Camera.moveLeft();
        break;
      }
      case 'ArrowRight': {
        Camera.moveRight();
        break;
      }
    }
  }
}
