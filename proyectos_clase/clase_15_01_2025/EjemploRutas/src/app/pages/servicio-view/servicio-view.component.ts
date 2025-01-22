import { Component, inject } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { Servicio } from '../../interfaces/servicio';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servicio-view',
  standalone: true,
  imports: [],
  templateUrl: './servicio-view.component.html',
  styleUrl: './servicio-view.component.css'
})
export class ServicioViewComponent {

  servicioService = inject(ServiciosService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  miServicio!: Servicio;

  ngOnInit(): void{
    this.activatedRoute.params.subscribe((params: any) => {
      let miUrl: string = params.url as string;
      let response = this.servicioService.getByUrl(miUrl);
      if (response !== undefined) {
        this.miServicio = response;
      }
      else {
        //this.router.navigate(['/servicio404']);
      }
    });
  }

}
