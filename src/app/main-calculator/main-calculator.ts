import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-calculator',
  imports: [FormsModule],
  templateUrl: './main-calculator.html',
  styleUrl: './main-calculator.css',
})
export class MainCalculator {
  display: string = '';
  operation: string = '1';

  nummer: number[] = [0,0]
  n : number = 0;

  //Flags 2
  flags2: boolean[] = [];
  flags2_N: number = 10;
  //[0]: flag_plus
  //[1]: flag_minus
  //[2]: flag_multiply
  //[3]: flag_divide
  //[4]: flag_YPowX;
  //[5]: flag_XSqrtY;

  //Flags 1
  flag_sin: boolean = false;
  flag_cos: boolean = false;
  flag_tan: boolean = false;
  flag_1_x: boolean = false;

  //Flag plus-minus
  flag_plus_minus: boolean = false;

  flag_fS_clicked: boolean = false;

  f1_flags : boolean[] = [false, false, false, false];

  number1: number = 0;
  number2: number = 0;
  flag_number_one: boolean = true;
  result: number = 0;
  flag_result: boolean = false;

  default_color: string = "#FFFFFF";
  f_color: string = "#7bff0fa1";

  flag_delete_input: boolean = false;

  constructor(){}

  ngOnInit() : void{}

  setFlag_f1(n : number) : void{
    var i : boolean;
    for( i of this.f1_flags){
      i = false;
    }
    this.f1_flags[n] = true;
  }

  input_1() : void{
  this.display = this.display + '1';
  }
  input_2() : void{
  this.display = this.display + '2'; 
  }
  input_3() : void{
  this.display = this.display + '3';  
  }
  input_4() : void{
  this.display = this.display + '4';
  }
  input_5() : void{
  this.display = this.display + '5'; 
  }
  input_6() : void{
  this.display = this.display + '6';
  }
  input_7() : void{
  this.display = this.display + '7';  
  }
  input_8() : void{
  this.display = this.display + '8';  
  }
  input_9() : void{
  this.display = this.display + '9';  
  }
  input_0() : void{
  this.display = this.display + '0'; 
  }   

  input_comma() : void{
    if(this.display.indexOf('.') < 0){ //Sehen ob der Komma bereits eingegeben würde
      this.display = this.display + '.';
    }//Nur wenn es kein Komma gibt dann Komma hinzufügen.
  }  
  input_plus_minus() : void{
    //Den Plus-Minus Zeichen ein und ausschalten jedes mal wenn es auf den Knopf gedrückt wird.
    if(this.flag_plus_minus == false){
      this.display = '-' + this.display;     
      this.flag_plus_minus = true;    
    }
    else{
      this.display = this.display.slice(1);
      this.flag_plus_minus = false;
    }
  }   
  input_delete_backwards() : void{
    this.display = this.display.substring(0, this.display.length -1);    
  }    

  input_plus() : void{
    this.f_unselect_buttons();
    this.unsetFlags2_except(0);

    if(!this.flag_delete_input){
      if(this.flag_number_one){
        this.number1 = Number(this.display);  
        this.flag_number_one = false;
        this.flag_result = true;
      }
      else{
        this.result = Number(this.display);
        this.flag_result = false;
        this.flag_number_one = true;
      }      
    }
    this.display = "";
    this.flags2[0] = true;
    var element = <HTMLSelectElement>document.getElementById("f1");
    element.style.backgroundColor = this.f_color;    
  }

  input_minus() : void{
    this.f_unselect_buttons();
    this.unsetFlags2_except(1);

    if(!this.flag_delete_input){
      if(this.flag_number_one){
        this.number1 = Number(this.display);  
        this.flag_number_one = false;
        this.flag_result = true;
      }
      else{
        this.result = Number(this.display);
        this.flag_result = false;
        this.flag_number_one = true;
      }      
  }
    this.display = "";
    this.flags2[1] = true;
    var element = <HTMLSelectElement>document.getElementById("f2");
    element.style.backgroundColor = this.f_color;      
  }

