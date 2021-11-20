//Ejercicio 1
function ejercicio1() {
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

}
//Ejercicio 2
function ejercicio2() {
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

}
//Ejercicio 3
function ejercicio3() {
    //Deshabilita el click derecho dentro del documento
    document.addEventListener('contextmenu', event => event.preventDefault());

}
//Ejercicio 4
function ejercicio4() {
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

}
//Ejercicio 5
function ejercicio5() {
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

}
//Ejercicio 6
function ejercicio6() {
    
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

}
//Ejercicio 7
function ejercicio7() {
    //Función que mueve un elemento div si las teclas son adminidas
    function mover(e) {
        //Variable de la distancia a recorrer al realizar una pulsación admitida
        let distancia = 5;
        //Variable que accede al estilo del elemento div
        const estilo = document.getElementById("caja").style;
        //Selector de casos
        switch (e.key) {
            //Tecla w
            case 'w':
                //Cambia el estilo para que disminuya la distancia respecto arriba
                estilo.top = `${parseInt(estilo.top) - distancia}px`;

                break;
            //Tecla s
            case 's':
                //Cambia el estilo para que aumente la distancia respecto arriba
                estilo.top = `${parseInt(estilo.top) + distancia}px`;

                break;
            //Tecla a
            case 'a':
                //Cambia el estilo para que disminuya la distancia respecto izquierda
                estilo.left = `${parseInt(estilo.left) - distancia}px`;

                break;
            //Tecla d
            case 'd':
                //Cambia el estilo para que aumente la distancia respecto izquierda
                estilo.left = `${parseInt(estilo.left) + distancia}px`;

                break;
            //Tecla flecha arriba
            case 'ArrowUp':
                //Cambia el estilo para que disminuya la distancia respecto arriba
                estilo.top = `${parseInt(estilo.top) - distancia}px`;

                break;
            //Tecla flecha abajo
            case 'ArrowDown':
                //Cambia el estilo para que aumente la distancia respecto arriba
                estilo.top = `${parseInt(estilo.top) + distancia}px`;

                break;
            //Tecla flecha izquierda
            case 'ArrowLeft':
                //Cambia el estilo para que disminuya la distancia respecto izquierda
                estilo.left = `${parseInt(estilo.left) - distancia}px`;

                break;
            //Tecla flecha derecha
            case 'ArrowRight':
                //Cambia el estilo para que aumente la distancia respecto izquierda
                estilo.left = `${parseInt(estilo.left) + distancia}px`;

                break;

        }

    }
    //Función que inicia los eventos
    function iniciar() {
        //Ejecución del evento al pulsar una tecla
        document.onkeydown = mover;

    }
    //Al cargar el archivo se llama a la función iniciar
    window.onload = iniciar;

}