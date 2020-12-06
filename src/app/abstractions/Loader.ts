import {IAsset, ILoader} from "../interfaces/index";

export default abstract class Loader implements ILoader{
  async loadAsset(asset: IAsset) {
    asset.asset.src = asset.src;
    return new Promise<void> (resolve => {
      asset.asset.addEventListener('load', () => {
        resolve();
      })
    });
  }
}
