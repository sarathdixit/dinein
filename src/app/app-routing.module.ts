import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { DineinComponent } from './dinein/dinein.component';
import { LandingComponent } from './landing/landing.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: 'home'
  }, 
  {
    path: 'home',
    component: LandingComponent
  
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'dinein',
    component: DineinComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }, 
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
