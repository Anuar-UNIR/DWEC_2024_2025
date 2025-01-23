import { Injectable } from '@angular/core';
import { Serie } from '../interfaces/serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private arrSeries: Serie[];

  constructor() {
    this.arrSeries = [];
    //Obtenemos los datos mediante el fetch consultando la API
    fetch("https://peticiones.online/api/series")
      .then(response => response.json())
      .then(series => {
          series.forEach((element: any) => {
          this.arrSeries.push(element as Serie);
        });
      });

    console.log("Los datos son:" +this.arrSeries)
  }
  
  getAllSeries(): Serie[]
  {
    return this.arrSeries;
  }

  deteleByTitle(title: string): Serie[]{
    let i = this.arrSeries.findIndex(serie => serie.title == title);

    if (i != -1 && i >= 0 && i < this.arrSeries.length) {
      this.arrSeries.splice(i, 1);
    }

    return this.arrSeries;
  }

  // //simulando un filtro ejemplo de la Actividad 2
  // getDataForm(filter: any) {
  //   // Nombre, precio, categoria

  //   let mifiltro = "";
  //   if (filter.nombre != undefined) {
  //     filter += "nombre"
  //     this.arrSeries.filter(serie => serie.title == filter.nombre)
  //   }

  //   if (filter.precio != undefined) {
  //     filter += " precio"
  //   }

  //   if (filter.categoria != undefined) {
  //     filter += " categoria"
  //   }

  }

