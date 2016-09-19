import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GameView } from './game-view';

@NgModule({
  declarations: [
    GameView,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
  ],
  exports: [
    GameView,
  ],
})
export class EngineModule {
}
