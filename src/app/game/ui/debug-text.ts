import { EGameOperatingMode, EGameOperatingModeString } from '@fusebot/goterram';
import * as PIXI from 'pixi.js/bin/pixi.js';
import { IGameCommon } from '../../engine/common';
// tslint:disable-next-line
let Stats = require('stats.js');

interface IObservableSubscription {
  unsubscribe();
}

export class DebugText {
  public opMode: EGameOperatingMode = EGameOperatingMode.LOCAL;
  private opModeText: PIXI.Text;
  private stats: Stats;
  private subs: IObservableSubscription[] = [];

  constructor(private common: IGameCommon) {}

  public init() {
    this.stats = new Stats();
    this.common.container.appendChild(this.stats.dom);
    this.subs.push(this.common.renderSubjects.preRender.subscribe(() => {
      this.stats.begin();
    }));
    this.subs.push(this.common.renderSubjects.postRender.subscribe(() => {
      this.stats.end();
    }));

    this.opModeText = new PIXI.Text(this.opModeString, {
      fontFamily: 'Arial',
      fontSize: '24px',
      fill: '#FFFFFF',
    });
    this.opModeText.x = 10;
    this.opModeText.y = 50;
    this.common.stage.addChild(this.opModeText);
  }

  public setGameOperatingMode(opMode: EGameOperatingMode) {
    this.opModeText.text = this.opModeString;
  }

  get opModeString() {
    return 'Operating mode: ' + EGameOperatingModeString[this.opMode];
  }

  public destroy() {
    if (this.opModeText) {
      this.common.stage.removeChild(this.opModeText);
      this.opModeText.destroy();
      this.opModeText = null;
    }
    if (this.stats) {
      this.common.container.removeChild(this.stats.dom);
      this.stats = null;
    }

    for (let sub of this.subs) {
      sub.unsubscribe();
    }
    this.subs = [];
  }
}
