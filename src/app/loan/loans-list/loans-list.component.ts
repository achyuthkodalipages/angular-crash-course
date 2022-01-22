import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss']
})
export class LoansListComponent implements OnInit {

  loans: Array<any> = [];

  constructor(private loanService: LoanService) { }

  deleteLoan(loanId: number) {
    if(confirm("You really want to delete this loan?")) {
      this.loans = this.loanService.deleteLoan(loanId);
    }
  }

  ngOnInit(): void {
    this.loans = this.loanService.getLoans();
  }

}
