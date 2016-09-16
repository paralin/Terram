import { Component } from '@angular/core';

import { XLarge } from './x-large';

@Component({
  selector: 'home',  // <home></home>
  styleUrls: [ './home.style.css' ],
  templateUrl: './home.template.html'
})
export class Home {
  constructor() {}

  ngOnInit() {
    console.log('hello `Home` component');
  }
}

export const HOME_DECLARATIONS = [
  Home,
  XLarge,
];
