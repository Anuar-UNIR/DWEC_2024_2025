import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlFlowIfComponent } from "./components/control-flow-if/control-flow-if.component";
import { ControlFlowForComponent } from "./components/control-flow-for/control-flow-for.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ControlFlowIfComponent, ControlFlowForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppAngularE2';
}
