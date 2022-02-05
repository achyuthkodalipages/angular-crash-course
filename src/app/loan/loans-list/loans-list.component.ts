import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanService } from 'src/app/services/loan.service';
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss'],
})
export class LoansListComponent implements OnInit {
  loans!: Observable<any>;
  isLoaded = false;

  displayedColumns: any = ['id', 'loanType', 'maximumLoan', 'actions'];
  env = environment;

  constructor(private loanService: LoanService) {}

  deleteLoan(loanId: number) {
    if (confirm('You really want to delete this loan?')) {
      this.loans = this.loanService.deleteLoan(loanId);
    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loans = this.loanService.getLoans().pipe(
        shareReplay(),
        tap((data) => {
          this.isLoaded = true;
        })
      );
    }, 2000);
  }
}
