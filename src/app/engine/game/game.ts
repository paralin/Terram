import * as PIXI from 'pixi.js/bin/pixi.js';

/*
 * Game is the basis of a game.
 *
 * Extend it with your game. I.E:
 * class MyGame extends Game
 */
export class Game {
  public renderer: PIXI.SystemRenderer;

  public initWithRenderer(renderer: PIXI.SystemRenderer) {
    this.renderer = renderer;
    this.preInit();
  }

  public preInit() {
    // do nothing, override in subclass
  }

  // Called by go
  public destroy() {
    this.renderer = null;
  }

  // Called by ts
  public destroyGame() {
    //
  }
}
