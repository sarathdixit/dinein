import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { ChevronLeft, ChevronRight,Check,PhoneCall,Mail,MapPin, ShoppingCart,Grid, Edit,Copy,Trash	 } from 'angular-feather/icons';

const icons = {
  ChevronLeft,
  ChevronRight,
  Check,
  PhoneCall,
  Mail,
  MapPin,
  ShoppingCart,
  Grid,
  Edit,
  Copy,
  Trash
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
