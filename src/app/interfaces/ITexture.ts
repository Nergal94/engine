export interface ITexture {
  id: string,
  height: number,
  width: number,
  texture: any,
  getTexture: (sX: number, sY: number, assetId: string) => HTMLCanvasElement
}
