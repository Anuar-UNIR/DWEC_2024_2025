import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrabajadorComponent } from "./components/trabajador/trabajador.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrabajadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppRepaso';
}
