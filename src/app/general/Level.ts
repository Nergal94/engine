
import {ILevel} from "../interfaces/ILevel";
import {ITexture} from "../interfaces/ITexture";

export class Level implements ILevel{
  levelMatrix: ITexture[][];
  tmx: any;

  constructor() {

  }

  createLevel(tmx: any) {
    // const parcer = new DOMParser()
    // this.tmx = parcer.parseFromString(tmx, "text/xml");
    console.log(tmx);
  }
}
