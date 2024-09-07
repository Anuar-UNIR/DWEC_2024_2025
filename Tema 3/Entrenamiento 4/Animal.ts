
//Definimos con export la clase para poder luego importarla
export class Animal{

    //Creamos el atributo como privado(En typeScript suele ser muy comun que los atributos privados empiecen por _)
    private _edad: number;

    //Generamos el constructor, con un solo parametro y le asignamos un valor por defecto de 0 a la edad
    constructor(edad: number = 1) {
        this._edad = edad;
    }

    //Generamos la propiedad get y set para _edad
    public get edad(): number{
        return this._edad;
    }

    //Añadimos una validacion en el set para que en caso de ser un valor negativo lance una excepcion
    public set edad(edad: number) {
        if (edad < 0){
            throw new Error('La edad es incorrecta :'+edad);
        }
        this._edad = edad;
    }

    //Generamos el metodo toString que nos devuelve un String con la informacion del objeto
    public toString(): string{
        return `Animal[edad: ${this._edad}]`;
    }
}