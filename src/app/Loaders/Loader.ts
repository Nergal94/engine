import {IAsset} from "../interfaces/IAssets";

export default class Loader {
  static async loadAsset(asset: IAsset) {
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
