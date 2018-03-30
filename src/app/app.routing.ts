import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { RegisterComponent } from './register/register.component';
import { SellOnEtsyComponent } from './sell-on-etsy/sell-on-etsy.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'detail',
    component: ItemDetailComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'sell',
    component: SellOnEtsyComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
