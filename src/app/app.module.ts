import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LandingComponent } from './landing/landing.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

import {IconsModule} from './icons/icons.module'
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { DineinComponent } from './dinein/dinein.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { ShareService } from './share/share.service';
import { CartComponent } from './cart/cart.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';
import { NgwWowService } from 'ngx-wow';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { BookingComponent } from './booking/booking.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    FooterComponent,
    AboutComponent,
    DineinComponent,
    ContactComponent,
    MenuComponent,
    CartComponent,
    PaymentComponent,
    PaymentsuccessComponent,
    BookingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule ,
    IconsModule,
    IvyCarouselModule,
    BrowserAnimationsModule,
    NgwWowModule
  ],
  providers: [ShareService,NgwWowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
