import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { authGuardGuard } from './guards/auth-guard-guard';
export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dash-board/dash-board').then((m) => m.DashBoard),
    canActivate: [authGuardGuard],
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./components/post-component/post-component').then(
        (m) => m.PostComponent
      ),
  },
  { path: '**', redirectTo: 'login' },
];
