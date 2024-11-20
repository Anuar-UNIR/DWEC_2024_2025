import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Itrabajador } from '../../interfaces/itrabajador';

@Component({
  selector: 'app-trabajador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './trabajador.component.html',
  styleUrl: './trabajador.component.css'
})
export class TrabajadorComponent {


  isBtnEnable: boolean = true;

  arrTrabajadores: Itrabajador[] = [];

  nuevoTrabajador: Itrabajador = {
    nombre: "",
    apellidos: "",
    email: "",
    edad: 0,
    telefono: "",
    cargo: "vacio"
  }

  guardarDatos($event: any) {
    
    this.arrTrabajadores.push(this.nuevoTrabajador);
    console.log(this.arrTrabajadores);

    this.nuevoTrabajador = { //Esto es equivalente a en java nuevoTrabajador = new Trabajador();
      nombre: "",
      apellidos: "",
      email: "",
      edad: 0,
      telefono: "",
      cargo: "vacio"
    }
  }

  cargarDatos(): string {
    let html: string = "";
    this.arrTrabajadores.forEach(trabjador => {
      html += `<p>Nombre: ${trabjador.nombre} ${trabjador.apellidos}</p> <p>Email: ${trabjador.email}</p> <p>Telefono: ${trabjador.telefono}</p> <p>Cargo: ${trabjador.cargo}</p> <hr><br>` 
    });
    
    return html;

  }

  validarCampos() {
    if (this.nuevoTrabajador.nombre.trim().length > 3 || this.nuevoTrabajador.apellidos.trim().length > 3 || this.nuevoTrabajador.email.trim().length > 3 || this.nuevoTrabajador.telefono.trim().length > 3 || this.nuevoTrabajador.edad > 0)  {
      this.isBtnEnable = false;
    }
    else {
      this.isBtnEnable = true;
    }
  }



}
