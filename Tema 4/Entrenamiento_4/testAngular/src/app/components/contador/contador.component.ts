import { Component, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  
  numero: number;
  color: string;

  constructor() {
    console.log("Hola desde el contructor");
    this.numero = 13;
    this.color = "azul";
  }


  ngOnInit() {
    console.log("Hola desde el principio del ngOnInit()");
    setTimeout(() => {
      this.numero = 23;
      this.color = "rojo"
      console.log("Se han realizado cambios despues de ejecutar el constructor: " + Date());

      console.log("Llamamos al destroy del component");
      this.ngOnDestroy();
    }, 7000);
  }


  ngAfterViewInit() : void {
    console.log("Hola desde ngAfterViewInit");

  }

  ngOnDestroy() {
    console.log("Hola desde ngDestroy");
  }
  
  }

