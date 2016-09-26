import {
  IFrontendComponent,
  IFrontendEntity,
} from '@fusebot/goterram';
import { IGameCommon } from './common';

export interface IFrontendComponentFactory {
  new(ent: IFrontendEntity, common: IGameCommon): IFrontendComponent;
}
