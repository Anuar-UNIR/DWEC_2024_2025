export default class Persona{

    #nombre;
    #apellidos;

    constructor(nombre, apellidos) {
        this.#nombre = nombre;
        this.#apellidos = apellidos;
    }

    get nombreCompleto() {
        return this.#nombre + ' ' + this.#apellidos;
    }

    set nombreCompleto(input) {
        const arrayInput = input.split(' '); // Devuelve un array con cada elemento que esté separado por el carácter ' ' (espacio)
        this.#nombre = arrayInput[0];
        this.#apellidos = arrayInput[1];
    }
}