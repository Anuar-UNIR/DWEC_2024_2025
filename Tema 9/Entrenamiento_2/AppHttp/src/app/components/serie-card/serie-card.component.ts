import { Component, Input } from '@angular/core';
import { ISeries } from '../../interfaces/iSeries.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-serie-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './serie-card.component.html',
  styleUrl: './serie-card.component.css'
})
export class SerieCardComponent {
  @Input() miSerie!: ISeries;



}
