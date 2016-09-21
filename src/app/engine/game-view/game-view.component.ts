import { Component, ElementRef, OnDestroy, OnInit, Input } from '@angular/core';
import * as PIXI from 'pixi.js/bin/pixi.js';

import { Game } from '../game';
import { Logger } from 'angular2-logger/core';

@Component({
  selector: 'game-view',
  template: require('./game-view.template.html'),
  styles: [
    require('./game-view.css'),
  ],
})
export class GameView implements OnDestroy, OnInit {
  @Input('game') public game: Game;
  private renderer: PIXI.SystemRenderer;

  constructor(private el: ElementRef, private log: Logger) {}

  public ngOnInit() {
    this.initEngine();
    this.initResizeHandler();
    this.initGame();
  }

  public ngOnDestroy() {
    this.destroyResizeHandler();
    this.destroyGame();
    this.renderer.destroy(true);
  }

  private initEngine() {
    let { width, height } = this.viewSize;
    let renderer = PIXI.autoDetectRenderer(width, height);
    this.el.nativeElement.appendChild(renderer.view);
    this.renderer = renderer;
  }

  private initResizeHandler() {
    // override window for now
    window.onresize = () => {
      this.resizeView();
    };
  }

  private destroyResizeHandler() {
    window.onresize = null;
  }

  get viewSize() {
    return {
      width: this.el.nativeElement.clientWidth,
      height: this.el.nativeElement.clientHeight,
    };
  }

  private resizeView() {
    let { width, height } = this.viewSize;
    this.renderer.resize(width, height);
  }

  private initGame() {
    if (!this.game) {
      this.log.error('No game specified to game-view.');
      return;
    }

    this.game.initWithRenderer(this.renderer);
  }

  private destroyGame() {
    if (!this.game) {
      return;
    }

    this.game.destroy();
  }
}
