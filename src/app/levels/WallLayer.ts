import {Level} from "../abstractions/Level";
import {ITexture} from "../interfaces/ITexture";
import {Constants} from "../enums/constants";
import {Ground} from "../textures/Ground";
import {Wall} from "../textures/Wall";
import {Empty} from "../textures/Empty";

export class WallLayer extends Level{
  levelMatrix: ITexture[][];

  createLevel() {
    const level = [];
    for (let i = 0; i < Constants.levelSize; i ++) {
      const levelRow = [];
      for (let j = 0; j < Constants.levelSize; j++) {

        const wallLeft = new Wall('wall-left');
        const wallTop = new Wall('wall-top');
        const wallAngleTop = new Wall('wall-angle-top');
        const empty = new Empty();

        let texture = empty;

        if (j === 0) {
          texture = wallLeft;
        }

        if (i === 0) {
          texture = wallTop
        }

        if (j === 0 && i === 0) {
          texture = wallAngleTop;
        }

        levelRow.push(texture);
      }
      level.push(levelRow);
    }

    this.levelMatrix = level;
  }
}
