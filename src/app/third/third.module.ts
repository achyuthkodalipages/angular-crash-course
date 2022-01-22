import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdRoutingModule } from './third-routing.module';
import { ThirdOneComponent } from './third-one/third-one.component';
import { ThirdTwoComponent } from './third-two/third-two.component';


@NgModule({
  declarations: [
    ThirdOneComponent,
    ThirdTwoComponent
  ],
  imports: [
    CommonModule,
    ThirdRoutingModule
  ]
})
export class ThirdModule { }
