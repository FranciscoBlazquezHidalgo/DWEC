
//Ejercicio 4
function ejercicio4() {
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

}

//Ejercicio 6
function ejercicio6() {
    //Función que encripta el correo
    let encriptarCorreo = (email) => {
        //Variables de las distintas partes de la cadena
        var encriptado, mitad, parte1, parte2;
        //Corta la cadena donde está el @
        mitad = email.split("@");
        //La primera parte llega hasta @
        parte1 = mitad[0];
        //Encripta la mitad de la primera parte según su tamaño
        encriptado = parte1.length / 2;
        //La primera parte es la primera parte menos la parte encriptada
        parte1 = parte1.substring(0, (parte1.length - encriptado));
        //La segunda parte es los siguiente del @
        parte2 = mitad[1];
        //Devuelve el correo encriptado
        return parte1 + "...@" + parte2;

    };
    //Introducción del correo
    let email = (prompt("Introduce el correo")).toString();
    //Resultado del correo encriptado
    alert("Correo encriptado: " + encriptarCorreo(email));

}

//Ejercicio 9
function ejercicio9() {
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

}

//Ejercicio 14
function ejercicio14() {
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

}

//Ejercicio 18
function ejercicio18() {
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

}

//Ejercicio 29
function ejercicio29() {
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

}