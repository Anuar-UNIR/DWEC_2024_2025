import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-cuenta-atras',
  standalone: true,
  imports: [],
  templateUrl: './cuenta-atras.component.html',
  styleUrl: './cuenta-atras.component.css'
})
export class CuentaAtrasComponent {


  @Input() numeroInicial: number = 100;
  @Input() color: string = "gold";
  intervalo: any;
  private isRunning: boolean = false;

  //Creacion del evento personalizado
  @Output() cuentaAtrasTerminada: EventEmitter<string> = new EventEmitter();


  comenzar() {
    if (!this.isRunning) {
          this.intervalo = setInterval(() => {
            if (this.numeroInicial > 0) {
                this.numeroInicial--;
            }
            else {
              clearInterval(this.intervalo);
              //Cuando se cumpla la condicion se emite el evento
              this.cuentaAtrasTerminada.emit(this.color);
            }
          }, 1000);
      this.isRunning = true;
    }
  }

}
