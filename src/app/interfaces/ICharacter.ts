import {ILayer} from "./ILayer";
import {IAssets} from "./IAssets";
import {ICharacterData} from "./ICharacterData";

export interface ICharacter {
  characterData: ICharacterData,
  assets: IAssets,
  assetId: string,
  layer: ILayer,
  x: number,
  y:number,
}
