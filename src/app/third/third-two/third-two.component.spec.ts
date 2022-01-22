import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdTwoComponent } from './third-two.component';

describe('ThirdTwoComponent', () => {
  let component: ThirdTwoComponent;
  let fixture: ComponentFixture<ThirdTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
