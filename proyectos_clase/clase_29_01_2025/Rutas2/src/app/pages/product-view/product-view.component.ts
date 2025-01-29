import { Component, inject } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {

  miProducto!: Producto;

  productosService = inject(ProductosService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void{
    this.activatedRoute.params.subscribe((params: any) => {
      let miUrl: string = params.url as string;
      let response = this.productosService.getByUrl(miUrl);

      if (response != undefined) {
        this.miProducto = response;
      }
      else {
        //Dar una respuesta o navegar a otra page
        this.router.navigate(['/inicio']);
      }

    });
  }
}
