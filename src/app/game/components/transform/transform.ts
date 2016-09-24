import { IFrontendEntity, IFrontendComponent } from '@fusebot/goterram';
import { IGameCommon } from '../../../engine/common';

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

export class TransformComponent implements IFrontendComponent {
  constructor(private ent: IFrontendEntity,
              private common: IGameCommon) {}

  public setPosition(pos: ITransformData[]) {
    console.log(pos[0]);
  }

  public initLate() {
    console.log('init late');
  }
}
