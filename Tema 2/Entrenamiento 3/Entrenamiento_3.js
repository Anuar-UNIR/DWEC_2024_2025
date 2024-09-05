//Mostramos las instrucciones del juego
let instrucciones = "Vamos a jugar dos jugadores a Piedra (P), Papel(L) y Tijera(T): \n - Piedra gana a tijera \n - Papel gana a piedra \n - Tijera corta papel \n - Simbolos iguales empatan \n";
console.log(instrucciones)

//Generamos la jugada del ordenador
let opciones = ["P", "L", "T"];
let jugada = Math.round(Math.random() * 2.49); //Escogemos 2.49 para que nunca pueda redondear a 3

let jugadaMaquina = opciones[jugada];

let jugador = "P";

if(jugador == jugadaMaquina)
{
    console.log("Jugador = "+jugador +" || Maquina = "+jugadaMaquina + " EMPATE");

}else{
    if (jugador == "P" && jugadaMaquina == "T")
    {
        console.log("Jugador = "+jugador +" || Maquina = "+jugadaMaquina + " Gana Jugador");
    }
    if (jugador == "P" && jugadaMaquina == "L")
    {
        console.log("Jugador = "+jugador +" || Maquina = "+jugadaMaquina + " Gana computadora");
    }

    if (jugador == "T" && jugadaMaquina == "L")
    {
        console.log("Jugador = "+jugador +" || Maquina = "+jugadaMaquina + " Gana Jugador");
    }

    if (jugador == "T" && jugadaMaquina == "P")
    {
            console.log("Jugador = "+jugador +" || Maquina = "+jugadaMaquina + " Gana computadora");
    }

    if (jugador == "L" && jugadaMaquina == "P")
    {
        console.log("Jugador = "+jugador +" || Maquina = "+jugadaMaquina + " Gana Jugador");
    }
    
    if (jugador == "L" && jugadaMaquina == "T")
    {
        console.log("Jugador = "+jugador +" || Maquina = "+jugadaMaquina + " Gana computadora");
    }

}

