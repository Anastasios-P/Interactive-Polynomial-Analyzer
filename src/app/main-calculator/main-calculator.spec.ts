import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCalculator } from './main-calculator';

describe('MainCalculator', () => {
  let component: MainCalculator;
  let fixture: ComponentFixture<MainCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCalculator],
    }).compileComponents();

    fixture = TestBed.createComponent(MainCalculator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
