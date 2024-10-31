import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-switch',
  standalone: true,
  imports: [],
  templateUrl: './control-flow-switch.component.html',
  styleUrl: './control-flow-switch.component.css'
})
export class ControlFlowSwitchComponent {

  roles: string[] = ["admin", "editor", "suscriptor", "otros"];
  role: string = this.roles[1];

}
