import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DiagramPolynomialEquations } from '../diagram-polynomial-equations/diagram-polynomial-equations';

@Component({
  selector: 'app-polynomial-equations',
  imports: [FormsModule, DiagramPolynomialEquations],
  templateUrl: './polynomial-equations.html',
  styleUrl: './polynomial-equations.css',
})
export class PolynomialEquations {
  chosenPolynomialDegree: string = "";
  x: string = "";
  x1: string = "";
  x2: string = "";
  x3: string = "";
  fromX: string = "-10";
  toX: string = "10";
  changeFlag: boolean = false;

  result: string = "";

  calculateEquation1(): void{
    // ax + b = 0, a = x1, b = x
    // x = -b/a : a ≠ 0

    let a = Number(this.x1);
    let b = Number(this.x);

    let solution = 0;

    if(a == 0){
      this.result = "ERROR! The variable a cannot be zero.";
    }
    else{
      solution = -(b / a);
      this.result = "The solution of the equation " + String(a) + "x + " + String(b) + " = 0 is x = " + String(solution) + ".";
    }
    
    //Switch the changeFlag value everytime this function is called.
    if(this.changeFlag == true){
      this.changeFlag = false;
    }
    else{
      this.changeFlag = true;   
    }
  }

  calculateEquation2(): void{
    // ax² + bx + c = 0, a = x2, b = x1, c = x
    // D = b² - 4ac
    // if D < 0 then No real number/s solution.
    // if D = 0 then The solution is one real number repeated twice.
    // if D > 0 then There are 2 solutions.
    // x1, x2 = (-b ± sqrt(D))/(2a) : a ≠ 0

    let a = Number(this.x2);
    let b = Number(this.x1);
    let c = Number(this.x);

    let D = (b * b) - (4 * a * c);

    let solution = 0;
    let solution2 = 0;

    if(a == 0){
      this.result = "ERROR! The variable a cannot be zero.";
    }
    else{
      if(D < 0){
        this.result = "There are no solutions in the set of real numbers. The equation has 2 roots in the set of complex numbers."
      }
      else if(D == 0){
        solution = -b / (2 * a);
        this.result = "The solution of the equation " + String(a) + "x² + " + String(b) + "x + " + String(c) + " = 0 is x = " + String(solution) + ".";        
      }
      else{
        solution = ((-b) + Math.sqrt(D)) / (2 * a);
        solution2 = ((-b) - Math.sqrt(D)) / (2 * a);        
        this.result = "The solutions of the equation " + String(a) + "x² + " + String(b) + "x + " + String(c) + " = 0 are x1 = " + String(solution) + " and x2 = " + String(solution2) + ".";          
      }
    }

    //Switch the changeFlag value everytime this function is called.
    if(this.changeFlag == true){
      this.changeFlag = false;
    }
    else{
      this.changeFlag = true;   
    }    
  }  

  calculateEquation3(): void{
    // ax³ + bx² + cx + d = 0, a = x3, b = x2, c = x1, d = x
    // E = 2b³ - 9abc + 27a²d
    // F = (b² - 3ac)³
    // G = E² - 4(F³)
    // x = -(b/3a) - ((1/3a) * cbrt(0.5(E + sqrt(G)))) - ((1/3a) * cbrt(0.5(E - sqrt(G)))) : a ≠ 0

    let a = Number(this.x3);
    let b = Number(this.x2);
    let c = Number(this.x1);
    let d = Number(this.x);

    let E = (2 * (b * b * b)) - (9 * (a * b * c)) + (27 * (a * a)  * d);
    let F = ((b * b) - (3 * (a * c))) * ((b * b) - (3 * (a * c))) * ((b * b) - (3 * (a * c)));
    let G = (E * E) - (4 * F);
    if(a == 0){
      this.result = "ERROR! The variable a cannot be zero.";
    }
    else{
      let solution, solution2, solution3;
      if(G < 0){
        G = (Math.sqrt(-G) / Math.sqrt(2));
        solution = -(b / (3 * a)) - ((1 / (3 * a)) * Math.cbrt(0.5 * (E + G)) - ((1 / (3 * a)) * Math.cbrt(0.5 * (E - G))));
        solution2 = -(b / (3 * a)) + (((1 - (Math.sqrt(3) * Math.sqrt(2))) / (6 * a)) * Math.cbrt(0.5 * (E + G))) + (((1 + (Math.sqrt(3) * Math.sqrt(2))) / (6 * a)) * Math.cbrt(0.5 * (E - G)));         
        solution3 = -(b / (3 * a)) + (((1 - Math.sqrt(3)) / (Math.sqrt(3) * a)) * Math.cbrt(0.5 * (E + G))) + (((1 - Math.sqrt(3)) / (Math.sqrt(3) * a)) * Math.cbrt(0.5 * (E - G)));          
      }
      else{
        G = Math.sqrt(G);
        solution = -(b / (3 * a)) - ((1 / (3 * a)) * Math.cbrt(0.5 * (E + G)) - ((1 / (3 * a)) * Math.cbrt(0.5 * (E - G))));
        solution2 = -(b / (3 * a)) + (((1 - (Math.sqrt(3) * Math.sqrt(2))) / (6 * a)) * Math.cbrt(0.5 * (E + G))) + (((1 + (Math.sqrt(3) * Math.sqrt(2))) / (6 * a)) * Math.cbrt(0.5 * (E - G)));         
        solution3 = -(b / (3 * a)) + (((1 - Math.sqrt(3)) / (Math.sqrt(3) * a)) * Math.cbrt(0.5 * (E + G))) + (((1 - Math.sqrt(3)) / (Math.sqrt(3) * a)) * Math.cbrt(0.5 * (E - G)));            
      }

      if((solution == solution2) && (solution == solution3)){
        this.result = "The solution of the equation " + String(a) + "x³ + " + String(b) + "x² + " + String(c) + "x + " + String(d) + " = 0 in the set of real numbers is x = " + String(solution) + ".";
      }
      else{
        this.result = "The solutions of the equation " + String(a) + "x³ + " + String(b) + "x² + " + String(c) + "x + " + String(d) + " = 0 in the set of real numbers are x = " + String(solution) + ", x1 = " + String(solution2) + " and x3 = " + String(solution3) + ".";
      }
    }

    //Switch the changeFlag value everytime this function is called.
    if(this.changeFlag == true){
      this.changeFlag = false;
    }
    else{
      this.changeFlag = true;   
    }    
  }
}
