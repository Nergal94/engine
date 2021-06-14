// import {ITile} from "../interfaces/ITile";
// import {Constants} from "../enums/constants";
// import {IAsset} from "../interfaces/IAssets";
//
// export class Texture implements ITile {
//   id: string;
//   sHeight: number = Constants.tileHeight;
//   sWidth: number =  Constants.tileWidth;
//
//   height: number = Constants.tileHeight;
//   width: number = Constants.tileWidth;
//
//   get texture() {
//     return this.getTexture(assets,0,0, 'id');
//   }
//
//   getTexture(assets: IAsset[], sX: number, sY: number, assetId: string) {
//     const imageData = assets.find(data => data.id === assetId);
//     const canvas = document.createElement('canvas');
//
//     const {asset} = imageData;
//
//     canvas.setAttribute('width', String(this.width));
//     canvas.setAttribute('height', String(this.height));
//
//     const ctx = canvas.getContext('2d');
//
//     ctx.drawImage(asset, sX, sY, this.sWidth, this.sHeight, 0, 0, this.width, this.height);
//     return canvas;
//   }
//
// }
//
