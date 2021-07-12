import Game from "./general/Game";
import {Camera} from "./general/Camera";
import {GameLoop} from "./general/GameLoop";
import {ImageLoader} from "./Loaders/ImageLoader";
import {ILayer} from "./interfaces/ILayer";
import {KeyboardController} from "./Controllers/KeyboardController";
import {Layer} from "./general/Layer";
import {Assets} from "./general/Assets";
import {Hero} from "./Characters/Hero";
import {heroData} from "./enums/HeroData";
const game = new Game('canvas',768, 1024);

const layersData = require('../assets/dnd.json');

const startUp = async () => {
  game.init();
  const data = game.canvasData;

  const assets = new Assets(layersData.tilesets);

  await assets.loadAssets();

  const layers: ILayer[] = [];

  for (const layerData of layersData.layers) {
    if (!layerData.visible) {
      continue;
    }
    const layer = new Layer(layerData);
    layer.fillLayerMatrix(assets);
    layers.push(layer);
  }

  const hero = new Hero('skeleton_0', 11, 3, heroData, assets);

  layers.push(hero.layer);

  setInterval(() => {
    hero.move();
    layers.splice(layers.findIndex(l => l.layerData.name === hero.assetId), 1);
    layers.push(hero.layer);
  }, 1000);




  // const camera = new Camera(data, layers);
  GameLoop.init(layers, data);

  const controller = new KeyboardController();

  const canvas = document.getElementById('canvas');

  window.addEventListener('keydown', e => controller.setControllerPosition(e, data))

}

startUp();

