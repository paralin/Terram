import {
  IFrontendEntity,
  IFrontendComponent,
  INetEntity,
} from '@fusebot/goterram';
import { IGameCommon } from '../../engine/common';
import { TERRAM_COMPONENTS } from '../components';

export class TerramEntity implements IFrontendEntity {
  public components: { [id: number]: IFrontendComponent };

  constructor(private common: IGameCommon,
              private netEntity: INetEntity) {
    this.components = {};
  }

  public addComponent(id: number): IFrontendComponent {
    let cf = TERRAM_COMPONENTS[id];
    if (!cf) {
      return;
    }
    let ent = new cf(this, this.common);
    this.components[id] = ent;
    return ent;
  }

  public getComponent(id: number): IFrontendComponent {
    return this.components[id];
  }
}
