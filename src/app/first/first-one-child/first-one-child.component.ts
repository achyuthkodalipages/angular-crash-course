import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first-one-child',
  templateUrl: './first-one-child.component.html',
  styleUrls: ['./first-one-child.component.scss'],
})
export class FirstOneChildComponent implements OnInit {
  @Input('parentName') parentName = '';
  @Output('outputEvent') outputEvent = new EventEmitter<any>();

  constructor() {}

  emitEvent() {
    this.outputEvent.emit('hello world!');
  }

  ngOnInit(): void {}
}
