import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from "./components/contador/contador.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testAngular';
}
