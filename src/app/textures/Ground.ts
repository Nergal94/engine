import {Texture} from "../abstractions/Texture";

export class Ground extends Texture {

  height: number;
  width:number;

  constructor(id: string) {
    super(id);
  }
}
