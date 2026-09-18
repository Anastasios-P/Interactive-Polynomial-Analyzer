import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-diagram-polynomial-equations',
  imports: [],
  templateUrl: './diagram-polynomial-equations.html',
  styleUrl: './diagram-polynomial-equations.css',
})
export class DiagramPolynomialEquations {

  xAxis: number[] = [1,2,3,4,5,6,7,8];
  daten: number[] = [1,2,3,4,3,2,1,0];

  public config: any = {
  type: 'line',
  data: {
  labels: this.xAxis,
  datasets: [{
  label: '',
  data: this.daten,
  borderColor: 'rgb(75, 192, 192)',
  }]
  }
  };
  chart: any;

  ngOnInit(): void{ 
    var element = <HTMLCanvasElement>document.getElementById('equationDiagram');
    this.chart = new Chart(element, this.config);  
  }
}
