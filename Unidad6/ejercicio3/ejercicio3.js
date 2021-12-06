window.onload=iniciar;

let i;

var arrayPalabras=["aeropuerto", "dinosaurio", "colegio", "piscina", "edificio"];

function iniciar(){

    crearLetras();

    document.getElementById("btnNuevaPalabra").onclick=nuevaPalabra;
    document.getElementById("btnSolucion").onclick=solucion;
    document.getElementById("btnFin").onclick=finalizar;

}

function crearLetras(){

    i=aleatorio(arrayPalabras.length);

    var letras=arrayPalabras[i].toUpperCase().split("").sort().join("");

    document.getElementById("textboxLetras").value=letras;

}

let aleatorio = (maximo) => {

    return (Math.floor(Math.random() * maximo) + 1);

};

function nuevaPalabra(){

    crearLetras();

    document.getElementById("textboxPalabra").classList.remove("error");

}

function solucion(){

    if(document.getElementById("textboxLetras").value.toUpperCase().split("").sort().join("")!=document.getElementById("textboxPalabra").value.toUpperCase().split("").sort().join("")){

        document.getElementById("textboxPalabra").classList.add("error");

    }else{

        document.getElementById("textboxPalabra").classList.remove("error");

        alert("Has adivinado la palabra");

    }

}

function finalizar(){

    document.getElementById("textboxLetras").value="";
    document.getElementById("textboxPalabra").value="";

}