import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-one',
  templateUrl: './first-one.component.html',
  styleUrls: ['./first-one.component.scss'],
})
export class FirstOneComponent implements OnInit {
  loanName: string = 'Home Loan';
  loanAmount: number = 3;
  parentName: string = 'anil';
  isClassShow: boolean = false;

  constructor() { }

  listenToEmit(data: any) {
    console.log(data);
  }

  updateLoan() {
    this.loanAmount = this.loanAmount + 1;
    this.isClassShow = !this.isClassShow;
  }

  ngOnInit(): void {
    this.loanAmount = this.loanAmount + 4;
  }
}
