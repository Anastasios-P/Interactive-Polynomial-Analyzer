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
    // ax + b = 0, a = x1, b = x
    // x = -b/a : a ≠ 0
    let a = Number(this.x1);
    let b = Number(this.x);

    let solution = 0;

    if(a == 0){
      this.solution1 = "ERROR! The variable a can not be zero.";
    }
    else{
      solution = -(b / a);
      this.solution1 = "The solution of the equation " + String(a) + "x + " + String(b) + " = 0 is " + String(solution);
    }
  }
}
