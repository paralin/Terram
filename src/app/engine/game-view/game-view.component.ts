import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import * as PIXI from 'pixi.js/bin/pixi.js';

@Component({
  selector: 'game-view',
  template: require('./game-view.template.html'),
  styles: [
    require('./game-view.css'),
  ],
})
export class GameView implements OnDestroy, OnInit {
  private renderer: PIXI.SystemRenderer;

  constructor(private el: ElementRef) {}

  public ngOnInit() {
    this.initEngine();
    this.initResizeHandler();
  }

  public ngOnDestroy() {
    this.renderer.destroy(true);
    this.destroyResizeHandler();
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
}
