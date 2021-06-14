export interface IAsset {
  id: string,
  firstTile: number,
  lastTile: number,
  asset: any,
  src: string
}

export interface IAssetData {
  firstgid: number,
  source: string
}

export interface ICanvasData {
  context: any,
  width: number,
  height: number
}

export interface IAssets {
  sprites: IAsset[],
  assetsData: IAssetData[]
}
