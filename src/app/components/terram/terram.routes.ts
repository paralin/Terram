import { Routes } from '@angular/router';
import { Home } from '../../pages/home';
import { NoContent } from '../../pages/no-content';

export const ROUTES: Routes = [
  { path: '',      redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: Home },
  { path: '**',    component: NoContent },
];
