import {ICanvasData} from "../interfaces/IAssets";
import {ICamera} from "../interfaces/ICamera";
import {ITile} from "../interfaces/ITile";
import {Constants} from "../enums/constants";
import {Camera} from "./Camera";
import {ILayer} from "../interfaces/ILayer";

export class Render {

  static renderLayer(layer: ITile[][], canvasData: ICanvasData) {
    for (let i in layer) {
      for (let j in layer[i]) {
        const tile = layer[i][j];
        if (!tile.tile) {
          continue;
        }

        const cartX: number = Number(j) * Constants.tileWidth / 2;
        const cartY: number = Number(i) * Constants.tileHeight;

        const isoX: number = cartX - cartY + canvasData.width / 2 - Constants.tileWidth / 2;
        const isoY: number = (cartX + cartY) / 2 + canvasData.height / 8;

        // const isoX: number = ((Constants.tileWidth * Number(j)) / 2) + ((Constants.levelSize * Constants.tileWidth) / 2) - ((Number(i) * Constants.tileWidth) / 2);
        // const isoY: number = (((Constants.levelSize - Number(i) - 1) * Constants.tileHeight) / 2) + ((Constants.levelSize * Constants.tileHeight) / 2) - ((Number(j) * Constants.tileHeight) / 2);

        canvasData.context.drawImage(tile.tile, isoX, isoY, Constants.tileWidth, Constants.tileHeight);
      }
    }
  }

  static render(fullLayers : ILayer[],canvasData: ICanvasData) {
    if (Camera.isRender) {
      return;
    }

    canvasData.context.clearRect(0, 0, canvasData.width, canvasData.height);
    canvasData.context.fillStyle = '#000';
    canvasData.context.fillRect(0,0, canvasData.width, canvasData.height);

    const layers = Camera.getCamera(fullLayers);

    for (const layer of layers) {
      this.renderLayer(layer, canvasData);
    }

    Camera.setAsRender();
  }
}
