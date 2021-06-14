import {IAsset, IAssetData, IAssets} from "../interfaces/IAssets";
import {ImageLoader} from "../Loaders/ImageLoader";
import {Constants} from "../enums/constants";

export class Assets implements IAssets {
  sprites: IAsset[];
  assetsData: IAssetData[];

  constructor(assetsData: IAssetData[]) {
    this.assetsData = assetsData;
    this.sprites = [];
  }

  async loadAssets() {
    this.assetsData.map(a => {
      const asset: IAsset =  {
        id: a.source.split('.')[0],
        firstTile: a.firstgid,
        lastTile: 0,
        asset: new Image(),
        src: `./public/assets/${ a.source.split('.')[0] }.png`
      }
      this.sprites.push(asset);
    });

    this.sprites.map((s, i) => {
      if (this.sprites[i +1]) {
        s.lastTile = this.sprites[i + 1].firstTile - 1;
      } else {
        s.lastTile = Constants.maxTileID;
      }
    })

    await ImageLoader.loadAll(this.sprites);
  }
}
