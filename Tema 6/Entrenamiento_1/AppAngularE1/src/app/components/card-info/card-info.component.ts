import { Component, computed, input, model } from '@angular/core';

@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.css'
})
export class CardInfoComponent {


  nombre = input<string>();
  apellidos = input<string>();

  email = input.required<string>();

  activo = model(false) ;

  nombreCompleto = computed(() => `${this.nombre()} ${this.apellidos()}`);


onClick() {
  this.activo.update(value => !value);
}
}
