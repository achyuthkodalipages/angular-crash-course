import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountListComponent } from './account-list/account-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccountDetailsComponent,
    AccountListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
