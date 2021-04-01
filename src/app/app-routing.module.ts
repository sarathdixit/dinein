import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { DineinComponent } from './dinein/dinein.component';
import { LandingComponent } from './landing/landing.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';

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
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'paymentSuccess',
    component: PaymentsuccessComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
