import { Component, inject, Input } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-botonera',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {


  seriesService = inject(SeriesService);
  router = inject(Router);

  @Input() _id: string;
  @Input() parent: string;


  constructor() {
    this._id = "";
    this.parent = "";
  }

  borrarSerie(_id: string) {
    //Llamara al servicio para eliminar la serie
    
  }



}
