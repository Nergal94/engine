export interface IAsset {
  id: string,
  asset: any,
  sX?: number,
  sY?: number,
  sWidth?: number,
  sHeight?: number,
  src: string
}

export interface ICanvasData {
  context: any,
  width: number,
  height: number
}
