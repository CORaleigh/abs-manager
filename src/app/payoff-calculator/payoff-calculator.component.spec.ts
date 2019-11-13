import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoffCalculatorComponent } from './payoff-calculator.component';

describe('PayoffCalculatorComponent', () => {
  let component: PayoffCalculatorComponent;
  let fixture: ComponentFixture<PayoffCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayoffCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayoffCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
