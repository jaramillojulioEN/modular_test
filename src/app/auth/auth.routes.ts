import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const AuthRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  }
];
