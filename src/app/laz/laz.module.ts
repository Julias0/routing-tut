import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazRoutingModule } from './laz-routing.module';
import { LazOneComponent } from './laz-one/laz-one.component';
import { LazTwoComponent } from './laz-two/laz-two.component';
import { LazLayoutComponent } from './laz-layout/laz-layout.component';


@NgModule({
  declarations: [LazOneComponent, LazTwoComponent, LazLayoutComponent],
  imports: [
    CommonModule,
    LazRoutingModule
  ]
})
export class LazModule { }
