import * as PIXI from 'pixi.js/bin/pixi.js';

/*
 * Game is the basis of a game.
 *
 * Extend it with your game. I.E:
 * class MyGame extends Game
 */
export class Game {
  private renderer: PIXI.SystemRenderer;

  public initWithRenderer(renderer: PIXI.SystemRenderer) {
    this.renderer = renderer;
    this.init();
  }

  public init() {
    // do nothing, override in subclass
  }

  public destroy() {
    this.renderer = null;
  }
}
