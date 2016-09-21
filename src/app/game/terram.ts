import { Injectable } from '@angular/core';
import { Game } from '../engine/game';
import * as TerramJsGlobal from '@fusebot/goterram';

@Injectable()
export class TerramGame extends Game {
  private terramGame: any;

  public init() {
    // Expose for debugging
    window['terramGameInstance'] = this;

    super.init();

    // Build an instance of TerramGame
    this.terramGame = TerramJsGlobal.BuildTerramGame();
  }

  public destroy() {
    this.terramGame.Destroy();
    super.destroy();
  }
}
