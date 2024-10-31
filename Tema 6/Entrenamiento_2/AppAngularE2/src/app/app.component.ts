import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlFlowIfComponent } from "./components/control-flow-if/control-flow-if.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ControlFlowIfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppAngularE2';
}
