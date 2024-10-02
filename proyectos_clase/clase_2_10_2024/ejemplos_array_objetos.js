
let suma = 0;

const numeros = [33, 45, 1, 100, 2, 4];

for (let i = 0; i < numeros.length; i++)
{
    suma = suma + numeros[i];
}


const suma2 = numeros.reduce(function (acumulador, numero) {
    return acumulador + numero;
});

const suma3 = numeros.reduce((acumulador, numero) => acumulador + numero)

console.log(suma)
console.log(suma3)

const numerosJSO = {
    a: 1,
    b: 2,
    c: 3
};

for (const clave in numerosJSO) {
    console.log(`${clave}: ${numerosJSO[clave]}`);
}


const numeros3 = { a: 1, b: 2, c: 3 };

    Object.keys(numeros3).forEach(function(clave){
    console.log(`${clave}: ${numeros[clave]}`);
});