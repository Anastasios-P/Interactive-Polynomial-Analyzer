import { Component, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-diagram-polynomial-equations',
  imports: [],
  templateUrl: './diagram-polynomial-equations.html',
  styleUrl: './diagram-polynomial-equations.css',
})
export class DiagramPolynomialEquations {

  @Input() a: string = "";
  @Input() b: string = "";
  @Input() c: string = "";
  @Input() d: string = "";
  @Input() degree: string = "";

  xAxis: number[] = [];
  data: number[] = [];

  public config: any = {
  type: 'line',
  data: {
  labels: this.xAxis,
  datasets: [{
  label: '',
  data: this.data,
  borderColor: 'rgb(75, 192, 192)',
  }]
  }
  };
  chart: any;
  
  showDiagram(): void{ 
    if((this.degree === "1") == false){//If it is a first degree equation..
      for(let i = 0; i < this.xAxis.length; i++){
        this.xAxis.pop();
      }
      for(let i = 0; i < this.data.length; i++){

      }

      let solution = 0;
      for(let i = -10; i < 11; i++){
        this.xAxis.push(i);
        solution = (Number(this.a) * i) + Number(this.b);
        this.data.push(solution);
      }
      var element = <HTMLCanvasElement>document.getElementById('equationDiagram');
      this.chart = new Chart(element, this.config);     
    }  
  }
}
