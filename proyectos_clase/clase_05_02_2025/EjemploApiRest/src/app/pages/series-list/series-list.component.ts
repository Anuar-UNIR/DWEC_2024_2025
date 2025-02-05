import { Component, inject } from '@angular/core';
import { Serie } from '../../interfaces/serie';
import { SeriesService } from '../../services/series.service';
import { SerieCardComponent } from "../../componets/serie-card/serie-card.component";

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [SerieCardComponent],
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent {

  arrSeries: Serie[];
  serieService = inject(SeriesService);

  constructor() {
    this.arrSeries = [];
  }

  async ngOnInit(): Promise<void> {
    //Usando Observables
    // this.serieService.getAllWithObservables().subscribe((data: Serie[]) => {
    //   this.arrSeries = data;
    // });

    //Usando promesas
    try {
      this.arrSeries = await this.serieService.getAllWithPromises();
    }
    catch (err) {
      console.log('Error al conectar a la API: '+err)
    }
    
  }

}
