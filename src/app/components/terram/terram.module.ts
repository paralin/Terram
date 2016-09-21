import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

import { EngineModule } from '../../engine';

/*
 * Material Design imports
 */
import { MaterialModule } from '../../modules/material';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './terram.routes';

// Game stuff
import { TerramGame } from '../../game/terram';

import { Terram } from './terram.component';
import { HOME_DECLARATIONS } from '../../pages/home';
import { GAME_PAGE_DECLARATIONS } from '../../pages/game';
import { NoContent } from '../../pages/no-content';

// Application wide providers
const APP_PROVIDERS = [
];

type StoreType = {
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

@NgModule({
  bootstrap: [ Terram ],
  declarations: [
    Terram,
    ...HOME_DECLARATIONS,
    ...GAME_PAGE_DECLARATIONS,
    NoContent,
  ],
  imports: [ // import Angular's modules
    EngineModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    MaterialModule,
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    TerramGame,
  ]
})
export class TerramModule {
  constructor(public appRef: ApplicationRef) {}

  hmrOnInit(store: StoreType) {
    if (!store) return;
    // console.log('HMR store', JSON.stringify(store, null, 2));
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}

