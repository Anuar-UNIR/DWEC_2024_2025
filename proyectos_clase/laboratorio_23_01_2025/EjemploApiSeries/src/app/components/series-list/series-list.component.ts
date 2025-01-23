import { Component, inject } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Serie } from '../../interfaces/serie';
import { SerieCardComponent } from "../serie-card/serie-card.component";

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [SerieCardComponent],
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent {

  arrSeries: Serie[] = [];
  seriesService = inject(SeriesService);

  ngOnInit(): void {
    this.arrSeries = this.seriesService.getAllSeries();
    console.log(this.arrSeries);
  }
}
