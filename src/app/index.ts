import Game from "./general/Game";
import {Camera} from "./general/Camera";
import {GameLoop} from "./general/GameLoop";
import {ImageLoader} from "./Loaders/ImageLoader";
import {imagesPack} from "./enums/images";
import {GroundLayer} from "./levels/GroundLayer";
import {level1} from "./enums/level1";
import {ILevel} from "./interfaces/ILevel";
import {WallLayer} from "./levels/WallLayer";
const game = new Game('canvas',768, 1024);

const startUp = async () => {
  game.init();
  const data = game.canvasData;
  await ImageLoader.loadAll(imagesPack);

  const layers: ILevel[] = [];

  const ground = new GroundLayer();
  ground.createLevel();

  const walls = new WallLayer();
  walls.createLevel();

  layers.push(ground);
  layers.push(walls);

  const camera = new Camera(data, layers);
  GameLoop.init(camera, data);
}

startUp();

