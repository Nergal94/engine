import {Texture} from "../abstractions/Texture";

export class Empty extends Texture{
  height: number;
  width:number;

  constructor() {
    super('empty');
  }
}
