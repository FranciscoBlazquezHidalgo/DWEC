//Función que al mantener pulsado click derecho cambia a la segunda imágen
function Mantener() {

    document.getElementById("imagen").src = "../imagenes/img2.jpg";

}
//Función que al soltar click derecho cambia a la primera imágen
function Soltar() {

    document.getElementById("imagen").src = "../imagenes/img1.jpg";

}
//Función que inicia los eventos
function iniciar() {
    //Ejecución del evento al mantener pulsado click derecho sobre la imágen
    document.getElementById("imagen").onmousedown = Mantener;
    //Ejecución del evento al soltar click derecho sobre la imágen
    document.getElementById("imagen").onmouseup = Soltar;

}
//Al cargar el archivo se llama a la función iniciar
window.onload = iniciar;