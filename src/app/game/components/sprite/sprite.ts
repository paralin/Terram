import { IFrontendEntity, IFrontendComponent } from '@fusebot/goterram';
import { IGameCommon } from '../../../engine/common';
import { ITransformData, ITransformSubscriber } from '../common';
import * as PIXI from 'pixi.js/bin/pixi.js';

export interface ISpriteData {
}

export class SpriteComponent implements IFrontendComponent, ITransformSubscriber {
  public data: ISpriteData;
  public sprite: PIXI.Sprite;
  private transform: ITransformData;

  constructor(private ent: IFrontendEntity,
              private common: IGameCommon) {}

  public setData(dataa: ISpriteData[]) {
    this.data = dataa[0];
  }

  public initLate() {
    this.sprite = new PIXI.Sprite(PIXI.Texture.fromImage('assets/img/ball.png'));
    this.common.stage.addChild(this.sprite);
    if (this.transform) {
      this.setTransform(this.transform);
    }
  }

  public setTransform(data: ITransformData) {
    console.log(data);
    this.transform = data;

    if (!this.sprite) {
      return;
    }

    this.sprite.position.x = data.Position.X;
    this.sprite.position.y = data.Position.Y;

    this.sprite.scale.x = data.Scale.XScale;
    this.sprite.scale.y = data.Scale.YScale;
  }

  public destroy() {
    this.common.stage.removeChild(this.sprite);
    this.sprite = null;
  }
}
