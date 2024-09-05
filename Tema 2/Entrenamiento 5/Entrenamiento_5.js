
//Generamos el array 
const numeros = [];

for( let i =0; i< 100; i++)
{
    numeros.push(Math.random().toFixed(2) * 10);
}

//Ordenamos el array
numeros.sort((a,b) => a-b);

//Mostramos el array por consola
console.log(numeros);

//Calculamos el minimo
let min = numeros[0];
console.log("El minimo es: "+min);

//Calculamos el maximo
let max = numeros[numeros.length-1];
console.log("El maximo es: "+max);

//Calculamos la suma
let suma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
console.log("La suma es: "+suma);

//Calculamos la media
let media = suma / numeros.length;
console.log("La media es: "+media);

//Calculamos la mediana
let mediana = calcularMediana(numeros);
console.log("La mediana es: "+mediana);

let valorRepetido = calcularMasRepetido(numeros);
console.log("El valor más repetido es: "+valorRepetido);


// Calcular la mediana
function calcularMediana(numeros) {
    numeros.sort((a, b) => a - b); //ordenamos el array
    let mitad = Math.floor(numeros.length / 2); // buscamos la zona de en medio

    // Si la longitud del array es par, la mediana sera la media de las dos posiciones centrales
    if (numeros.length % 2 === 0) {
        return (numeros[mitad - 1] + numeros[mitad]) / 2;
    } else {
        //Si es impar el valor central
        return numeros[mitad];
    }
}


// Encontrar el valor más repetido
function calcularMasRepetido(numeros) {
    let frecuencias = {};
    let maxFrecuencia = 0;
    let valorMasRepetido = null;

    numeros.forEach((valor) => {
        frecuencias[valor] = (frecuencias[valor] || 0) + 1;
        if (frecuencias[valor] > maxFrecuencia) {
            maxFrecuencia = frecuencias[valor];
            valorMasRepetido = valor;
        }
    });

    return valorMasRepetido;
}