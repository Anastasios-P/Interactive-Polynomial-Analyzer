import { Component, Input, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { NgChartsConfiguration } from 'ng2-charts';

Chart.register(...registerables);

@Component({
  selector: 'app-diagram-polynomial-equations',
  imports: [FormsModule],
  templateUrl: './diagram-polynomial-equations.html',
  styleUrl: './diagram-polynomial-equations.css',
})
export class DiagramPolynomialEquations implements OnInit{

  @Input() a: string = "";
  @Input() b: string = "";
  @Input() c: string = "";
  @Input() d: string = "";
  @Input() degree: string = "";
  @Input() diagramXAxisFrom: string = "";
  @Input() diagramXAxisTo: string = "";

  xAxis: string[] = [];
  data: number[] = [];
  diagramEquation: string = "";
  chart: any;
  step: number = 1;

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
    let from = Number(this.diagramXAxisFrom);
    let to = Number(this.diagramXAxisTo);

    //Calculate the distance between the points in the x-axis.
    if((to -from) < 0.0001){
      this.step = 0.000001;
    }
    else if((to - from) < 0.001){
      this.step = 0.00001;
    }
    else if((to - from) < 0.01){
      this.step = 0.00001;
    }
    else if((to - from) < 0.1){
      this.step = 0.0001;
    }
    else if((to - from) < 1){
      this.step = 0.001;
    }
    else if((to - from) < 10){
      this.step = 0.01;
    }
    else if((to - from) < 100){
      this.step = 0.1;
    }
    else if((to -from) < 1000){
      this.step = 1
    }
    else if((to - from) < 10000){
      this.step = 10;
    }
    else if((to - from) < 100000){
      this.step = 100;
    }
    else{
      this.step = 1000;
    }

    let solution = 0;
    //1st grad equations.
    if(this.degree == "1"){
      for(let i = from; i <= to; i = i + this.step){
        this.xAxis.push(String(i));
        solution = (Number(this.a) * i) + Number(this.b);
        this.data.push(solution);
      }  
      this.diagramEquation = "Showing diagram for the equation: " + this.a + "x + " + this.b + " = 0";      
    }
    //2nd grad equations.
    else if(this.degree == "2"){
      for(let i = from; i <= to; i = i + this.step){
        this.xAxis.push(String(i));
        solution = (Number(this.a) * i * i) + (Number(this.b) * i) + Number(this.c);
        this.data.push(solution);
      }  
      this.diagramEquation = "Showing diagram for the equation: " + this.a + "x² + " + this.b + "x + " + this.c  + " = 0";      
    }  
    //3rd grad equations.
    else if(this.degree == "3"){
      for(let i = from; i <= to; i = i + this.step){
        this.xAxis.push(String(i));
        solution = (Number(this.a) * i * i * i) + (Number(this.b) * i * i) + (Number(this.c) * i) + Number(this.d);
        this.data.push(solution);
      }  
      this.diagramEquation = "Showing diagram for the equation: " + this.a + "x³ + " + this.b + "x² + " + this.c + "x + " + this.d  + " = 0";      
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
        }]
      }
    }; 

    var element = <HTMLCanvasElement>document.getElementById('equationDiagram');
    this.chart = new Chart(element, config);  
  } 
}
