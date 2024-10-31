import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-for',
  standalone: true,
  imports: [],
  templateUrl: './control-flow-for.component.html',
  styleUrl: './control-flow-for.component.css'
})
export class ControlFlowForComponent {
  estudiantes: any[] = [
  
    { id: 1, name: "Frodo Bolson", age: 23 },
    { id: 2, name: "Sam Gamyi", age: 33 },
    { id: 3, name: "Gandalf", age: 2755 },
    { id: 4, name: "Aragorn", age: 85 },
    { id: 5, name: "Legolas", age: 5313 },
  ]

}
