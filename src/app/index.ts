import Game from "./general/Game";
import Textures from "./general/Textures";
import Element from "./general/Element";
import { texturePack } from '../textures/index';

const textures = new Textures(texturePack);
const game = new Game('canvas',600, 800);

const startUp = async () => {
  await textures.loadTextures();
  game.init();
  const img = textures.getImage('test');
  const element = new Element(img, 50, 50);
  game.appendModel(element.model);
}

startUp();

