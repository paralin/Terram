export interface IPosition {
  X: number;
  Y: number;
}

export interface IScale {
  XScale: number;
  YScale: number;
}

export interface ITransformData {
  Position: IPosition;
  Scale: IScale;
}