  input_mal() : void{
    this.f_unselect_buttons();
    this.unsetFlags2_except(2);
    if(!this.flag_delete_input){
      if(this.flag_number_one){
        this.number1 = Number(this.display);  
        this.flag_number_one = false;
        this.flag_result = true;
      }
      else{
        this.result = Number(this.display);
        this.flag_result = false;
        this.flag_number_one = true;
      }      
  }
    this.display = "";
    this.flags2[2] = true;
    var element = <HTMLSelectElement>document.getElementById("f3");
    element.style.backgroundColor = this.f_color;       
  }

  input_divide() : void{
    this.f_unselect_buttons();
    this.unsetFlags2_except(3);
    if(!this.flag_delete_input){
      this.flags2[3] = true;      
      if(this.flag_number_one && (!this.flag_result)){
        this.number1 = Number(this.display);  
        this.flag_number_one = false;
        this.flag_result = true;
        this.display = "";
      }
      else{
        this.number2 = Number(this.display)
        this.flag_result = false;
        this.flag_number_one = true;
        this.display = String(this.result);
      }      
      var element = <HTMLSelectElement>document.getElementById("f4");
      element.style.backgroundColor = this.f_color;  
    }     
  }

  input_YPowX() : void{
    this.f_unselect_buttons();
    this.unsetFlags2_except(4); 
    if(!this.flag_delete_input){
      this.flags2[4] = true;      
      if(this.flag_number_one && (!this.flag_result)){
        this.number1 = Number(this.display);  
        this.flag_number_one = false;
        this.flag_result = true;
        this.display = "";
      }
      else{
        this.number2 = Number(this.display)
        this.flag_result = false;
        this.flag_number_one = true;
        this.display = String(this.result);
      }      
      var element = <HTMLSelectElement>document.getElementById("f_2_YPowX");
      element.style.backgroundColor = this.f_color;  
    }     
  }  

  input_XSqrtY() : void{
    this.f_unselect_buttons();
    this.unsetFlags2_except(5); 
    if(!this.flag_delete_input){
      this.flags2[5] = true;      
      if(this.flag_number_one && (!this.flag_result)){
        this.number1 = Number(this.display);  
        this.flag_number_one = false;
        this.flag_result = true;
        this.display = "";
      }
      else{
        this.number2 = Number(this.display)
        this.flag_result = false;
        this.flag_number_one = true;
        this.display = String(this.result);
      }      
      var element = <HTMLSelectElement>document.getElementById("f_2_XSqrtY");
      element.style.backgroundColor = this.f_color;  
    }     
  }  
  
  //############################################################################################
  input_sin() : void{
    if(this.flag_number_one){
      if((Number(this.display) % 180) == 0){//correct accuracy error, because PI is an irrational number
        this.number1 = 0;
      }
      else{
        this.number1 = Number(Math.sin(Number(this.display) * Math.PI / 180.0));        
      }      
      this.display = String(this.number1); 
      this.flag_number_one = false;
      this.flag_result = true;
    }
    else{
      if((Number(this.display) % 180) == 0){//correct accuracy error, because PI is an irrational number
        this.result = 0;
      }
      else{
        this.result = Number(Math.sin(Number(this.display) * Math.PI / 180.0));        
      } 
      this.display = String(this.result);
      this.flag_result = false;
      this.flag_number_one = true;
    }
    this.f_unselect_buttons();
    this.flag_sin = true;
    var element = <HTMLSelectElement>document.getElementById("f_sin");
    element.style.backgroundColor = this.f_color;      
  }  

  input_cos() : void{
    if(this.flag_number_one){
      if((Number(this.display) % 90) == 0){//correct accuracy error, because PI is an irrational number
        this.number1 = 0;
      }
      else{
        this.number1 = Number(Math.cos(Number(this.display) * Math.PI / 180.0));        
      }
      this.display = String(this.number1);
      this.flag_number_one = false;
      this.flag_result = true;
    }
    else{
      if((Number(this.display) % 90) == 0){//correct accuracy error, because PI is an irrational number
        this.result = 0;
      }
      else{
        this.result = Number(Math.cos(Number(this.display) * Math.PI / 180.0));        
      }
      this.display = String(this.result);
      this.flag_result = false;
      this.flag_number_one = true;
    }
    this.f_unselect_buttons();
    this.flag_cos = true;
    var element = <HTMLSelectElement>document.getElementById("f_cos");
    element.style.backgroundColor = this.f_color;      
  }  

