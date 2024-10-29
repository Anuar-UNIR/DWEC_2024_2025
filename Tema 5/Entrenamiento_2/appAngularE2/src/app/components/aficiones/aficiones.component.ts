import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aficiones',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './aficiones.component.html',
  styleUrl: './aficiones.component.css'
})
export class AficionesComponent {


  //Para usar el Two way data binding necesitamos la libreria de FormsModule y la directiva ngModel
  arrAficiones: any[] = [];

  newAficion: any = {
    aficion: "",
    nombre:""
  }


  guardarDatos() {
    this.arrAficiones.push(this.newAficion);
    this.newAficion = {
      aficion: "",
      nombre:""
    }

    console.log(this.arrAficiones);
  }

  cargarDatos() : string {
    let html : string = "";
    this.arrAficiones.forEach(element => {
      html += `<p>${element.aficion} - ${element.nombre}</p>`
    });
    return html;
  }

}
