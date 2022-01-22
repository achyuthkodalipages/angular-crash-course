import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstOneComponent } from './first-one/first-one.component';
import { FirstTwoComponent } from './first-two/first-two.component';

const routes: Routes = [
  {path: '', component: FirstOneComponent},
  {path: 'one', component: FirstOneComponent},
  {path: 'two', component: FirstTwoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
