import { IFrontendEntity, IFrontendComponent } from '@fusebot/goterram';
import { IGameCommon } from '../../../engine/common';
import { ITransformData } from '../common';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class TransformComponent implements IFrontendComponent {
  public transform: BehaviorSubject<ITransformData>;

  constructor(private ent: IFrontendEntity,
              private common: IGameCommon) {
    this.transform = new BehaviorSubject<ITransformData>(null);
  }

  public setPosition(posa: ITransformData[]) {
    this.transform.next(posa[0]);
  }
}
