import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cuenta-atras',
  standalone: true,
  imports: [],
  templateUrl: './cuenta-atras.component.html',
  styleUrl: './cuenta-atras.component.css'
})
export class CuentaAtrasComponent {

  @Input() numeroInicial: number = 13;
  @Input() color: string = "gold";

  @Output() cuentaAtrasTerminada: EventEmitter<string> = new EventEmitter;

  intervalo: any;
  private isRunning: boolean = false;


  comenzar() :void {
    if (!this.isRunning) {
      this.intervalo = setInterval(() => {
        if (this.numeroInicial > 0) {
          this.numeroInicial--;
        }
        else {
          clearInterval(this.intervalo);
          //Cuando se termine el contador notficiar para cambiar el color
          this.cuentaAtrasTerminada.emit(this.color);
        }
      }, 1000);
      this.isRunning = true;
    }
  }



}
