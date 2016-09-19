import {
  TestBed
} from '@angular/core/testing';
import {
  BaseRequestOptions,
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { GamePage } from './game.component';

describe('game-page', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      MockBackend,
      GamePage
    ]
  }));

  /*
  it('should log ngOnInit', inject([ Home ], (home: Home) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    home.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));
  */
});
