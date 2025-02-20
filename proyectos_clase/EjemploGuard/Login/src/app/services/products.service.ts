import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private httpClient = inject(HttpClient);
  private baseUrl: string = 'https://dummyjson.com/products';

  constructor() { }

  //Opcion 1: Introducir manualmente la cabecera
  getAll(): Promise<any> {
    const httOptions = {
      headers: new HttpHeaders({
        'Content-type': 'aplication/json',
        'Authorization': localStorage.getItem("accessToken") || ""
      })
    };
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl, httOptions));
  }

  //Opcion 2: Generar funcion para modficar el headers
  getById(id: string): Promise<any> {

    return lastValueFrom(this.httpClient.get<any>(this.baseUrl+"/"+id, this.getAuthoritation() ));
  }

  getAuthoritation() {
      const httOptions = {
        headers: new HttpHeaders({
          'Content-type': 'aplication/json',
          'Authorization': localStorage.getItem("accessToken") || ""
        })
    };
    return httOptions;
  }

}
