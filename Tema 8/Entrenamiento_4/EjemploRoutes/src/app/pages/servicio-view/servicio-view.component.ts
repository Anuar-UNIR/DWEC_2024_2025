import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IServicio } from '../../interfaces/iservicio';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-servicio-view',
  standalone: true,
  imports: [],
  templateUrl: './servicio-view.component.html',
  styleUrl: './servicio-view.component.css'
})
export class ServicioViewComponent {

  activatedRoute = inject(ActivatedRoute);
  servicioService = inject(ServiciosService);
  miServicio!: IServicio;

  ngOnInit(): void{
    this.activatedRoute.params.subscribe((params: any) => {
      let miUrl = params.url;
      let response = this.servicioService.getByUrl(miUrl);
      if (response !== undefined) {
        this.miServicio = response;
      }
    });

    
    
  }

}
