import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-if',
  standalone: true,
  imports: [],
  templateUrl: './control-flow-if.component.html',
  styleUrl: './control-flow-if.component.css'
})
export class ControlFlowIfComponent {


  edad: number = -1;

  cambiarEdad($event: any): void {

    if ($event.target.value == undefined) {
      this.edad = -1;
    }
    else {
      this.edad = $event.target.value;
    }
    
  }

}
