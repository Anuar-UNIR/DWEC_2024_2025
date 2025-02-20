import { Component, inject } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-porducts-list',
  standalone: true,
  imports: [],
  templateUrl: './porducts-list.component.html',
  styleUrl: './porducts-list.component.css'
})
export class PorductsListComponent {

  arrProductos: IProduct[];
  private productsServices = inject(ProductosService);

  constructor() {
    this.arrProductos = [];
  }

  async ngOnInit(): Promise<void> {

    this.arrProductos = await this.productsServices.getAll(); //luego getAll2();
    console.log(this.arrProductos);
    
  }


}