  input_tan() : void{
    if(this.flag_number_one){
      this.number1 = Number(Math.tan(Number(this.display) * Math.PI / 180.0));
      this.display = String(this.number1);  
      this.flag_number_one = false;
      this.flag_result = true;
    }
    else{
      this.result = Number(Math.tan(Number(this.display) * Math.PI / 180.0));
      this.display = String(this.result);
      this.flag_result = false;
      this.flag_number_one = true;
    }
    this.f_unselect_buttons();
    this.flag_tan = true;
    var element = <HTMLSelectElement>document.getElementById("f_tan");
    element.style.backgroundColor = this.f_color;      
  }  
  
  input_1_x() : void{
    if(this.flag_number_one){
      this.number1 = Number(this.display);  
      this.result = 1 / this.number1;
      this.display = String(this.result);
    }
    else{
      this.result = Number(this.display);
      this.result = 1 / this.result;
      this.display = String(this.result);
    }
    this.f_unselect_buttons();
    var element = <HTMLSelectElement>document.getElementById("f_1_x");
    element.style.backgroundColor = this.f_color;
  }    

  input_log() : void{
    if(this.flag_number_one){
      this.number1 = Number(this.display);  
      this.result = Math.log10(this.number1);
      this.display = String(this.result);
    }
    else{
      this.result = Number(this.display);
      this.result = Math.log10(this.result);
      this.display = String(this.result);
    }
    this.f_unselect_buttons();
    var element = <HTMLSelectElement>document.getElementById("f_1_log");
    element.style.backgroundColor = this.f_color;    
  }

  input_sqrt() : void{
    if(this.flag_number_one){
      this.number1 = Number(this.display);  
      this.result = Math.sqrt(this.number1);
      this.display = String(this.result);
    }
    else{
      this.result = Number(this.display);
      this.result = Math.sqrt(this.result);
      this.display = String(this.result);
    }
    this.f_unselect_buttons();
    var element = <HTMLSelectElement>document.getElementById("f_1_sqrt");
    element.style.backgroundColor = this.f_color;    
  }

  input_xPow2() : void{
    if(this.flag_number_one){
      this.number1 = Number(this.display);  
      this.result = this.number1 * this.number1;
      this.display = String(this.result);
    }
    else{
      this.result = Number(this.display);
      this.result = this.result * this.result;
      this.display = String(this.result);
    }
    this.f_unselect_buttons();
    var element = <HTMLSelectElement>document.getElementById("f_1_xPow2");
    element.style.backgroundColor = this.f_color;    
  }  

  input_xPow3() : void{
    if(this.flag_number_one){
      this.number1 = Number(this.display);  
      this.result = this.number1 * this.number1 * this.number1;
      this.display = String(this.result);
    }
    else{
      this.result = Number(this.display);
      this.result = this.result * this.result * this.result;
      this.display = String(this.result);
    }
    this.f_unselect_buttons();
    var element = <HTMLSelectElement>document.getElementById("f_1_xPow3");
    element.style.backgroundColor = this.f_color;    
  }    

  input_e_x() : void{
    if(this.flag_number_one){
      this.number1 = Number(this.display);  
      this.result = Math.pow(Math.E, this.number1);
      this.display = String(this.result);
    }
    else{
      this.result = Number(this.display);
      this.result = Math.pow(Math.E, this.result);
      this.display = String(this.result);
    }
    this.f_unselect_buttons();
    var element = <HTMLSelectElement>document.getElementById("f_1_e_x");
    element.style.backgroundColor = this.f_color;    
  }    

