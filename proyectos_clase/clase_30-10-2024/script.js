//TypeScript tipado fuerte
// Inferencia de tipo
var num = 23;
var num2;
var IsActive = true;
var nombre = "Anuar";
var cajon;
cajon = 23;
cajon = "hola";
//Multiple tipos a la vez ( bajo vuestra responsabilidad)
var codigo;
codigo = "cod-123";
codigo = 234;
codigo = true;
var nombreCompleto = 'soy un nombre';
nombreCompleto = "Sigo siendo un nombre";
nombreCompleto = "Mi nombre es ".concat(nombre);
//Arrays y tipado
var list = [1, 2, 3, 5];
list.push(8);
var list2 = [6, 5, 9, 23, 45];
var list3 = [2, 4, "rr", 66, "casa", 79, true];
//Emun
var Size;
(function (Size) {
    Size[Size["Small"] = 3] = "Small";
    Size[Size["Medium"] = 6] = "Medium";
    Size[Size["Big"] = 9] = "Big";
})(Size || (Size = {}));
var talla = Size.Medium;
// BBDD --> Estados 0 Pendiente, 1 Proceso, 2 Enviado, 3 Terminado, 4 Devuelto, 5 indefinido
var Estado;
(function (Estado) {
    Estado[Estado["Pendiente"] = 0] = "Pendiente";
    Estado[Estado["Procesando"] = 1] = "Procesando";
    Estado[Estado["Enviado"] = 2] = "Enviado";
    Estado[Estado["Terminado"] = 3] = "Terminado";
    Estado[Estado["Devuelto"] = 4] = "Devuelto";
    Estado[Estado["Indefinido"] = 5] = "Indefinido";
})(Estado || (Estado = {}));
var miEstado = Estado.Enviado;
var estados = ["Pendiente", "Procesando", "Enviado", "Terminado"];
estados[miEstado];
//TUPLA
var miTupla;
miTupla = ["user", "password", 5, true];
//Funciones
function saludar(mensaje) {
    console.log(mensaje.toUpperCase);
}
saludar("Holaaaaaa");
function pasarAMayusculas(mensaje) {
    return mensaje;
}
function sumar(a, b) {
    return a + b;
}
var sumarA = function (a, b) {
    return a + b;
};
var sumarArr = function (a, b) {
    return a + b;
};
//Casting
//En java --> double v = 33.3; -- > int victorias = (int)v;
var valor = "Esto es un texto";
var longitud = valor.length;
var long2 = valor.length;
document.addEventListener('DOMContentLoaded', function (even) {
    var seccion = document.getElementById("principal");
    if (seccion != null) {
    }
});
