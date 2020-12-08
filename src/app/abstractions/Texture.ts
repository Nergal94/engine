import {ITexture} from "../interfaces/ITexture";
import {imagesPack} from "../enums/images";
import {Constants} from "../enums/constants";

export abstract class Texture implements ITexture {
  id: string;
  height: number = Constants.tileSize;
  width: number = Constants.tileSize;

  protected constructor(id:string) {
    this.id = id;
  }

  get texture() {

    const imageData = imagesPack.find(data => data.id === this.id);
    const canvas = document.createElement('canvas');

    const {asset, sX, sY, sHeight, sWidth} = imageData;

    canvas.setAttribute('width', String(this.width));
    canvas.setAttribute('height', String(this.height));

    const ctx = canvas.getContext('2d');

    ctx.drawImage(asset, sX, sY, sWidth, sHeight, 0, 0, this.width, this.height);
    return canvas;
  }

}

