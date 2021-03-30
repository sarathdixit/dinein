import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { ChevronLeft, ChevronRight	 } from 'angular-feather/icons';

const icons = {
  ChevronLeft,
  ChevronRight
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
