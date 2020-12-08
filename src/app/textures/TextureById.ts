import {Texture} from "../abstractions/Texture";

export class TextureById extends Texture
{

  height: number;
  width: number;

  constructor(id: string) {
    super(id);
  }
}
