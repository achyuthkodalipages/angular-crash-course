import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRoutingModule } from './loan-routing.module';
import { LoansListComponent } from './loans-list/loans-list.component';
import { LoansDetailsComponent } from './loans-details/loans-details.component';
import { CreateLoanComponent } from './create-loan/create-loan.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoansListComponent,
    LoansDetailsComponent,
    CreateLoanComponent
  ],
  imports: [
    CommonModule,
    LoanRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoanModule { }
