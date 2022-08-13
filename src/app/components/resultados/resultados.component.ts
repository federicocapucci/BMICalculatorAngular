import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  bmi :number;
  result :string;
  interpretation :string;

  constructor(private route : ActivatedRoute) {
    this.result = ""
    this.interpretation = ""
    this.bmi = +route.snapshot.paramMap.get('value')!
   }

  ngOnInit(): void {
    this.getResults()
  }

  getResults(){
    
    if(this.bmi>=30){
      this.result = "Obesity"
      this.interpretation = "Your result suggests you are obese"      
    }
    else if(this.bmi<=29.9 && this.bmi>=25){
      this.result = "Overweight"
      this.interpretation = "You're in the overweight range"      
    }
    else if(this.bmi<=24.9 && this.bmi>=18.5){
      this.result = "Healthy"
      this.interpretation = "You're in the healthy weight range"      
    }
    else{
      this.result = "Underweight"
      this.interpretation = "You're in the underweight range"    
    }

  }

}
