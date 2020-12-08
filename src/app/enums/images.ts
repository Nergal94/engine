import {IAsset} from "../interfaces/IAssets";

// const ground: IAsset = {
//   id: 'ground',
//   asset: new Image(),
//   src: require('../../assets/0.png'),
// }

const ground1: IAsset = {
  id: 'ground1',
  asset: new Image(),
  sX: 0,
  sY: 66,
  sWidth: 64,
  sHeight: 64,
  src: require('../../assets/tiled_cave_1.png'),
}

const ground2: IAsset = {
  id: 'ground2',
  asset: new Image(),
  sX: 64,
  sY: 66,
  sWidth: 64,
  sHeight: 64,
  src: require('../../assets/tiled_cave_1.png'),
}

const ground3: IAsset = {
  id: 'ground3',
  asset: new Image(),
  sX: 128,
  sY: 66,
  sWidth: 64,
  sHeight: 64,
  src: require('../../assets/tiled_cave_1.png'),
}

const ground4: IAsset = {
  id: 'ground4',
  asset: new Image(),
  sX: 194,
  sY: 66,
  sWidth: 64,
  sHeight: 64,
  src: require('../../assets/tiled_cave_1.png'),
}

const bones: IAsset = {
  id: 'bones',
  asset: new Image(),
  sX: 320,
  sY: 64,
  sWidth: 64,
  sHeight: 64,
  src: require('../../assets/bones.png'),
}

const wallTop: IAsset = {
  id: 'wall-left',
  asset: new Image(),
  sX: 256,
  sY: 66,
  sWidth: 64,
  sHeight: 64,
  src: require('../../assets/rocks.png'),
}

const wallBot: IAsset = {
  id: 'wall-top',
  asset: new Image(),
  sX: 64,
  sY: 66,
  sWidth: 64,
  sHeight: 64,
  src: require('../../assets/rocks.png'),
}

const wallAngleTop: IAsset = {
  id: 'wall-angle-top',
  asset: new Image(),
  sX: 512,
  sY: 66,
  sWidth: 64,
  sHeight: 64,
  src: require('../../assets/rocks.png'),
}

const empty: IAsset = {
  id: 'empty',
  asset: new Image(),
  src: null,
}

export const imagesPack: IAsset[] = [
  ground1,
  ground2,
  ground3,
  ground4,
  bones,
  wallTop,
  wallBot,
  empty,
  wallAngleTop
]