  input_factorial() : void{
    if(this.flag_number_one){
      this.number1 = Number(this.display);  
      this.display = this.factorial(this.number1);
    }
    else{
      this.result = Number(this.display);
      this.display = this.factorial(this.result);
    }
    this.f_unselect_buttons();
    var element = <HTMLSelectElement>document.getElementById("f_1_factorial");
    element.style.backgroundColor = this.f_color;    
  }    

  //###############################################################################
  input_PI() : void{
    if(this.flag_number_one){
      this.number1 = Number(this.display);  
      this.result = Math.PI;
      this.display = String(this.result);
    }
    else{
      this.result = Number(this.display);
      this.result = Math.PI;
      this.display = String(this.result);
    }
    this.f_unselect_buttons();
    var element = <HTMLSelectElement>document.getElementById("f_1_PI");
    element.style.backgroundColor = this.f_color;    
  }
  
  input_LN() : void{
    if(this.flag_number_one){
      this.number1 = Number(this.display);  
      this.result = Math.E;
      this.display = String(this.result);
    }
    else{
      this.result = Number(this.display);
      this.result = Math.E;
      this.display = String(this.result);
    }
    this.f_unselect_buttons();
    var element = <HTMLSelectElement>document.getElementById("f_1_LN");
    element.style.backgroundColor = this.f_color;    
  }   
  
  input_f() : void{
    if(this.flag_number_one){
      this.number1 = Number(this.display);  
      this.result = 1.61803398874989;
      this.display = String(this.result);
    }
    else{
      this.result = Number(this.display);
      this.result = 1.61803398874989;
      this.display = String(this.result);
    }
    this.f_unselect_buttons();
    var element = <HTMLSelectElement>document.getElementById("f_1_f");
    element.style.backgroundColor = this.f_color;    
  }  
  
  input_sqrt2() : void{
    if(this.flag_number_one){
      this.number1 = Number(this.display);  
      this.result = Math.SQRT2;
      this.display = String(this.result);
    }
    else{
      this.result = Number(this.display);
      this.result = Math.SQRT2;
      this.display = String(this.result);
    }
    this.f_unselect_buttons();
    var element = <HTMLSelectElement>document.getElementById("f_1_sqrt2");
    element.style.backgroundColor = this.f_color;    
  }     

