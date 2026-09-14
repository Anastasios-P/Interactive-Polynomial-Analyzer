import { Component, signal } from '@angular/core';
import { MainCalculator } from './main-calculator/main-calculator';
import { PolynomialEquations } from './polynomial-equations/polynomial-equations';

@Component({
  selector: 'app-root',
  imports: [MainCalculator, PolynomialEquations],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('extended-calculator');
}
