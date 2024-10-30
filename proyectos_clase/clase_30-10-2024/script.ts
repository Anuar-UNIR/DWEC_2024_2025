
//TypeScript tipado fuerte
// Inferencia de tipo

let num: number = 23;
let num2: number;
let IsActive: boolean = true;
let nombre: string = "Anuar";

let cajon: any;

cajon = 23;

cajon = "hola";

//Multiple tipos a la vez ( bajo vuestra responsabilidad)
let codigo: string | number | boolean;

codigo = "cod-123";
codigo = 234;
codigo = true;

let nombreCompleto: string = 'soy un nombre';
nombreCompleto = "Sigo siendo un nombre";
nombreCompleto = `Mi nombre es ${nombre}`;

//Arrays y tipado
const list: number[] = [1, 2, 3, 5];
list.push(8);

let list2: Array<number> = [6, 5, 9, 23, 45];
const list3: Array<any> = [2, 4, "rr", 66, "casa", 79, true];

//Emun
enum Size { Small = 3, Medium = 6, Big = 9 }
let talla: Size = Size.Medium;

// BBDD --> Estados 0 Pendiente, 1 Proceso, 2 Enviado, 3 Terminado, 4 Devuelto, 5 indefinido
enum Estado { Pendiente, Procesando, Enviado, Terminado, Devuelto, Indefinido }
let miEstado: Estado = Estado.Enviado;
let estados: Array<string> = ["Pendiente", "Procesando", "Enviado", "Terminado"];
estados[miEstado];

//TUPLA
let miTupla: [string, string, number, boolean];
miTupla = ["user", "password", 5, true];

//Funciones


function saludar(mensaje: string) : void {
    console.log(mensaje.toUpperCase);
}

saludar("Holaaaaaa");

function pasarAMayusculas(mensaje: string) : string {
    return mensaje;
    
}

function sumar(a: number, b: number) {
    return a + b;
}

const sumarA = function (a: number, b: number) : number {
    return a + b;
}

const sumarArr = (a: number, b: number): number => {
    return a + b;
}

//Casting
//En java --> double v = 33.3; -- > int victorias = (int)v;
let valor: any = "Esto es un texto";
let longitud: number = (<string>valor).length;
let long2: number = (valor as string).length;








document.addEventListener('DOMContentLoaded', function (even) {
    
    const seccion = document.getElementById("principal");
    if (seccion != null) {
        let numero = 33;
        const parr: HTMLParagraphElement = document.createElement('p');
        parr.textContent = numero.toString();

        seccion.append(parr);
        
    }
});