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
  x2: string = "";

  result: string = "";

  calculateEquation1(): void{
    // ax + b = 0, a = x1, b = x
    // x = -b/a : a ≠ 0

    let a = Number(this.x1);
    let b = Number(this.x);

    let solution = 0;

    if(a == 0){
      this.result = "ERROR! The variable a can not be zero.";
    }
    else{
      solution = -(b / a);
      this.result = "The solution of the equation " + String(a) + "x + " + String(b) + " = 0 is " + String(solution);
    }
  }

  calculateEquation2(): void{
    // ax² + bx + c = 0, a = x2, b = x1, c = x
    // D = b² - 4ac
    // if D < 0 then No real number/s solution.
    // if D = 0 then The solution is one real number repeated twice.
    // if D > 0 then There are 2 solutions.
    // x1, x2 = (-b ± D)/(2a) : a ≠ 0

    let a = Number(this.x2);
    let b = Number(this.x1);
    let c = Number(this.x);
    let D = (b * b) - (4 * a * c);

    let solution = 0;
    let solution2 = 0;

    if(a == 0){
      this.result = "ERROR! The variable a can not be zero.";
    }
    else{
      if(D < 0){
        this.result = "There are no solutions in the set of real numbers. The equation has 2 roots in the set of complex numbers."
      }
      else if(D == 0){
        solution = -b / (2 * a);
        this.result = "The solution of the equation " + String(a) + "x² + " + String(b) + "x + " + String(c) + " = 0 is " + String(solution);        
      }
      else{
        solution = ((-b) + Math.sqrt(D)) / (2 * a);
        solution2 = ((-b) - Math.sqrt(D)) / (2 * a);        
        this.result = "The solutions of the equation " + String(a) + "x² + " + String(b) + "x + " + String(c) + " = 0 are " + String(solution) + " and " + String(solution2);          
      }
    }
  }  
}
