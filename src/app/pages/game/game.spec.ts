import {
  TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser/src/dom/debug/by';

// Load the implementations that should be tested
import { GamePage } from './game.component';
import { EngineModule } from '../../engine/engine.module';
import { Logger } from 'angular2-logger/core';

describe('game-page', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        EngineModule,
      ],
      providers: [
        Logger,
      ],
      declarations: [
        GamePage,
      ]
    });
  });

  it('should have a canvas element', () => {
    TestBed.compileComponents().then(() => {

      const fixture = TestBed.createComponent(GamePage);
      const element = fixture.debugElement.query(By.css('canvas'));

      expect(element.nativeElement).not.toBe(null);
    });
  });

});
