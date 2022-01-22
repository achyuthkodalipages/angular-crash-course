import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondOneComponent } from './second-one/second-one.component';
import { SecondTwoComponent } from './second-two/second-two.component';

const routes: Routes = [
  {path: '', component: SecondOneComponent},
  {path: 'one', component: SecondOneComponent},
  {path: 'two', component: SecondTwoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule { }
