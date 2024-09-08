//Definimos una interface con tres propiedades, marcamos oferta como opcional no es necesario rellenarla al construir el objeto
export interface Iproducto{
    nombre:string,
    precio:number,
    oferta?:boolean
}