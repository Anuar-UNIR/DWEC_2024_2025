import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ITrabajador } from '../../interfaces/itrabajador';

@Component({
  selector: 'app-form-template',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.css'
})
export class FormTemplateComponent {

  arrTrabjadores: ITrabajador[];

  constructor() {
    this.arrTrabjadores = [];
  }

  //Funcion que se ejecuta en el submit donde recogemos la informacion del Formulario
  getDataForm(miFormulario: NgForm) {
    let trabajador: ITrabajador = miFormulario.value as ITrabajador;
    console.log(trabajador);
    if (trabajador.email == '') {
      alert("Debe de rellenar el email");
    }

    if (trabajador.edad < 18) {
      alert("Debe de ser mayor de edad")
    }
    
    this.arrTrabjadores.push(trabajador);
    miFormulario.resetForm();
  }

}
