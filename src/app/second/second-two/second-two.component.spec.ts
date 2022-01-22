import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTwoComponent } from './second-two.component';

describe('SecondTwoComponent', () => {
  let component: SecondTwoComponent;
  let fixture: ComponentFixture<SecondTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
