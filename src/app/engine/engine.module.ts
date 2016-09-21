import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Logger } from 'angular2-logger/core';

import { GameView } from './game-view';

@NgModule({
  declarations: [
    GameView,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    Logger,
  ],
  exports: [
    GameView,
  ],
})
export class EngineModule {
}
