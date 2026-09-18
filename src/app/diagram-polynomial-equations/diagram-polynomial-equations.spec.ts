import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramPolynomialEquations } from './diagram-polynomial-equations';

describe('DiagramPolynomialEquations', () => {
  let component: DiagramPolynomialEquations;
  let fixture: ComponentFixture<DiagramPolynomialEquations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagramPolynomialEquations],
    }).compileComponents();

    fixture = TestBed.createComponent(DiagramPolynomialEquations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
