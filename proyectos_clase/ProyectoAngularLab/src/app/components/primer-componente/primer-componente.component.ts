import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-primer-componente',
  standalone: true,
  imports: [FormsModule],
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

  color: string;
  ruta: string;
  stock: boolean;
  sended: boolean;
  texto: string;
  contador: number;
  isHidden: boolean
  textoInput: string;

  constructor() {
    this.nombre = "Fernando";
    this.apellidos = "Alonso";
    this.edad = 43;
    this.email = "alo@f1.com";
    this.carreras = ["Monaco", "Spa", "Montmelo", "San Marino"];
    this.carreraActual = this.carreras[Math.floor(Math.random() * this.carreras.length)];
    this.color = "blue";
    this.ruta = "https://www.google.com"
    // console.log("Estoy en el constructor");
    this.stock = false;
    this.sended = true;
    this.texto = "";
    this.contador = 0;
    this.isHidden = true
    this.textoInput = "Introduce tu nombre";
    
  }

  nombreCompleto(): string{
    return `${this.nombre} ${this.apellidos}`;

  }

  infoPiloto(): string{
    let html = "<h3>Carreras temporada 2024</h3><ul>";
    this.carreras.forEach((race) => {
      html += `<li>${race}</li>`
    });
    html += "</ul>"
    return html;

  }

  myOnClick() {
    this.sended = !this.sended;
    this.contador++;
  }

  pintarDorsal($event: any) {
    console.log($event);
    this.texto = $event.target.value
    this.isHidden = !this.isHidden;
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
