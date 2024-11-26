import { Injectable } from '@angular/core';
import { IServicio } from '../interfaces/iservicio';
import { SERVICIOS } from '../db/servicios.db';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private arrServicio :IServicio[];

  constructor() {
    this.arrServicio = SERVICIOS;
  }

  getAll():IServicio[]
  {
    return this.arrServicio;
  }

  getByUrl(miUrl: string): IServicio | undefined{
    return this.arrServicio.find(serv => serv.url == miUrl);
  }
}
