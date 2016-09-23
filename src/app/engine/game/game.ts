import * as PIXI from 'pixi.js/bin/pixi.js';

/*
 * Game is the basis of a game.
 *
 * Extend it with your game. I.E:
 * class MyGame extends Game
 */
export class Game {
  public renderer: PIXI.SystemRenderer;
  public stage: PIXI.Container;

  private continueAnimating: boolean;

  public initWithRenderer(renderer: PIXI.SystemRenderer) {
    this.renderer = renderer;
    this.stage = new PIXI.Container();
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
    this.stage.destroy(true);
    this.renderer = null;
  }

  // Called by ts
  public destroyGame() {
    //
  }

  // Override in subclass
  public preRender() {
    //
  }

  // Override in subclass
  public postRender() {
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

    this.preRender();
    this.renderer.render(this.stage);
    this.postRender();
  }
}
