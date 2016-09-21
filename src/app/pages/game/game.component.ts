import { Component } from '@angular/core';
import { TerramGame } from '../../game/terram';

@Component({
  selector: 'game-page',
  styleUrls: [ './game.style.css' ],
  templateUrl: './game.template.html'
})
export class GamePage {
  constructor(private game: TerramGame) {
  }
}

export const GAME_PAGE_DECLARATIONS = [
  GamePage,
];
