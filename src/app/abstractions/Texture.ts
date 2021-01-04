import {ITexture} from "../interfaces/ITexture";
import {imagesPack} from "../enums/images";
import {Constants} from "../enums/constants";

export abstract class Texture implements ITexture {
  id: string;
  sHeight: number = Constants.tileHeight;
  sWidth: number =  Constants.tileWidth;

  height: number = Constants.tileHeight;
  width: number = Constants.tileWidth;

  protected constructor(id: string) {
    this.id = id;
  }

  get texture() {
    return this.getTexture(0,0, 'id');
  }

  getTexture(sX: number, sY: number, assetId: string) {
    const imageData = imagesPack.find(data => data.id === assetId);
    const canvas = document.createElement('canvas');

    const {asset} = imageData;

    canvas.setAttribute('width', String(this.width));
    canvas.setAttribute('height', String(this.height));

    const ctx = canvas.getContext('2d');

    ctx.drawImage(asset, sX, sY, this.sWidth, this.sHeight, 0, 0, this.width, this.height);
    return canvas;
  }

}

