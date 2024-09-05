//Definimos una variable para la nota
let nota = 13;
let calificacion = "Nota no valida";

//Definimos el bloque if-else contemplando las opciones que la nota sea positiva y entre 0 y 10
if(nota >= 0 && nota < 3)
{
    calificacion = "Muy deficiente";

}else if( nota >= 3 && nota < 5)
{
    calificacion = "Bien";
}else if( nota >= 5 && nota < 7)
{
    calificacion = "Insuficiente";
}else if( nota >= 7 && nota < 9)
{
    calificacion = "Notable";
}else if( nota >= 9 && nota <= 10)
{
        calificacion = "Sobresaliente";
}

console.log("La calificación correspondiente a la nota "+nota+" es: "+calificacion);