import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLoanComponent } from './create-loan/create-loan.component';
import { LoansDetailsComponent } from './loans-details/loans-details.component';
import { LoansListComponent } from './loans-list/loans-list.component';

const routes: Routes = [
  {path: 'list', component: LoansListComponent},
  {path: 'loan-details/:loanId', component: LoansDetailsComponent },
  {path: 'edit/:loanId', component: CreateLoanComponent },
  {path: 'create-loan', component: CreateLoanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
