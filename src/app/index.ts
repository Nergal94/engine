import Game from "./general/Game";
import {Camera} from "./general/Camera";
import {GameLoop} from "./general/GameLoop";
import {ImageLoader} from "./Loaders/ImageLoader";
import {ILayer} from "./interfaces/ILayer";
import {KeyboardController} from "./Controllers/KeyboardController";
import {Layer} from "./general/Layer";
import {Assets} from "./general/Assets";
const game = new Game('canvas',768, 1024);

const layersData = require('../assets/dnd.json');

const startUp = async () => {
  game.init();
  const data = game.canvasData;

  const assets = new Assets(layersData.tilesets);

  await assets.loadAssets();

  const layers: ILayer[] = [];

  for (const layerData of layersData.layers) {
    // if (layerData.name != 'decor') {
    //   continue;
    // }
    const layer = new Layer(layerData);
    layer.fillLayerMatrix(assets);
    layers.push(layer);
  }


  const camera = new Camera(data, layers);
  GameLoop.init(camera, data);

  const controller = new KeyboardController();

  const canvas = document.getElementById('canvas');

  window.addEventListener('keydown', e => controller.setControllerPosition(e, data, camera))

}

startUp();

