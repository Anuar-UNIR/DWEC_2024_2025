import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CuentaAtrasComponent } from "./components/cuenta-atras/cuenta-atras.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CuentaAtrasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'EjemploInputOutput';

  primerContador: number = 7;
  segundoContador: number = 5;
  tercerContador: number = 3;

  color: string = "";

  arrColores: string[] = ['red', 'blue', 'gold', 'green'];


  terminar($event: string) {
    this.color = `background-color:${$event}`;
  }
  
}
