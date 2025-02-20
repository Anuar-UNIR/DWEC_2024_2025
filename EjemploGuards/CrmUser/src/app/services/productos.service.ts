import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private httpClient = inject(HttpClient);
  private baseUri: string = 'https://dummyjson.com/products';

  constructor() { }

  //Opcion1: introduzca la cabecera manualmente en el metodo
  getAll(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'aplication/json',
        'Authorization': localStorage.getItem("accessToken") || ""
      })
    };

    return lastValueFrom(this.httpClient.get<any>(this.baseUri, httpOptions));
  }

  //Opcion 2: uso la función getAuthorization para introducir las cabeceras a las peticiones
  getById(id: string) {
    return lastValueFrom(this.httpClient.get<any>(this.baseUri+"/"+id, this.getAuthorization()));
  }

  getAuthorization() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'aplication/json',
        'Authorization': localStorage.getItem("accessToken") || ""
      })
    };
    return httpOptions;
  }

   //Opcion3: El interceptor mete las cabeceras
  getAll2(): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(this.baseUri));
  }

  
}
