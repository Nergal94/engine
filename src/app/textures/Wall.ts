import {Texture} from "../abstractions/Texture";

export class Wall extends Texture {
  height: number;
  width:number;

  constructor(id: string) {
    super(id);
  }
}
