import * as PIXI from 'pixi.js/bin/pixi.js';
import { IGameCommon } from '../common';
import { Subject } from 'rxjs/Subject';

/*
 * Game is the basis of a game.
 *
 * Extend it with your game. I.E:
 * class MyGame extends Game
 */
export class Game {
  public common: IGameCommon;

  private continueAnimating: boolean;

  public initWithRenderer(renderer: PIXI.SystemRenderer, container: HTMLElement) {
    this.common = {
      renderer: renderer,
      stage: new PIXI.Container(),
      renderSubjects: {
        preRender: new Subject<void>(),
        postRender: new Subject<void>(),
      },
      container: container,
    };
    this.preInit();
    this.continueAnimating = true;
    this.animate(true);
  }

  public preInit() {
    // do nothing, override in subclass
  }

  // Called by go
  public destroy() {
    this.continueAnimating = false;
    this.common.stage.destroy(true);
    this.common = null;
  }

  // Called by ts
  public destroyGame() {
    //
  }

  private animate(firstLoop: boolean = false) {
    if (!this.continueAnimating) {
      return;
    }

    requestAnimationFrame(() => {
      this.animate();
    });

    if (firstLoop) {
      return;
    }

    this.common.renderSubjects.preRender.next();
    this.common.renderer.render(this.common.stage);
    this.common.renderSubjects.postRender.next();
  }
}
