import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';
import { Serie } from '../interfaces/serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  httpClient = inject(HttpClient);
  private baseUrl : string = 'https://peticiones.online/api/series';

  constructor() { }

  getAllWithObservables(): Observable<Serie[]> {
    return this.httpClient.get<Serie[]>(this.baseUrl);
  }

  getAllWithPromises(): Promise<Serie[]> {
    return lastValueFrom(this.httpClient.get<Serie[]>(this.baseUrl));
  }

  getById(_id: string): Promise<Serie> {
    return lastValueFrom(this.httpClient.get<Serie>(`${this.baseUrl}/${_id}`))
  }

  getByIdWithObservable(_id: string): Observable<Serie> {
    return this.httpClient.get<Serie>(`${this.baseUrl}/${_id}`);
  }

  insertObservable(serie: Serie): Observable<Serie>{
    return this.httpClient.post<Serie>(this.baseUrl, serie)
  }


  insert(serie: Serie): Promise<Serie>{
    return lastValueFrom(this.httpClient.post<Serie>(this.baseUrl, serie));
  }

  update(serie: Serie): Promise<Serie> {
    return lastValueFrom(this.httpClient.put<Serie>(this.baseUrl + "/" +serie._id, serie));
  }

  delete(_id: string): Promise<Serie> {
    return lastValueFrom(this.httpClient.delete<Serie>(`${this.baseUrl}/${_id}`));
  }


}
