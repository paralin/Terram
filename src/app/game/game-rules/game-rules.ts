import { IFrontendGameRules, EGameOperatingMode } from '@fusebot/goterram';
import * as PIXI from 'pixi.js/bin/pixi.js';

export class TerramGameRules implements IFrontendGameRules {
  private opModeText: PIXI.Text;
  private opMode: EGameOperatingMode = EGameOperatingMode.LOCAL;

  constructor(private stage: PIXI.Container) {}

  public init() {
    // Add the text to the renderer
    this.addOpModeText();
  }

  public addOpModeText() {
    if (this.opModeText) {
      return;
    }

    this.opModeText = new PIXI.Text(this.opModeString, {
      fontFamily: 'Arial',
      fontSize: '24px',
      fill: '#FFFFFF',
    });
    this.opModeText.x = 10;
    this.opModeText.y = 10;
    this.stage.addChild(this.opModeText);
  }

  public setGameOperatingMode(opMode: EGameOperatingMode) {
    this.opMode = opMode;
    this.opModeText.text = this.opModeString;
  }

  get opModeString() {
    return 'Operating mode: ' + this.opMode;
  }

  public destroy() {
    if (this.opModeText) {
      this.stage.removeChild(this.opModeText);
      this.opModeText.destroy();
      this.opModeText = null;
    }
  }
}
