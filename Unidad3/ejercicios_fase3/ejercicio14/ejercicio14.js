//Función que introduce una cadena dentro de otra en una posición dada
let insertarCadena = (cadena1, cadena2, posicion) => {
    //Comprueba que la posición tiene y sea un valor numérico
    if (typeof (posicion) == "undefined" || isNaN(posicion)) {
        //Si se da la condición, el valor por defecto es 1
        posicion = 1;

    }
    //Si la cadena está vacía
    if (typeof (cadena2) == "undefined") {
        //La cadena se le asigna un valo nulo
        cadena2 = '';

    }
    //Devuelve la cadena principal con  la cadena introducida en la posición dada
    return cadena1.slice(0, posicion) + cadena2 + cadena1.slice(posicion);

};
//Introducción de la cadena principal, la que hay que introducir y la posición a introducir
let cadena1 = (prompt("Introduce la cadena principal")).toString();
let cadena2 = (prompt("Introduce la cadena secundaria")).toString();
let posicion = parseInt(prompt("Introduce la posicion"));
//Resultado de la cadena principal con la cadena introducida dentro 
alert("Cadena modificada: " + insertarCadena(cadena1, cadena2, posicion));