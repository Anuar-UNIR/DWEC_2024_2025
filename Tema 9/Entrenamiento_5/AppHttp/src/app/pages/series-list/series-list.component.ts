import { Component, inject } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { SerieCardComponent } from "../../components/serie-card/serie-card.component";
import { ISerie } from '../../interfaces/iserie.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [SerieCardComponent, RouterLink],
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent {

  seriesServices = inject(SeriesService);
  arrSeries: ISerie[];

  constructor() {
    this.arrSeries = [];
    
  }

  async ngOnInit() {
    //Usando Obserbables
    // this.seriesServices.getAllWithObservables().subscribe((data: ISeries[]) => {
    //   this.arrSeries = data;
    // });

    //Usando Promesas
    try {
      this.arrSeries = await this.seriesServices.getAllWithPromises();
    } catch (err) {
      console.log('Error al conectar a la API: ' + err);
    }
    
  }

}
