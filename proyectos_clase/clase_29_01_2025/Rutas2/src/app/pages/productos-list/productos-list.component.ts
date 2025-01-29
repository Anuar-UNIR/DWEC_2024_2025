import { Component, inject } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ProductosService } from '../../services/productos.service';
import { ProductCardComponent } from "../../components/product-card/product-card.component";

@Component({
  selector: 'app-productos-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './productos-list.component.html',
  styleUrl: './productos-list.component.css'
})
export class ProductosListComponent {
  
  misProducto: Producto[];

  productoService = inject(ProductosService);

  constructor() {
    this.misProducto = [];
  }

  ngOnInit(): void{
    this.misProducto = this.productoService.getAll();
  }

}
