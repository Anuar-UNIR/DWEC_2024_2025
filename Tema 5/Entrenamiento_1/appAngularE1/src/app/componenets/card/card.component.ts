import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  //Propiedades
  private nombre: string = "Pago";
  private apellidos: string ="Grande Lopez"
  edad: number = 33;
  colorBackground: string = "azul";
  texto: string = "";

  getNombreCompleto(): string{
    return this.nombre + " " + this.apellidos;
  }

  cargarTexto(event: any): void {
    this.texto = event.target.value;
  }
  


}
