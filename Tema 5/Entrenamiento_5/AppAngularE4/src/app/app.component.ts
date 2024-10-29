import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CuentaAtrasComponent } from "./components/cuenta-atras/cuenta-atras.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CuentaAtrasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'AppAngular5';
  primerContador: number = 3;
  segundoContador: number = 13;
  tercerContandor: number = 7;

  color: string = "";

  arrColores: string[] = ['red', 'blue', 'gold', 'green'];

  terminar($event: string) {
    this.color = `background-color:${$event}`;
  }


}


