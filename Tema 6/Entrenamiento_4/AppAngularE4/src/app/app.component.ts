import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlFlowSwitchComponent } from "./components/control-flow-switch/control-flow-switch.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ControlFlowSwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppAngularE4';
}
