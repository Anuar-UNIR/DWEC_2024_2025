import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { lastValueFrom, Observable } from 'rxjs';
import { ISerie } from '../interfaces/iserie.interface';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  httpClient = inject(HttpClient);
  private baseUrl = 'https://peticiones.online/api/series';

  constructor() { }

  //Observables - son la forma nativa con la que Angular hace peticiones externas. Se mantiene atento a los cambios que puedan sufrir los cambios
  getAllWithObservables(): Observable<ISerie[]>{
    return this.httpClient.get<ISerie[]>(this.baseUrl);
  }

  //promises
  getAllWithPromises(): Promise<ISerie[]> {
    return lastValueFrom(this.httpClient.get<ISerie[]>(this.baseUrl));
  }

  //promises
  getById(id: string): Promise<ISerie>{
    return lastValueFrom(this.httpClient.get<ISerie>(`${this.baseUrl}/${id}`));
  }
}
