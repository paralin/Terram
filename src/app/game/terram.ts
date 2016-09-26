import { Game } from '../engine/game';
import {
  IFrontend,
  IFrontendEntity,
  IFrontendGameRules,
  INetEntity,
  TerramBuilder,
} from '@fusebot/goterram';
import {
  TerramGameRules,
} from './game-rules';
import { TerramEntity } from './entity';
// import { TERRAM_COMPONENTS } from './components';

export class TerramGame extends Game implements IFrontend {
  private terramGame: any;
  private terramGameRules: TerramGameRules;

  public preInit() {
    // Expose for debugging
    window['terramGameInstance'] = this;

    super.preInit();

    // Init sub classes
    this.terramGameRules = new TerramGameRules(this.common);

    // Build an instance of TerramGame
    // Do this last because it calls init()
    this.terramGame = TerramBuilder.BuildTerramGame(this);
  }

  public postInit() {
    super.postInit();

    this.terramGame.Start();
  }

  public init(): IFrontendGameRules {
    return this.terramGameRules;
  }

  // Called from Go
  public addEntity(entity: INetEntity): IFrontendEntity {
    return new TerramEntity(this.common, entity);
  }

  // Called from Go
  public destroy() {
    super.destroy();
    this.terramGameRules = null;
  }

  // Call from ngOnDestroy
  public gameDestroy() {
    this.terramGame.Destroy();
  }
}
