import {
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { Terram } from './terram.component';

describe('terram', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Terram,
    ]}));

    /*
  it('should have a url', inject([ App ], (app: App) => {
    expect(app.url).toEqual('something');
  }));
  */
});
