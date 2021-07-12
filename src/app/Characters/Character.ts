import {ICharacter} from "../interfaces/ICharacter";
import {ILayer} from "../interfaces/ILayer";
import {IAsset, IAssets} from "../interfaces/IAssets";
import {ICharacterData} from "../interfaces/ICharacterData";
import {ILayerData} from "../interfaces/ILayerData";
import {Constants} from "../enums/constants";
import {Layer} from "../general/Layer";
import {Camera} from "../general/Camera";
import {Render} from "../general/Render";

export class Character implements ICharacter {
  characterData: ICharacterData;
  assets: IAssets;
  assetId: string;
  x: number;
  y: number;

  constructor(assetId: string, x: number, y: number, characterData: ICharacterData, assets: IAssets) {
    this.characterData = characterData;
    this.assets = assets;
    this.assetId = assetId;
    this.x = x;
    this.y = y;
  }

  private setCharacterPosition(data: number[]) {
    const tileOffset = this.assets.assetsData.find(a => {
      return this.assetId === a.source.split('.')[0];
    }).firstgid;

    const sprite: IAsset = this.assets.sprites.find(s => s.id === this.assetId);


    const {naturalWidth, naturalHeight} = sprite.asset;

    const maxInRow = naturalWidth / Constants.tileWidth;
    const maxRow = naturalHeight / Constants.tileHeight;

    data[(this.y) * Constants.levelSize + (this.x)] = this.characterData.leftStand + tileOffset;
    data[(this.y - 1) * Constants.levelSize + (this.x + 1)] = this.characterData.leftStand + tileOffset + 1;

    data[(this.y + 1) * Constants.levelSize + (this.x + 1)] = this.characterData.leftStand + maxInRow + tileOffset;
    data[(this.y) * Constants.levelSize + (this.x + 2)] = this.characterData.leftStand + maxInRow + tileOffset + 1;

    data[(this.y + 2) * Constants.levelSize + (this.x + 2)] = this.characterData.leftStand + 2 * maxInRow + tileOffset;
    data[(this.y + 1) * Constants.levelSize + (this.x + 3)] = this.characterData.leftStand + 2 * maxInRow + tileOffset + 1;

  }

  private generateLayer() {
    const layerData: ILayerData = {
      id: Math.random(),
      name: this.assetId,
      data: new Array(Constants.levelSize * Constants.levelSize).fill(0),
      height: Constants.levelSize,
      width: Constants.levelSize
    }

    this.setCharacterPosition(layerData.data);

    const layer = new Layer(layerData);
    layer.fillLayerMatrix(this.assets);
    return layer;
  }

  get layer() {
    return this.generateLayer();
  }

  move() {
    if (this.y === Constants.levelSize) {
      return;
    }
    this.y += 1;
    Camera.setAsNeedRender();
  }
}
