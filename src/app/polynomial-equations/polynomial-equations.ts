import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-polynomial-equations',
  imports: [FormsModule],
  templateUrl: './polynomial-equations.html',
  styleUrl: './polynomial-equations.css',
})
export class PolynomialEquations {
  chosenPolynomialDegree: string = "";
  x: string = "";
  x1: string = "";

  solution1: string = "";

  calculateEquation1(): void{
    this.solution1 = "testing.. OK.";
  }
}
