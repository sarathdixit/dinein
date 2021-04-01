import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { ChevronLeft, ChevronRight,Check,PhoneCall,Mail,MapPin, ShoppingCart	 } from 'angular-feather/icons';

const icons = {
  ChevronLeft,
  ChevronRight,
  Check,
  PhoneCall,
  Mail,
  MapPin,
  ShoppingCart
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
