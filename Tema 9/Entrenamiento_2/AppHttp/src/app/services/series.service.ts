import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { lastValueFrom, Observable } from 'rxjs';
import { ISeries } from '../interfaces/iSeries.interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  httpClient = inject(HttpClient);
  private baseUrl = 'https://peticiones.online/api/series';

  constructor() { }

  //Observables - son la forma nativa con la que Angular hace peticiones externas. Se mantiene atento a los cambios que puedan sufrir los cambios
  getAllWithObservables(): Observable<ISeries[]>{
    return this.httpClient.get<ISeries[]>(this.baseUrl);
  }

  //promises
  getAllWithPromises(): Promise<ISeries[]> {
    return lastValueFrom(this.httpClient.get<ISeries[]>(this.baseUrl));
  }
}
