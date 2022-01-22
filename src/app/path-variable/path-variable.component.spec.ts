import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathVariableComponent } from './path-variable.component';

describe('PathVariableComponent', () => {
  let component: PathVariableComponent;
  let fixture: ComponentFixture<PathVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
