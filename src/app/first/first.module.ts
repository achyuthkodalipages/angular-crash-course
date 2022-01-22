import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstOneComponent } from './first-one/first-one.component';
import { FirstTwoComponent } from './first-two/first-two.component';
import { FirstOneChildComponent } from './first-one-child/first-one-child.component';


@NgModule({
  declarations: [
    FirstOneComponent,
    FirstTwoComponent,
    FirstOneChildComponent
  ],
  imports: [
    CommonModule,
    FirstRoutingModule
  ]
})
export class FirstModule { }
