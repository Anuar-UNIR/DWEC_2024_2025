//Generamos una hora (podriamos generar una hora aleatoria)
let hora = 23;
let minutos = 59;
let segundos = 59;

if(hora >= 0 && hora <= 23 && minutos >=0 && minutos<=59 && segundos >= 0 && segundos <= 59)
{

    console.log("La hora actual es: "+hora+":"+minutos+":"+segundos);

    //Sumamos 1 al valor de los segundos

    segundos = segundos + 1;

    //Comprobamos si al sumar los segundos hemos aumentado los minutos
    if(segundos === 60)
    {
        minutos = minutos + 1;
        segundos = 0;

        //Comprobamos si al aumnentar los minutos deben de aumentar las horas
        if(minutos === 60)
        {
            hora = hora + 1;
            minutos = 0;
            if(hora === 24)
            {
                hora = 0;
            }
        }
    }

    //Mostramos la hora modificada
    console.log("La hora modificada es: "+hora+":"+minutos+":"+segundos);
}
else{
    //Mostramos mensaje de que el formato de la hora no es correcto.
    console.log("La hora no es correcta");
}