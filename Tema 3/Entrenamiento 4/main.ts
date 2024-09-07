//Generamos clas clase main e importamos la clase Animal
//Generalmente VS Code si instanciamos un objeto de una clase con el modificador export nos suguiere directamente la importacion

import { Animal } from "./Animal";
import { Perro } from "./Perro";

//Instanciamos la clase Animal y guardamos su referencia en una const
const a1 = new Animal(1);

//Como hemos definido en set que lance una excepcion encapsulamos la modificacion en un try-catch
try{
    //Al intentar poner un valor negativo salta la excepcion
    a1.edad = -23;
}catch(error:any)
{
    console.error(error.message);
}

//Modificamos el valor de edad a un valor correcto
a1.edad = 7;

//Mostramos la informacion del objeto
console.log(a1.toString());

//Creamos una nueva instancia con un contructor vacio, pero como lo pusimos con valor por defecto nos asigna valor a edad.
const a2 = new Animal();
console.log(a2.toString());


//Creamos una nueva instancia de la clase Perro
const auri = new Perro(9,"Au");

//Modificamos el valor del nombre
auri.nombre = "Auri";
console.log(auri.toString());