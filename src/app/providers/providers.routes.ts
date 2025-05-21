import { Routes } from '@angular/router';
import { ProviderPageComponent } from './pages/provider-page/provider-page.component';
import { CompraComponent } from './pages/compra/compra.component';

export const providersRoutes: Routes = [
  {
    path: '',
    component: ProviderPageComponent,
  },
  {
    path:"compra",
    component: CompraComponent
  }
];
