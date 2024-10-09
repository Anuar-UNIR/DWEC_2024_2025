export default class Coche{

    #bastidor;

    constructor(color, marca, modelo) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = false;
        this.velocidad = 0;
        this.#calcularBastidorPrimario();
    }


    #calcularBastidorPrimario() {
        this.#bastidor = this.marca + "123456" + this.color;
    }

    obtenerBastidor()
    {
        return this.#bastidor;
    }

    modificarBastidor(bastidorNuevo) {
        this.#bastidor = bastidorNuevo;
    }


    arrancar() {
        this.encendido = true;
    }

    detener() {
        this.encendido = false;
    }

    necesitaRevision(kilometraje) {
        return (kilometraje >= 20000) ? true : false
    }

    // Formato Arrow function
    // necesitaRevision = (kilometraje) => (kilometraje >= 20000) ? true : false;

    acelerar(velocidad) {
        this.velocidad += velocidad;
    }

    frenar(velocidad) {
        this.velocidad -= velocidad;
    }


}