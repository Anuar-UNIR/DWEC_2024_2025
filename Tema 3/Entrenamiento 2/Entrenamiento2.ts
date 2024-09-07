
/**
 * Función que dado los numeros de un DNI nos devuelve el DNI con su letra
 * @param num 
 * @returns DNI con letra
 */
//Definimos la funcion con el parametro tipado y su tipo de retorno (String)
const generateLetterDNI = (num:string) : string => {
    //Generamos la lista de letras como un array
    const letters: string[] = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
                'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    
    //El algoritmo consite en hacer la division entera del numero y 23, quedandonos con el resto
    const index: number = parseInt(num) % 23;
    let result:string = num;

    //Escogemos la letra con el indice del array
    return result + letters[index];
}

//Mostramos por pantalla el DNI completo (Probar con el vuestro)
console.log(generateLetterDNI("21531672"));
