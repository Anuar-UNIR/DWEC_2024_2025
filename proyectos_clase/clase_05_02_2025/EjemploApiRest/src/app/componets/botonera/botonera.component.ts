import { Component, inject, Input } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Router, RouterLink } from '@angular/router';
import { Serie } from '../../interfaces/serie';

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

  async borrarSerie(_id: string) {
    let confirmacion = confirm(' Esta seguro de que quiere eliminar la serie: ' + this._id);
    if (confirmacion) {
      let response = await this.seriesService.delete(_id);
      //Esto es particular de la API
      if (response._id) {
        alert('Se ha borrado correctamente la serie ' + response.title);
        if (this.parent == 'view') {
          this.router.navigate(['/series']);
        }
        else if(this.parent == "card" ){
          location.reload();
        }
      }
    }
    
  }
}
