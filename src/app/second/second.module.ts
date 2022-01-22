import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { SecondTwoComponent } from './second-two/second-two.component';
import { SecondOneComponent } from './second-one/second-one.component';


@NgModule({
  declarations: [
    SecondTwoComponent,
    SecondOneComponent
  ],
  imports: [
    CommonModule,
    SecondRoutingModule
  ]
})
export class SecondModule { }
