import { Component, inject, Input } from '@angular/core';
import { Serie } from '../../interfaces/serie';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-serie-card',
  standalone: true,
  imports: [],
  templateUrl: './serie-card.component.html',
  styleUrl: './serie-card.component.css'
})
export class SerieCardComponent {

  serieService = inject(SeriesService);

  @Input() miSerie!: Serie;

  deleteSerie(serie: Serie) {
    this.serieService.deteleByTitle(serie.title);
  }
}
