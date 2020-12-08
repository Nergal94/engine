import {Level} from "../abstractions/Level";
import {ITexture} from "../interfaces/ITexture";
import {Constants} from "../enums/constants";
import {Ground} from "../textures/Ground";

export class GroundLayer extends Level{
  levelMatrix: ITexture[][]

  createLevel() {
    const level = [];
    for (let i = 0; i < Constants.levelSize; i ++) {
      const levelRow = [];
      for (let j = 0; j < Constants.levelSize; j++) {
        const isRowEven = i % 2;
        const isColumnEven = j % 2;

        let ground:ITexture;

        if (!isRowEven && !isColumnEven) {
          ground = new Ground('ground1');
        }

        if (!isRowEven && isColumnEven) {
          ground = new Ground('ground2');
        }

        if (isRowEven && !isColumnEven) {
          ground = new Ground('ground3');
        }

        if (isRowEven && isColumnEven) {
          ground = new Ground('ground4');
        }
        levelRow.push(ground);
      }
      level.push(levelRow);
    }

    this.levelMatrix = level;
  }
}
