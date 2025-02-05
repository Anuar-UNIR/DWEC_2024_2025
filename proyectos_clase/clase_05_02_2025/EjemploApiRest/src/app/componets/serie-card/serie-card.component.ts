import { Component, Input } from '@angular/core';
import { Serie } from '../../interfaces/serie';
import { BotoneraComponent } from "../botonera/botonera.component";

@Component({
  selector: 'app-serie-card',
  standalone: true,
  imports: [BotoneraComponent],
  templateUrl: './serie-card.component.html',
  styleUrl: './serie-card.component.css'
})
export class SerieCardComponent {

  @Input() miSerie!: Serie;

}
