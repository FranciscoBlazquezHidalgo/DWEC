//Función que calcula el número de repeticiones de la palabra en el texto
let buscarPalabra = (texto, palabra) => {
    //Variables contadores
    var repeticiones = 0, palabraTexto = 0;
    //Recorrido del texto
    for (i = 0; i < texto.length; i++) {
        //Si el carácter de la posición del texto es igual a la primera letra de la palabra
        if (texto[i] == palabra[0]) {
            //Recorrido de la palabra
            for (z = i; z < i + palabra.length; z++) {
                //Si el carácter de la posición del texto es igual a la de la palabra, aumenta su contador
                if (texto[z] == palabra[z - i]) {

                    palabraTexto++;

                }
                //Si el contador de carácteres de palabra es igual al tamaño de la palabra, aumenta las repeticiones
                if (palabraTexto == palabra.length) {

                    repeticiones++;

                }

            }
            //Establece el contador de carácteres de palabra a 0 para volver a comprobar si se repite
            palabraTexto = 0;

        }

    }
    //Devuelve el número de repeticiones de la palabra
    return repeticiones;

};
//Introducción del texto y la palabra a buscar
let texto = (prompt("Introduce la cadena")).toString();
let palabra = (prompt("Introduce la palabra a buscar")).toString();
//Resultado del número de repeticiones de la palabra
alert("La palabra se repite: " + buscarPalabra(texto, palabra)+" veces");