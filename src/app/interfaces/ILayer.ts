import {ITile} from "./ITile";
import {ILayerData} from "./ILayerData";

export interface ILayer {
  layerMatrix: ITile[][],
  layerData: ILayerData
}
