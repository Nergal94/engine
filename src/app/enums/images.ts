import {IAsset} from "../interfaces/IAssets";

const main: IAsset = {
  id: 'main',
  asset: new Image(),
  src: require('../../assets/dnd.png')
}

const structure: IAsset = {
  id: 'structure',
  asset: new Image(),
  src: require('../../assets/grassland_structures.png')
}



export const imagesPack: IAsset[] = [
  main,
  structure
]
