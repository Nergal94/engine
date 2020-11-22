import {ITexture} from "../interfaces/index";

export default class Textures {
  private _textures: [ITexture]

  constructor(textures: [ITexture]) {
    this._textures = textures;
  }

  private async loadImage(imgData: ITexture) {
    imgData.image.src = imgData.src;
    return new Promise<void> (resolve => {
      imgData.image.addEventListener('load', () => {
        resolve();
      })
    });
  }

  public async loadTextures() {
    for (const img of this._textures) {
      await this.loadImage(img);
    }
  }

  public getImage(id:string) {
    const texture = this._textures.find(item => item.id === id);
    return texture ? texture.image : null;
  }

};
