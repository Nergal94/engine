import Game from "./general/Game";
import {Camera} from "./general/Camera";
import {GameLoop} from "./general/GameLoop";
const game = new Game('canvas',600, 800);

const startUp = async () => {
  game.init();
  const data = game.canvasData;
  const camera = new Camera(data);

  GameLoop.init(camera.view, data);
}

startUp();

