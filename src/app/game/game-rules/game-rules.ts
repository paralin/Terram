import { IFrontendGameRules, EGameOperatingMode } from '@fusebot/goterram';
import { IGameCommon } from '../../engine/common';
import { DebugText } from '../ui';

export class TerramGameRules implements IFrontendGameRules {
  private debugText: DebugText;

  constructor(private common: IGameCommon) {}

  public init() {
    // Add the text to the renderer
    this.addOpModeText();
  }

  public addOpModeText() {
    if (this.debugText) {
      return;
    }

    this.debugText = new DebugText(this.common);
    this.debugText.init();
  }

  public setGameOperatingMode(opMode: EGameOperatingMode) {
    this.debugText.setGameOperatingMode(opMode);
  }

  public destroy() {
    if (this.debugText) {
      this.debugText.destroy();
      this.debugText = null;
    }
  }
}
