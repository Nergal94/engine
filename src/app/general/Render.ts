import {ICanvasData} from "../interfaces/IAssets";
import {ICamera} from "../interfaces/ICamera";

export class Render {

  static renderLayer(layer: any[], canvasData: ICanvasData) {
    for (let i in layer) {
      for (let j in layer[i]) {
        const tile = layer[i][j];
        if (tile.id === 'empty') {
          continue;
        }
        const cartX: number = Number(j) * tile.width / 2;
        const cartY: number = Number(i) * tile.height / 2;

        const isoX: number = cartX - cartY + canvasData.width / 2 - tile.width / 2;
        const isoY: number = (cartX + cartY) / 2 + canvasData.height / 8;

        canvasData.context.drawImage(tile.texture, isoX, isoY, tile.width, tile.height);
      }
    }
  }

  static render(camera: ICamera, canvasData: ICanvasData) {
    if (camera.isRender) {
      return;
    }

    canvasData.context.clearRect(0, 0, canvasData.width, canvasData.height);
    canvasData.context.fillStyle = '#000';
    canvasData.context.fillRect(0,0, canvasData.width, canvasData.height);

    const layers = camera.getCamera;

    for (const layer of layers) {
      this.renderLayer(layer, canvasData);
    }

    camera.setAsRender();
  }
}
