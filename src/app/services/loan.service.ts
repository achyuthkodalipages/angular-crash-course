import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  loans: Array<any> = [];

  constructor() { }

  getLoans() {
    return [...this.loans];
  }

  createLoan(loan: any) {
    this.loans = [loan, ...this.loans];
  }

  getLoanById(id: number) {
    return this.loans.find(loan => loan.id === id);
  }

  editLoan(id: number, loan: any) {
    const filterdLoans = this.loans.filter(loan => loan.id !== id); // split
    this.loans = [loan, ...filterdLoans]; // this.loans = filteredLoans;
  }

  deleteLoan(id: number) {
    this.loans = this.loans.filter(loan => loan.id !== id);
    return this.loans;
  }
}
