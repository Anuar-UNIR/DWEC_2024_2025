import Persona from "./Persona.js";


export default class Cliente extends Persona{
    #cif;

    constructor(nombre, apellidos, cif) {
        super(nombre, apellidos);
        this.#cif = cif;
    }

    obtenerCIF()
    {
        return this.#cif;
    }


}