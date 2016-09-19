import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'terram',
  encapsulation: ViewEncapsulation.None,
  template: require('./terram.html'),
  styles: [
    require('./terram.css'),
  ],
})
export class Terram {
  constructor() {}
}
