import { Component, Input } from '@angular/core';
import { IServicio } from '../../interfaces/iservicio';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicio-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './servicio-card.component.html',
  styleUrl: './servicio-card.component.css'
})
export class ServicioCardComponent {

  @Input() miServicio!: IServicio;

}
