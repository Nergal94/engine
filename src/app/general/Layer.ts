import {ILayer} from "../interfaces/ILayer";
import {ITile} from "../interfaces/ITile";
import {ILayerData} from "../interfaces/ILayerData";
import {Constants} from "../enums/constants";
import {IAsset, IAssets} from "../interfaces/IAssets";

export class Layer implements ILayer {
  layerMatrix: ITile[][];
  layerData: ILayerData

  constructor(layerData: any) {
    this.layerData = layerData;
    this.layerMatrix = [];
  }

  private getTileRow(firstIndex: number, lastIndex: number) {
    const row = [];
    for (let i = firstIndex; i < lastIndex; i++) {
      row.push(this.layerData.data[i]);
    }
    return row;
  }

  private generateTile(assets: IAssets, id: number) {
    let tileId = id;
    const sHeight: number = Constants.tileHeight;
    const sWidth: number = Constants.tileWidth;

    const height: number = Constants.tileHeight;
    const width: number = Constants.tileWidth;

    let sX = Constants.tileWidth * (tileId - 1);
    let sY = 0;

    const sprite: IAsset = assets.sprites.find(s => tileId >= s.firstTile && tileId <= s.lastTile);

    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', String(width));
    canvas.setAttribute('height', String(height));
    const ctx = canvas.getContext('2d');

    if (!sprite) {
      return false;
    }


    if (sprite.firstTile != 1) {
      tileId = tileId - sprite.firstTile + 1;
    }

    // !tileId && (tileId = 1);

    const {asset} = sprite;

    const {naturalWidth, naturalHeight} = asset;

    const maxInRow = naturalWidth / Constants.tileWidth;
    const maxRow = naturalHeight / Constants.tileHeight;

    let currentTileIdRow = 0;

    if (tileId > maxInRow) {
      for (let i = 0; i < maxRow; i++) {
        if (tileId > i * maxInRow && tileId <= (i * maxInRow + maxInRow)) {
          // console.log(tileId, i * maxInRow, (i * maxInRow + maxInRow));
          currentTileIdRow = i;
        }
      }

      sX = (tileId - maxInRow * currentTileIdRow - 1) * Constants.tileWidth;
      sY = Constants.tileHeight * currentTileIdRow;

      // console.log(tileId, maxInRow, currentTileIdRow, sX)
    }

    ctx.drawImage(asset, sX, sY, sWidth, sHeight, 0, 0, width, height);
    return canvas;

  }

  fillLayerMatrix(assets: IAssets) {
    const quantityRows = this.layerData.data.length / Constants.levelSize;
    const layerMatrixTileId: any = [];
    for (let i = 0; i < quantityRows; i++) {
      layerMatrixTileId.push(this.getTileRow((i * Constants.levelSize), ((i + 1) * 32)))
    };

    for (let i = 0; i < layerMatrixTileId.length; i++) {
      for (let j = 0; j < layerMatrixTileId[i].length; j++) {
        const tile: ITile = {
          tile: this.generateTile(assets, layerMatrixTileId[i][j])
        }
        layerMatrixTileId[i][j] = tile;
      }
    }

    this.layerMatrix = layerMatrixTileId;
  }

}
