import {IAsset} from "../interfaces/IAssets";

export class Loader {
  static async load(asset: IAsset) {
    asset.asset.src = asset.src;
    return new Promise<void> (resolve => {
      if (!asset.src) {
        resolve();
      }
      asset.asset.addEventListener('load', () => {
        resolve();
      })
    });
  }
}
