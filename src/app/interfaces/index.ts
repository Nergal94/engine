export interface IAsset {
  id: string,
  asset: any,
  src: string
}


export interface ILoader {
  loadAsset: any
}

export interface ICanvasData {
  context: any,
  width: number,
  height: number
}
