import { Routes } from '@angular/router';
import { InventoryHomeComponent } from './pages/inventory-home/inventory-home.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

export const inventoryRoutes: Routes = [
  {
    path: '',
    component: InventoryHomeComponent,
  },
  {
    path: 'producto',
    component: ProductPageComponent
  }
  
];