  input() : void{
    this.f_unselect_buttons();
    if(this.flags2[0]){ // a + b
      if(this.flag_number_one){ 
        this.flag_number_one = false;
        this.flag_result = true;
      }
      else{       
        this.result = Number(this.display);
        this.flag_result = false;
        this.flag_number_one = true;
      }    
      this.result = this.result + this.number1;
      this.display = String(this.result);
      //this.flag_plus = false;
      var element = <HTMLSelectElement>document.getElementById("f1");
      element.style.backgroundColor = this.default_color;
      this.flag_delete_input = false;
    }
    else if(this.flags2[1]){ // a - b
      if(this.flag_number_one){
        this.flag_number_one = false;
        this.flag_result = true;
      }
      else{
        this.result = Number(this.display);
        this.flag_result = false;
        this.flag_number_one = true;
      }    
      this.display = String(this.number1 - this.result);
      this.flags2[1] = false;  
      var element = <HTMLSelectElement>document.getElementById("f2");
      element.style.backgroundColor = this.default_color;  
      this.flag_delete_input = false;     
    }
    else if(this.flags2[2]){ // a * b
      if(this.flag_number_one){ 
        this.flag_number_one = false;
        this.flag_result = true;
      }
      else{
        this.result = Number(this.display);
        this.flag_result = false;
        this.flag_number_one = true;
      }    
      this.display = String(this.number1 * this.result);
      this.flags2[2] = false;  
      var element = <HTMLSelectElement>document.getElementById("f3");
      element.style.backgroundColor = this.default_color;       
    }
    else if(this.flags2[3]){ // a / b
      if(this.flag_number_one){ 
        this.flag_number_one = false;
        this.flag_result = true;
      }
      else{
        this.number2 = Number(this.display);
        this.flag_result = false;
        this.flag_number_one = true;
      }    
      this.display = String(this.number1 / this.number2);
      this.flags2[3] = false;  
      var element = <HTMLSelectElement>document.getElementById("f3");
      element.style.backgroundColor = this.default_color;       
    }
    else if(this.flags2[4]){ // x^y
      if(this.flag_number_one){ 
        this.flag_number_one = false;
        this.flag_result = true;
      }
      else{
        this.number2 = Number(this.display);
        this.flag_result = false;
        this.flag_number_one = true;
      }    
      this.display = String(Math.pow(this.number1, this.number2));
      this.flags2[4] = false;  
      var element = <HTMLSelectElement>document.getElementById("f_2_YPowX");
      element.style.backgroundColor = this.default_color;       
    }  
    else if(this.flags2[5]){ // xSqrt(y)
      if(this.flag_number_one){ 
        this.flag_number_one = false;
        this.flag_result = true;
      }
      else{
        this.number2 = Number(this.display);
        this.flag_result = false;
        this.flag_number_one = true;
      }    
      this.display = String(Math.pow(this.number1, (1 / this.number2)));
      this.flags2[5] = false;  
      var element = <HTMLSelectElement>document.getElementById("f_2_XSqrtY");
      element.style.backgroundColor = this.default_color;       
    }              

    //#################################################################################
    else if(this.flag_sin){    
      if(this.flag_number_one){
        this.number1 = Number(Math.sin(Number(this.display) * Math.PI / 180.0));
        this.display = String(this.number1); 
        this.flag_number_one = false;
        this.flag_result = true;
      }
      else{
        this.result = Number(Math.sin(Number(this.display) * Math.PI / 180.0));
        this.display = String(this.result);
        this.flag_result = false;
        this.flag_number_one = true;
      }    
      this.flag_sin = false;   
      var element = <HTMLSelectElement>document.getElementById("f_sin");
      element.style.backgroundColor = this.default_color;      
    }         

    else if(this.flag_cos){    
      if(this.flag_number_one){
        this.number1 = Number(Math.cos(Number(this.display) * Math.PI / 180.0));
        this.display = String(this.number1); 
        this.flag_number_one = false;
        this.flag_result = true;
      }
      else{
        this.result = Number(Math.sin(Number(this.display) * Math.PI / 180.0));
        this.display = String(this.result);
        this.flag_result = false;
        this.flag_number_one = true;
      }    
      this.flag_cos = false;   
      var element = <HTMLSelectElement>document.getElementById("f_cos");
      element.style.backgroundColor = this.default_color;      
    }  
    
    else if(this.flag_tan){    
      if(this.flag_number_one){
        this.number1 = Number(Math.tan(Number(this.display) * Math.PI / 180.0));
        this.display = String(this.number1); 
        this.flag_number_one = false;
        this.flag_result = true;
      }
      else{
        this.result = Number(Math.tan(Number(this.display) * Math.PI / 180.0));
        this.display = String(this.result);
        this.flag_result = false;
        this.flag_number_one = true;
      }    
      this.flag_tan = false;   
      var element = <HTMLSelectElement>document.getElementById("f_tan");
      element.style.backgroundColor = this.default_color;      
    }      
  }   


  delete(): void{
    this.display = "";
    this.result = 0;
  }

  f_unselect_buttons(): void{
    const a = <HTMLSelectElement>document.getElementsByClassName('arithmetical_operations_input_button');
    for(const i of a){
      i.style.backgroundColor = "#FFFFFF";
    }
  }

  //Unsets all flags except one.
  unsetFlags2_except(flagIndex: number): void{
    for(let i = 0; i < this.flags2_N; i++){
      this.flags2[i] = false;       
    }

    this.flags2[flagIndex] = true;
  }

  //#################################### Math functions ######################################
  factorial(n: number): string{
    if(n < 0){
      return "ERROR!";
    }
    let result = 1;
    for(let i = 1; i <= n; i++){
      result = result * i;
    }

    return String(result);
  }
}  
