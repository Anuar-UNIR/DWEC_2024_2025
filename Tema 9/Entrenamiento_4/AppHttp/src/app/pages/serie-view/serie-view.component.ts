import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeriesService } from '../../services/series.service';
import { ISerie } from '../../interfaces/iserie.interface';

@Component({
  selector: 'app-serie-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './serie-view.component.html',
  styleUrl: './serie-view.component.css'
})
export class SerieViewComponent {

  //Caputar el id de la serie para poder hacer una peticion a la API

  activatedRoute = inject(ActivatedRoute);
  seriesService = inject(SeriesService);
  miSerie!: ISerie;

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id = params.idserie;
      console.log(id);
      try {
        this.miSerie = await this.seriesService.getById(id);
      } catch (err) {
        console.log(err);
      }
    });
  }

}
