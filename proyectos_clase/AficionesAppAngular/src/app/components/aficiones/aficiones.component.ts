import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iaficion } from '../../interfaces/iaficion';

@Component({
  selector: 'app-aficiones',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './aficiones.component.html',
  styleUrl: './aficiones.component.css'
})
export class AficionesComponent {

  arrAficiones: Iaficion[];
  newAficion: Iaficion;
  
  constructor() {

    //Propiedades para bindear
    this.arrAficiones = [];
    this.newAficion = {
      aficion: "",
      nombre: "",
      nivel: ""
    }
  }

  guardarDatos(): void {
    this.arrAficiones.push(this.newAficion);
    //Reiniciar el objeto, a newAficion le asigno un nuevo any, con la misma estructura
    // newAficion = new Aficion();
    this.newAficion = {
      aficion: "",
      nombre: "",
      nivel: ""
    }
  }

  //InnerHtml solo ejercicio de clase, no es bueno usarlo o abusar, problemas de inyeccion de html
  cargarDatos(): string{
    let html: string = "";
    this.arrAficiones.forEach(element => {
      html += `<p><strong>Aficion: </strong>${element.aficion} -- <strong>Nombre: </strong>${element.nombre} <strong>Nivel: </strong>${element.nivel}</p>`
    }
    );



    return html;
  }

}
