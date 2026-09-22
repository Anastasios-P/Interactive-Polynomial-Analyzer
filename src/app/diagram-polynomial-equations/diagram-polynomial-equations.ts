import { Component, Input, OnInit} from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { NgChartsConfiguration } from 'ng2-charts';

Chart.register(...registerables);

@Component({
  selector: 'app-diagram-polynomial-equations',
  imports: [],
  templateUrl: './diagram-polynomial-equations.html',
  styleUrl: './diagram-polynomial-equations.css',
})
export class DiagramPolynomialEquations implements OnInit{

  @Input() a: string = "";
  @Input() b: string = "";
  @Input() c: string = "";
  @Input() d: string = "";
  @Input() degree: string = "";

  xAxis: string[] = [];
  data: number[] = [];
  diagramEquation: string = "";
  chart: any;

  ngOnInit(): void{  
    //Delete the previous Arrays..    
    let xAxisLength = this.xAxis.length;
    for(let i = 0; i < xAxisLength; i++){
      this.xAxis.pop();
    }

    let dataLenght = this.data.length;
    for(let i = 0; i < dataLenght; i++){
      this.data.pop();
    }
    //-------------------------------

    let solution = 0;
    //1st grad equations.
    if(this.degree == "1"){
      for(let i = -10; i < 11; i++){
        this.xAxis.push(String(i));
        solution = (Number(this.a) * i) + Number(this.b);
        this.data.push(solution);
      }  
      this.diagramEquation = "Show diagram for the equation: " + this.a + "x + " + this.b + " = 0";      
    }
    //2nd grad equations.
    else if(this.degree == "2"){
      for(let i = -10; i < 11; i++){
        this.xAxis.push(String(i));
        solution = (Number(this.a) * i * i) + (Number(this.b) * i) + Number(this.c);
        this.data.push(solution);
      }  
      this.diagramEquation = "Show diagram for the equation: " + this.a + "x² + " + this.b + "x + " + this.c  + " = 0";      
    }  
    //3rd grad equations.
    else if(this.degree == "3"){
      for(let i = -10; i < 11; i++){
        this.xAxis.push(String(i));
        solution = (Number(this.a) * i * i * i) + (Number(this.b) * i * i) + (Number(this.c) * i) + Number(this.d);
        this.data.push(solution);
      }  
      this.diagramEquation = "Show diagram for the equation: " + this.a + "x³ + " + this.b + "x² + " + this.c + "x + " + this.d  + " = 0";      
    }       

    var config: ChartConfiguration = {
    type: 'line',
      data: {
      labels: this.xAxis,
      datasets: [{
        label: this.diagramEquation,
        data: this.data,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
        }]
      }
    }; 

    var element = <HTMLCanvasElement>document.getElementById('equationDiagram');
    this.chart = new Chart(element, config);  
  } 
}
