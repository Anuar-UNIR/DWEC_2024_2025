import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-switch',
  standalone: true,
  imports: [],
  templateUrl: './control-flow-switch.component.html',
  styleUrl: './control-flow-switch.component.css'
})
export class ControlFlowSwitchComponent {

  roles: string[];
  role: string;

  constructor() {
    this.roles = ["admin", "editor", "suscriptor", "otros"];
    this.role = this.roles[8];
  }

  ngOnInit(): void{
    //Llamadas al servicio

    
  }

}
