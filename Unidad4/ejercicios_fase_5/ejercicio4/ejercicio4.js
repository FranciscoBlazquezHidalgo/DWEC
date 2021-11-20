//Función que muestra un aviso al pulsar click izquierdo
function clickIzquierdo() {

    alert("Click izquierdo");

}
//Función que muestra un aviso al pulsar click derecho
function clickDerecho() {

    alert("Click derecho");

}
//Función que inicia los eventos
function iniciar() {
    //Ejecución del evento al pulsar click izquierdo
    document.onclick = clickIzquierdo;
    //Ejecución del evento al pulsar click derecho
    document.oncontextmenu = clickDerecho;

}
//Al cargar el archivo se llama a la función iniciar
window.onload = iniciar;