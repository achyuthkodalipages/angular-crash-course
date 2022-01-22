import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstOneChildComponent } from './first-one-child.component';

describe('FirstOneChildComponent', () => {
  let component: FirstOneChildComponent;
  let fixture: ComponentFixture<FirstOneChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstOneChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstOneChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
