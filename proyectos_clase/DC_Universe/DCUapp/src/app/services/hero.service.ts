import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHero } from '../interfaces/ihero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  httpClient = inject(HttpClient);
  private baseUrl: string = 'http://localhost:8080/api';

  constructor() { }

  getTotalSizeCharacters(): Observable<number> {
    return this.httpClient.get<number>(this.baseUrl + "/characters/total");
  }

  //Page empieza en 0
  getAllHeroes(page: number, itemPerPage: number): Observable<IHero[]> {
    return this.httpClient.get<IHero[]>(this.baseUrl + "/characters?page=" + page + "&size=" + itemPerPage);
  }

}
