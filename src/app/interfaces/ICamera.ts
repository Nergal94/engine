import {ITexture} from "./ITexture";

export interface ICamera {
  x0: number,
  y0: number,
  xEnd: number,
  yEnd: number,
  isRender: boolean,
  getCamera: ITexture[][],
  moveUp: any,
  moveDown: any,
  moveLeft: any,
  moveRight: any,
  setAsRender: () => void
} 
