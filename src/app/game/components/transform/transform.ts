import { IFrontendEntity, IFrontendComponent } from '@fusebot/goterram';
import { IGameCommon } from '../../../engine/common';
import { ITransformData, ITransformSubscriber } from '../common';

export class TransformComponent implements IFrontendComponent {
  public transform: ITransformData;
  private initDone: boolean = false;

  constructor(private ent: IFrontendEntity,
              private common: IGameCommon) {}

  public setPosition(posa: ITransformData[]) {
    let pos = posa[0];
    this.transform = pos;
    if (!this.initDone) {
      return;
    }
    for (let componentId in this.ent.components) {
      if (!this.ent.components.hasOwnProperty(componentId)) {
        continue;
      }
      let component: ITransformSubscriber = this.ent.components[componentId];
      if (component === this) {
        continue;
      }
      if (component.setTransform) {
        component.setTransform(pos);
      }
    }
  }

  public initLate() {
    this.initDone = true;
    if (this.transform) {
      this.setPosition([this.transform]);
    }
  }
}
