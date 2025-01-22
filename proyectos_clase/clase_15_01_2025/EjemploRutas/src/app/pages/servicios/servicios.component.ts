import { Component, inject } from '@angular/core';
import { Servicio } from '../../interfaces/servicio';
import { ServiciosService } from '../../services/servicios.service';
import { ServiceCardComponent } from "../../components/service-card/service-card.component";

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

  misServicios: Servicio[];

  serviciosService = inject(ServiciosService);

  constructor() {
    this.misServicios = [];
  }

  ngOnInit(): void{
    this.misServicios = this.serviciosService.getAll();
  }

}
