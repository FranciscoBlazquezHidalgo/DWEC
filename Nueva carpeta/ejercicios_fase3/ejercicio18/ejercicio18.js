//Función que cuenta el número de veces que aparece una palabra
let contarCadena = (texto, palabra) => {
    //Variables de contador
    let contador = 0, i = 0;
    //Bucle continuo para sacar el número de apariciones
    while (true) {
        //Variable que recoge la distancia desde que empieza la palabra hasta el fin del texto
        const resultado = texto.indexOf(palabra, i);
        //Si el resultado no es menor que su propio tamaño, aumenta el tamaño del resultado para buscar
        if (resultado !== -1){
            
            [contador, i] = [contador + 1, resultado + 1];
            //Si ya se pasa del tamaño del texto, devuelve el número de vences que aparece
        }else{ 
            //Devuelve el número de veces que aparece la palabra
            return contador;

        }

    }

};
//Introducción de la cadena principal y la palabra a buscar
let texto = (prompt("Introduce la cadena principal")).toString();
let palabra = (prompt("Introduce la palabra")).toString();
//Resultado del número de veces que la palabra aparece
alert("Número de palabras: " + contarCadena(texto, palabra));