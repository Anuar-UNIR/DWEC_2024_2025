//Generamos el array 
const numeros = [];

for( let i =0; i< 100; i++)
{
    numeros.push(Math.random().toFixed(2)); //utilizamos el toFixed para que solo tenga dos decimales y sea mas facil encontrar valores iguales
}


//Mostramos el array por consola
console.log(numeros);

//Definimos el valor que queremos contar sus repeticiones
let valor = 0.98;

//Llamamos a la funcion y mostramos las ocurrencias
let numRepetidos = recuento(numeros, valor);

console.log("El valor "+valor +" se ha repedito "+numRepetidos+" veces en el array");



//Definimos la funcion, le pasamos un array y un valor
function recuento(numeros, valor) {

    //Recorremos el array y lo comparamos
    let contador = 0;
    for( let i = 0; i < numeros.length; i++)
    {
        if( numeros[i] == valor){
            contador ++;
        }
    }

    return contador;
}