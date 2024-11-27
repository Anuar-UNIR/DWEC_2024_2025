import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-botonera',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {

  seriesService = inject(SeriesService);

  @Input() miId: string | undefined;
  @Input() parent: string = "";

  async borrarSerie(id: string) {
    let confirmacion = confirm('Seguro que quieres borrar la serie con id ' + this.miId);
    if (confirmacion) {
      let response = await this.seriesService.delete(id);
      if (response._id) {
        alert("Se ha borrado correctamente la serie " + response.title);
      }
    }
    
  }
}
