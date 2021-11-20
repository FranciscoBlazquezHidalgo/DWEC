
//Función que muestra la tecla pulsada
function mantener(e) {
    //Variable que almacena el resultado a mostrar
    let tecla;
    //Si al presionar una tecla no es Alt pero la otra sí, realiza la combinación de ambas
    if (e.altKey && e.key!=="Alt") {

        tecla = "Alt" + e.key;
        //Si al presionar una tecla no es Control pero la otra sí, realiza la combinación de ambas
    } else if (e.ctrlKey && e.key!=="Control") {

        tecla = "Control" + e.key;
        //Si al presionar una tecla no es Shift pero la otra sí, realiza la combinación de ambas
    } else if (e.shiftKey && e.key!=="Shift") {

        tecla = "Shift" + e.key;
        //Al presionar una tecla, se carga la tecla en el resultado
    } else {

        tecla = e.key;

    }
    //Muestra del resultado
    console.log(tecla);

}
//Función que inicia los eventos
function iniciar() {
    //Ejecución del evento al pulsar una tecla
    document.onkeydown = mantener;

}
//Al cargar el archivo se llama a la función iniciar
window.onload = iniciar;