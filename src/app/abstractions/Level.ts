import {ILevel} from "../interfaces/ILevel";
import {ITexture} from "../interfaces/ITexture";
import {TextureById} from "../textures/TextureById";

export abstract class Level implements ILevel{
  levelMatrix: ITexture[][];

  createLevel(levelPattern: string) {
    const tempLevelMatrix = [];
    let array = levelPattern.split(/\n/);
    array = array.filter(item => {
      return item != "";
    });
    for (let i in array) {
      const line: string[] = array[i].split(',');
      if (line.length) {
        const texturesArray = [];
        for (const id of line) {
          const texture = new TextureById(id);
          texturesArray.push(texture);
        }
        tempLevelMatrix.push(texturesArray);
      }
    }
    this.levelMatrix = tempLevelMatrix;
  }
}
