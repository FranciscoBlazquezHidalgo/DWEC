//Función que parsea a mayúscula la primera letra de una palabra
let parsearMayus = (cadena) => {
    //Devuelve la cadena con cada palabra con la letra en mayúscula
    return cadena
        .toLowerCase()
        .split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');

};
//Introducción de la cadena
let cadena = (prompt("Introduce la cadena")).toString();
//Resultado de la cadena modificada a mayúscula
alert("Cadena modificada: " + parsearMayus(cadena));