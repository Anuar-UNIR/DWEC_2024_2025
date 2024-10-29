import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GaleriaComponent } from "./components/galeria/galeria.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GaleriaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appAngularE3';
}
