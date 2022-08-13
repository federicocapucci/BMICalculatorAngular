import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  sex = 'MAN'
  height: number = 180;
  age : number =25;
  weight: number=60;

  constructor(private router :Router) { }

  ngOnInit(): void {
  }

  changeHeight(event : any) :void{
    this.height = event.target.value
  }

  masc(){
    this.sex = 'MAN'

  }
  fem(){
    this.sex = 'WOMAN'
  }

  calcularBMI(){

    const bmi = (this.weight / Math.pow((this.height /100),2)).toFixed(1);

    this.router.navigate(['resultado', bmi])
  }

}
