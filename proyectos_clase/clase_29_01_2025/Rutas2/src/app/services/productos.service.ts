import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { PRODUCTOS } from '../db/productos.db';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private arrProductos: Producto[];

  constructor() {
    this.arrProductos = PRODUCTOS;
  }


  getAll(): Producto[]
  {
    return this.arrProductos;
  }

  getByUrl(miUrl: string) : Producto | undefined {
    return this.arrProductos.find(pro => pro.url == miUrl);
  }
}
