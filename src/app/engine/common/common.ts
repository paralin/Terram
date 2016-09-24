import * as PIXI from 'pixi.js/bin/pixi.js';
import { Subject } from 'rxjs/Subject';

export interface IGameRenderSubjects {
  preRender: Subject<void>;
  postRender: Subject<void>;
}

export interface IGameCommon {
  renderer: PIXI.SystemRenderer;
  stage: PIXI.Container;
  renderSubjects: IGameRenderSubjects;
  container: HTMLElement;
  loader: PIXI.loaders.Loader;
}
