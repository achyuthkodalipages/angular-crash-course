import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  loans: Array<any> = [];

  constructor(private http: HttpClient) {}

  getLoans() {
    return this.http.get(`${environment.apiUrl}/loans`);
  }

  createLoan(loan: any) {
    return this.http.post(`${environment.apiUrl}/loans`, loan);
  }

  getLoanById(id: number) {
    // return this.loans.find((loan) => loan.id === id);
    return this.http.get(`${environment.apiUrl}/loans/${id}`);
  }

  editLoan(id: number, loan: any) {
    // const filterdLoans = this.loans.filter((loan) => loan.id !== id); // split
    // this.loans = [loan, ...filterdLoans]; // this.loans = filteredLoans;
    return this.http.put(`${environment.apiUrl}/loans/${id}`, loan);
  }

  deleteLoan(id: number) {
    // this.loans = this.loans.filter((loan) => loan.id !== id);
    return this.http.delete(`${environment.apiUrl}/loans/${id}`);
  }
}
