import { Animal } from "./Animal";

export class Perro extends Animal{
    private _nombre: string;

    constructor(edad: number = 1, nombre: string = "") {
        super(edad);
        this._nombre = nombre;
    }


    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }


    public toString(): string{
        return `Perro[edad: ${super.edad}, nombre: '${this._nombre}']`;
    }
}