
//EJERCICIO 1

window.onload = function () {
    // Numero de enlaces de la pagina
    alert(enlaces());
    // Direccion del penultimo enlace
    alert(penultimo());
    // Numero de enlaces que apuntan a http://prueba
    alert(nEnlaces());
    // Numero de enlaces del tercer párrafo
    alert(tercerParrafo());
}
//Función flecha que devuelve el número de enlaces de la página
let enlaces = () => {

    return "Número de enlaces de la página: " + document.getElementById("ejercicio1").getElementsByTagName("a").length;

}
//Función flecha que devuelve la dirección del penúltimo enlace de la página
let penultimo = () => {

    return "Dirección del penúltimo enlace: " + document.getElementById("ejercicio1").getElementsByTagName("a")[(document.getElementById("ejercicio1").getElementsByTagName("a").length) - 2].href;

}
//Función flecha que devuelve el número de enlaces hacia https://prueba/ de la página
let nEnlaces = () => {
    //Enlace a buscar
    var enlace = "http://prueba/";
    //Contador de número de enlaces inicializado a 0
    let numeros = 0;
    //Recorrido del array de todos los elementos de etiquetas de enlace
    for (let i = 0; i < document.getElementById("ejercicio1").getElementsByTagName("a").length; i++) {
        //Si la dirección es igual al enlace, aumenta el contador
        if (document.getElementById("ejercicio1").getElementsByTagName("a")[i].href == enlace) {

            numeros++;

        }

    }

    return "Número de enlaces hacia " + enlace + " : " + numeros;

}
//Función flecha que devuelve el número de enlaces del tercer párrafo de la página
let tercerParrafo = () => {

    return "Número de enlaces en el tercer párrafo: " + document.getElementById("ejercicio1").getElementsByTagName("p")[2].getElementsByTagName("a").length;

}

//EJERCICIO 2

function muestra() {
    //Cambio de la clase de la etiqueta spam a visible para mostrar el resto del contenido
    document.getElementById("adicional").className = "visible";
    //Cambio de la clase de la etiqueta a por oculto para ocultar el enlace
    document.getElementById("enlace").className = "oculto";

}

//EJERCICIO 3

//Variable que indica la posición del array de etiquetas li
let posicion = 0;
//Función que añade un nuevo elemento al ul
function anade() {
    //Variable de la lista lu
    var ul = document.getElementById("lista");
    //Variable que crea un nuevo elemento para la lista
    var li = document.createElement("li");
    //Se añade un valor al nuevo elemento para la lista obtenido del contenido de un elemento li
    //según una determinada posición que aumenta al pulsar el botón
    li.appendChild(document.createTextNode(document.getElementsByTagName("li")[posicion].innerHTML));
    //Aumenta el contador posición
    posicion++;
    //Se añade el nuevo elemento al ul
    ul.appendChild(li);

}