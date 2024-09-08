import { Iproducto } from "./Iproducto";

//Generamos la interface Iproducto que extiende de la de Iproducto, porque lo que nos importara implicitamente sus propiedades
export interface Igame extends Iproducto{
    plataforma:string,
    generaro:string,
    isan:string
}