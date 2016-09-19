import { Routes } from '@angular/router';
import { Home } from '../../pages/home';
import { NoContent } from '../../pages/no-content';
import { GamePage } from '../../pages/game';

export const ROUTES: Routes = [
  { path: '',      redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: Home },
  { path: 'game',  component: GamePage },
  { path: '**',    component: NoContent },
];
