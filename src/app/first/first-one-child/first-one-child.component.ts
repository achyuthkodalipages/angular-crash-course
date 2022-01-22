import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-one-child',
  templateUrl: './first-one-child.component.html',
  styleUrls: ['./first-one-child.component.scss'],
})
export class FirstOneChildComponent implements OnInit {
  @Input('parentName') parentName = '';

  constructor() {}

  ngOnInit(): void {}
}
