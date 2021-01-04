import {Loader} from "./Loader";
import {IAsset} from "../interfaces/IAssets";

export class LevelLoader extends Loader {
  static async loadLevels(levels: IAsset[]) {
    const allLoaders = [];
    for (const level of levels) {
      allLoaders.push(this.load(level));
    }

    return Promise.all(allLoaders);
  }

  static async loadLevel(level: IAsset) {
    return this.load(level);
  }
}
