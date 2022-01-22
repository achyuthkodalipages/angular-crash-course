import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  count: number = 1;
  accounts: Array<any> = [];
  account!: string;

  constructor() { }

  addAccount() {
    this.accounts.push({id: 1, name: this.account});
  }

  incrCount() {
    this.count = this.count + 1;
  }

  ngOnInit(): void {
  }

}
