import { IFrontendEntity, IFrontendComponent } from '@fusebot/goterram';
import { IGameCommon } from '../../../engine/common';
import { ITransformData } from '../common';
import { TransformComponent } from '../transform';
import { ISubscription } from 'rxjs/Subscription';
import * as PIXI from 'pixi.js/bin/pixi.js';

export interface ISpriteData {
}

export class SpriteComponent implements IFrontendComponent {
  public data: ISpriteData;
  public sprite: PIXI.Sprite;

  private transformSub: ISubscription;
  private transformComponent: TransformComponent;

  constructor(private ent: IFrontendEntity,
              private common: IGameCommon) {}

  public setData(dataa: ISpriteData[]) {
    this.data = dataa[0];
  }

  public initLate() {
    this.sprite = new PIXI.Sprite(PIXI.Texture.fromImage('assets/img/ball.png'));
    this.common.stage.addChild(this.sprite);

    let tc: TransformComponent = <TransformComponent>this.ent.getComponent(1);
    this.transformComponent = tc;
    this.transformSub = tc.transform.subscribe((data) => {
      this.setTransform(data);
    });
  }

  public setTransform(data: ITransformData) {
    if (!this.sprite) {
      return;
    }

    this.sprite.position.x = data.Position.X;
    this.sprite.position.y = data.Position.Y;

    this.sprite.scale.x = data.Scale.XScale;
    this.sprite.scale.y = data.Scale.YScale;
  }

  public destroy() {
    if (this.transformSub) {
      this.transformSub.unsubscribe();
    }
    this.common.stage.removeChild(this.sprite);
    this.sprite = null;
  }
}
