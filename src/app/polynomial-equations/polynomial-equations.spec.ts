import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolynomialEquations } from './polynomial-equations';

describe('PolynomialEquations', () => {
  let component: PolynomialEquations;
  let fixture: ComponentFixture<PolynomialEquations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolynomialEquations],
    }).compileComponents();

    fixture = TestBed.createComponent(PolynomialEquations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
