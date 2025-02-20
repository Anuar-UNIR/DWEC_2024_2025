import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  arrProductos: any[];
  private productsServices = inject(ProductsService);

  constructor() {
    this.arrProductos = [];
  }

  async ngOnInit(): Promise<void> {

    this.arrProductos = await this.productsServices.getAll(); //luego getAll2();
    console.log(this.arrProductos);
    
  }

}
