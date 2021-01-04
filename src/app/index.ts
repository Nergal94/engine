import Game from "./general/Game";
import {Camera} from "./general/Camera";
import {GameLoop} from "./general/GameLoop";
import {ImageLoader} from "./Loaders/ImageLoader";
import {imagesPack} from "./enums/images";
import {ILevel} from "./interfaces/ILevel";
import {MouseController} from "./Controllers/MouseController";
import {Level} from "./general/Level";
import {LevelLoader} from "./Loaders/LevelLoader";
// import {mainLevel} from "./enums/MainLevel";
const game = new Game('canvas',768, 1024);

const mainLevel = require('../assets/dnd.xml');

const startUp = async () => {
  game.init();
  const data = game.canvasData;
  // await ImageLoader.loadAll(imagesPack);
  // const levelFile:any = await LevelLoader.loadLevel(mainLevel);

  const MainLevel = new Level();
  MainLevel.createLevel(mainLevel);

  const layers: ILevel[] = [];


  const camera = new Camera(data, layers);
  GameLoop.init(camera, data);

  const controller = new MouseController();

  const canvas = document.getElementById('canvas');

  canvas.addEventListener('mousemove', e => controller.setControllerPosition(e, data, camera))

}

startUp();

