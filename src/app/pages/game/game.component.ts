import { Component, OnDestroy, OnInit } from '@angular/core';
import { TerramGame } from '../../game/terram';

@Component({
  selector: 'game-page',
  styles: [ require('./game.style.css') ],
  template: require('./game.template.html'),
})
export class GamePage implements OnDestroy, OnInit {
  private game: TerramGame;
  constructor() {
    this.game = new TerramGame();
  }

  public ngOnInit() {
    //
  }

  public ngOnDestroy() {
    this.game.gameDestroy();
    this.game = null;
  }
}

export const GAME_PAGE_DECLARATIONS = [
  GamePage,
];
