//Función que cambia el color del documento a amarillo al pulsar click derecho
function Amarillo() {

    document.body.style.backgroundColor = "Yellow";

}
//Función que cambia el color del documento a blanco al mover el cursor
function Blanco() {

    document.body.style.backgroundColor = "White";

}
//Función que cambia el color del documento a azul al pulsar una tecla
function Azul() {

    document.body.style.backgroundColor = "Blue";

}
//Función que inicia los eventos
function iniciar() {
    //Ejecución del evento al pulsar click derecho
    document.onclick = Amarillo;
    //Ejecución del evento al mover el cursor
    document.onmousemove = Blanco;
    //Ejecución del evento al pulsar una tecla
    document.onkeydown = Azul;

}
//Al cargar el archivo se llama a la función iniciar
window.onload = iniciar;