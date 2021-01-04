import {Loader} from "./Loader";
import {IAsset} from "../interfaces/IAssets";

export class ImageLoader extends Loader {

  static async loadAll(images: IAsset[]) {
    const allLoaders = [];
    for (const image of images) {
      allLoaders.push(this.load(image));
    }

    return Promise.all(allLoaders);
  }
}
