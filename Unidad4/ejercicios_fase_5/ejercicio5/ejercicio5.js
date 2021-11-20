//Función que muestra la dirección de la imágen 1 al mantener el cursor dentro
function Url1() {

    alert(document.getElementById("imagen1").src);

}
//Función que muestra la dirección de la imágen 2 al mantener el cursor dentro
function Url2() {

    alert(document.getElementById("imagen2").src);

}
//Función que inicia los eventos
function iniciar() {
    //Ejecución del evento al mantener el cursor dentro de la imágen 1
    document.getElementById("imagen1").onmouseover = Url1;
    //Ejecución del evento al mantener el cursor dentro de la imágen 2
    document.getElementById("imagen2").onmouseover = Url2;

}
//Al cargar el archivo se llama a la función iniciar
window.onload = iniciar;