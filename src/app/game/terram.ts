import { Game } from '../engine/game';
import {
  IFrontend,
  INetEntity,
  TerramBuilder,
} from '@fusebot/goterram';
// import { TERRAM_COMPONENTS } from './components';

export class TerramGame extends Game implements IFrontend {
  private terramGame: any;

  public preInit() {
    // Expose for debugging
    window['terramGameInstance'] = this;

    super.preInit();

    // Build an instance of TerramGame
    this.terramGame = TerramBuilder.BuildTerramGame(this);
  }

  public init() {
    console.log('Init called in frontend');
  }

  // Called from Go
  public addEntity(entity: INetEntity): void {
    console.log('Entity ' + entity.id + ' added.');
  }

  // Called from Go
  public destroy() {
    super.destroy();
  }

  // Call from ngOnDestroy
  public gameDestroy() {
    this.terramGame.Destroy();
  }
}
