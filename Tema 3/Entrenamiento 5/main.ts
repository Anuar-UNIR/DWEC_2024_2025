import { Igame } from './Igame';
import { Iproducto } from './Iproducto';

//Creamos un objeto que implementa la interface Iproducto
const prod01: Iproducto = {
    nombre: "Cascos BT",
    precio: 125,
    oferta:false
}

//Creamos un objeto que implementa la interface Igame
const game01: Igame = {
    nombre: "Zelda BTW",
    precio: 49.90,
    plataforma: "Nintendo",
    generaro: "Aventura - RPG",
    isan: "037208000001"
}

//Definimos un array de tipo Iproducto, de tal forma que puede almacenar objetos de Iproducto y Igame, ya que esta extiende de la otra interface
let inventario: Array<Iproducto> = [];

//Los añadimos en el array
inventario.push(prod01);
inventario.push(game01);


//Mediante la funcion foreach del array llamamos para cada elemento a la funcion imprimirInfoProducto(producto)
inventario.forEach((producto) => {imprimirInfoProducto(producto)});

//Debemos de ver por consola como muestra correctamente cuando es un Iproducto y cuando es un Igame


/**
 * Funcion que pinta la informacion de un producto dependiendo si implementa solo la Interface Producto o tambien la Interface Game
 * @param producto 
 */
function imprimirInfoProducto(producto: Iproducto){

    //realizamos una conversion de producto a Game y vemos si existe una de las propiedades de Game, en ese caso sera un Game y podemos pintar su informacion
    if((producto as Igame).plataforma){
        let game: Igame = producto as Igame;
        console.log("Es un videojuego --> Nombre: "+game.nombre + " Precio: "+game.precio + " Plataforma: "+game.plataforma);
    }else{
        //En caso contrario sera un producto y pintamos solo sus propiedades
        console.log("Es un producto --> Nombre: "+producto.nombre + " Precio: "+producto.precio);
    }
}