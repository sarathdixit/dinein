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
import { FormsModule } from '@angular/forms';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { BarchartComponent } from './admin/barchart/barchart.component';
import { DuallineComponent } from './admin/dualline/dualline.component';
import { ArealineComponent } from './admin/arealine/arealine.component';
import { LinechartComponent } from './admin/linechart/linechart.component';
import { PolarComponent } from './admin/polar/polar.component';
import { RadarComponent } from './admin/radar/radar.component';
import { SaleschartComponent } from './admin/saleschart/saleschart.component';
import { HotelComponent } from './admin/hotel/hotel.component';
import { ReviewComponent } from './admin/review/review.component';
import { KitchenComponent } from './admin/kitchen/kitchen.component';
import { SettingsComponent } from './admin/settings/settings.component';


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
    AdminloginComponent,
    DashboardComponent,
    BarchartComponent,
    DuallineComponent,
    ArealineComponent,
    LinechartComponent,
    PolarComponent,
    RadarComponent,
    SaleschartComponent,
    HotelComponent,
    ReviewComponent,
    KitchenComponent,
    SettingsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule ,
    IconsModule,
    IvyCarouselModule,
    BrowserAnimationsModule,
    NgwWowModule,
    FormsModule,
    ChartsModule
  ],
  providers: [ShareService,NgwWowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
