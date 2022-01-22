import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { PathVariableComponent } from './path-variable/path-variable.component';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';

const routes: Routes = [
  {path: 'test-one', component: TestOneComponent},
  {path: 'test-two', component: TestTwoComponent},
  {path: 'path-varible/:id', component: PathVariableComponent},
  {path: 'loans', loadChildren: () => import('./loan/loan.module').then(m => m.LoanModule)},
  {path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule)},
  {path: 'transactions', loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule)},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
