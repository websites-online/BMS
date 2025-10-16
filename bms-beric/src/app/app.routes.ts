import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'danke',
    loadComponent: () =>
      import('./sections/danke/danke').then((m) => m.Danke)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
