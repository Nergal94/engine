import {ITile} from "./ITile";

export interface ICamera {
  x0: number,
  y0: number,
  xEnd: number,
  yEnd: number,
  isRender: boolean,
  getCamera: ITile[][][],
  moveUp: any,
  moveDown: any,
  moveLeft: any,
  moveRight: any,
  setAsRender: () => void
} 
