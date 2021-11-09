//Función que devuelve una cadena hasta el tamaño indicado
let extraerCaracteres = (cadena, tamano) => {

    if (tamano > 0) {
        //Corta la cadena hasta el tamaño indicado
        return cadena.slice(0, tamano);

    }

};
//Introducción de la cadena y el tamaño
let cadena = (prompt("Introduce la cadena de texto")).toString();
let tamano = parseInt(prompt("Introduce el tamaño de la cadena"));
//Resultado de cortar la cadena hasta el tamaño indicado
alert("Cadena: " + extraerCaracteres(cadena, tamano));