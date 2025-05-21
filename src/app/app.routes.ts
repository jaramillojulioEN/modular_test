import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inventory',
    loadChildren: () =>
      import('./inventory/inventory.routes').then((m) => m.inventoryRoutes),
  },
  {
    path: 'providers',
    loadChildren: () =>
      import('./providers/providers.routes').then((m) => m.providersRoutes),
  },
  {
    path: '',
    redirectTo: 'inventory',
    pathMatch: 'full',
  },
];

