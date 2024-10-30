import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardInfoComponent } from "./components/card-info/card-info.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'AppAngularE1';

  userActivo: boolean = false;

  onChangeActivo() {
    console.log("Se ha modificado el estado de usuario");
  }
}
