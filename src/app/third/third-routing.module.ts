import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdOneComponent } from './third-one/third-one.component';
import { ThirdTwoComponent } from './third-two/third-two.component';

const routes: Routes = [
  {path: '', component: ThirdOneComponent},
  {path: 'one', component: ThirdOneComponent},
  {path: 'two', component: ThirdTwoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdRoutingModule { }
