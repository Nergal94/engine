import {ITexture} from "../app/interfaces/index";

const test: ITexture = {
  id: 'test',
  image: new Image(),
  src: require('../assets/food.svg')
}

export const texturePack: [ITexture] = [
  test
]
