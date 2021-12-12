window.onload = iniciar;
//Array de las palabras disponibles
var arrayPalabras = ["JUSTICIA", "GENERO", "VIDA", "ELECCION"];
//Intendos disponibles
let intentos = 3;

var palabra;
//Función que contiene el evento
function iniciar() {
    //Creación de los campos
    crearcampos();
    //Evento del botón
    document.getElementById("btnEnviar").onclick = comprobar;

}
//Función que crea un campo por cada letra de la palabra escogida
function crearcampos() {

    aleatorio();

    let fila = document.getElementById("fila");

    for (let i = 0; i < palabra.length; i++) {

        var campo = document.createElement("input");
        campo.type = "text";
        campo.maxLength = 1;
        campo.style = "width: 0.5cm; height: 0.5cm;";
        campo.id = "input";
        fila.appendChild(campo);

    }

}
//Función que carga la palabra a adivinar con una palabra aleatoria
function aleatorio(){

    let aleatorio = Math.floor(Math.random() * arrayPalabras.length) + 1;

    posicionArray=aleatorio;

    palabra = arrayPalabras[aleatorio];

}
//Función que comprueba la palabra y los intentos
function comprobar() {

    let contadorAciertos = 0;

    let contadorIntentos = 0;

    var inputs = document.getElementsByTagName("input");

    for (let i = 0; i < palabra.length; i++) {

        var texto=inputs[i].value;

        if (texto.toUpperCase() == palabra.charAt(i)) {


            contadorAciertos++;
            contadorIntentos++;

        } else {

            contadorIntentos++;

        }

    }

    if(intentos<=1){

        alert("HOY NO ACIERTAS");

        location.reload();

    }else if(intentos<3 && intentos>1){

        if (contadorAciertos == contadorIntentos) {

            alert("YA ERA HORA");
            location.reload();

        } else {

            intentos--;
            alert("Intentos disponibles: " + intentos);

        }

    }else if(intentos==3){

        if (contadorAciertos == contadorIntentos) {

            alert("ACIERTO");
            location.reload();

        }else{

            intentos--;
            alert("Intentos disponibles: " + intentos);

        }

    }

}