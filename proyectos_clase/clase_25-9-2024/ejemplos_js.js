/* 
* Primeros ejemplos de JS - Clase 25-9-2024
*/

//Esto es un comentario de linea

console.log(typeof "Hola Mundo!")

//Declarar variables
let a = 3
console.log(typeof a)

a = "Hola DWEC"

console.log(typeof a)

// Para variable muy globales
var b = true

//Definimos una constante
const c = 23

// ERROR: no se puede modificar una constante
//c = 45

//Nomenclatura correcta
let tempMax = 0


// OJO CUIDADO con la comparacion sin tipo, usar ===
let text = "3"
console.log("Tipo de dato de text es: " + typeof text)

let num = 3
console.log("Tipo de dato de num es: " + typeof num)

console.log((num == text))

console.log((num === text))

console.log(typeof (num + text))


//Instrucciones de control

if (num > 5)
{
    console.log("Aprobado")
}

let edad = 18

if (edad >= 18) {
    console.log("mayor de edad")
} else {
    console.log("menor de edad")
}

// Operador ternario
edad >= 18 ? console.log("mayor de edad") : console.log("Menor de edad")


// Bucles for: for - for of - for in

//for
for (let i = 0; i < 10; i++)
{
    console.log(i)
}

//Definir
const arr = ["a", "b", 5];

//for in
for (indice in arr)
{
    console.log(indice); // Cada uno de los índices / posiciones del array
    console.log(arr[indice]); // Cada uno de los elementos que ocupan posiciones en el array
}

//for of
for (let element of arr) {
    console.log(element)
    
}

// FUNCIONES

function saludar(nombre) {
    console.log("Hola gente!!!!!! Soy "+nombre)
}

saludar("Anuar")
saludar("Marco")

function multiplicar(num1 = 5) {
    console.log((num1 * num1))
}

multiplicar(8)

function sumar(a, b)
{
    return a + b
}

const result = sumar(8, 5)
console.log(result)

// Interpolacion en JS
console.log(`Esto es prueba ${result}`)

// Funciones anonimas
const restar = function (a, b)
{
    return a-b
    
}

//llamada funcion anonima
const rest = restar(a, b)

//Arrow Functions
// const restaAF = (a, b) => {
//     return a - b
// }

const restaAF = (a, b) => (a - b)
    
const rAF = restaAF(5, 2)


// Arrays
const miVector = []

const colores = ["Rojo", "Verde", "Azul"]

const vectorVacio = new Array()
const vectorDara = new Array(5, 6, 89)

console.log(colores[0])

colores.push(33)
colores.shift()
colores.pop()
colores[0] = "Amarillo"
console.log(colores)