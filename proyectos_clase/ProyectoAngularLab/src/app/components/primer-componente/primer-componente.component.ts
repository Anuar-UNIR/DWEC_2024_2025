import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer-componente',
  standalone: true,
  imports: [],
  templateUrl: './primer-componente.component.html',
  styleUrl: './primer-componente.component.css'
})
  
export class PrimerComponenteComponent{

  nombre: string;
  apellidos: string;
  edad: number;
  email: string;
  carreras: string[];
  carreraActual: string;

  constructor() {
    this.nombre = "Fernando";
    this.apellidos = "Alonso";
    this.edad = 43;
    this.email = "alo@f1.com";
    this.carreras = ["Monaco", "Spa", "Montmelo", "San Marino"];
    this.carreraActual = this.carreras[Math.floor(Math.random() * this.carreras.length)];
    // console.log("Estoy en el constructor");
  }



  // ngOnChanges(): void {
    
  //   console.log("Estoy en el ngOnChanges");
  // }

  // ngOnInit(): void{
  //   console.log("Estoy en el ngOnInit");
  //   // alert("Ya he cargado");

  //   setTimeout(() => {
  //     this.ngOnDestroy();
  //   },5000)
  // }

  // ngOnDestroy(): void{
  //   console.log("Estoy en el ngOnDestroy");
  // }

}
