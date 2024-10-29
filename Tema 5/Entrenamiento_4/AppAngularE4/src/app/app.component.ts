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
  title = 'AppAngularE4';
  primerContador: number = 23;
  segundoContador: number = 13;
  tercerContandor: number = 7;
}
