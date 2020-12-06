import {IAsset} from "../app/interfaces/index";

const test: IAsset = {
  id: 'test',
  asset: new Image(),
  src: require('../assets/food.svg')
}

export const assetsPack: [IAsset] = [
  test
]
