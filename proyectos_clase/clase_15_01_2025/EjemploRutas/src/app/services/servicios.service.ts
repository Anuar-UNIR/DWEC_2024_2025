import { Injectable } from '@angular/core';
import { Servicio } from '../interfaces/servicio';
import { SERVICIOS } from '../db/servicios.db';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private arrServicio: Servicio[];

  constructor() {
    this.arrServicio = SERVICIOS;
  }

  getAll(): Servicio[] {
    return this.arrServicio;
  }

  getByUrl(miUrl: string): Servicio | undefined {
    return this.arrServicio.find(serv => serv.url == miUrl);

    // let servicio = this.arrServicio.find(serv => serv.url == miUrl);
    // if (servicio != undefined) {
    //   return servicio
    // }
    // else {
    //   let servi: Servicio = {
    //         title: "NO hay servicio",
    //         description: "NO hay servicio",
    //         url: "page404"
    //   }

    //     return servi;
    //   }
    
  }
}

