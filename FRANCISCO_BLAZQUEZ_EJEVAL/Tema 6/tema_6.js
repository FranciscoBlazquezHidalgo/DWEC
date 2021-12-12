//Al cargar la ventana ejecuta la función iniciar
window.onload=iniciar;
//Función que contiene todos los eventos
function iniciar(){
    //Evento que comprueba el formulario del ejercicio 1
    document.getElementById("btnDNI").onclick=validarDNI;
    //Evento que comprueba el formulario del ejercicio 2
    document.getElementById("btnCorreo").onclick=validarCorreo;
    //Evento que comprueba el formulario del ejercicio 3
    document.getElementById("btnPalabras").onclick=validarPalabras;
    //Evento que comprueba los selects del ejercicio 4
    document.getElementById("btnSelect").onclick=validarSelects;

}

//EJERCICIO 1

//Función que comprueba la validación del DNI mediante expresiones regulares
function validarDNI() {

    var dni = document.getElementById("textboxDNI").value;
    var expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test(dni) == true) {

        var numero = dni.substr(0, dni.length - 1);
        var letra1 = dni.substr(dni.length - 1, 1);

        numero = numero % 23;

        var letra2 = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra2 = letra2.substring(numero, numero + 1);

        if (letra2 != letra1.toUpperCase()) {

            //return false;

            alert("DNI no válido");

        } else {

            //return true;
            alert("DNI válido");
            document.getElementById("textboxDNI").blur();

        }

    } else {

        alert("DNI no válido");
        //return false;

    }

}

//EJERCICIO 2

//Función que comprueba la validación del correo mediante expresiones regulares
function validarCorreo() {

    var listaServidores = ["terra.es", "google.com", "marca.es", "yahoo.es"];

    var email = document.getElementById("textboxCorreo").value;

    var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    if (email.match(email)) {

        if (comprobarDireccion(email)) {

            //return true;
            alert("Correo válido");

        }

    } else {

        //return false;
        alert("Correo no válido");

    }

}
//Función flecha que comprueba si el correo es de alguno de los servidores
let comprobarDireccion = (email) => {

    var correo = email.split("@");
    var servidor = correo[1];

    var listaServidores = ["terra.es", "google.com", "marca.es", "yahoo.es"];

    for (let i = 0; i < listaServidores.length; i++) {

        if (servidor == listaServidores[i]) {

            return true;

        }

    }

    return false;

};

//EJERCICIO 3

//Función que comprueba la validación de los anagramas
function validarPalabras() {

    var palabra1 = document.getElementById("textboxPalabra1").value;
    var palabra2 = document.getElementById("textboxPalabra2").value;

    if(palabra1.toLowerCase().split("").sort().join("") === palabra2.toLowerCase().split("").sort().join("")
     && (palabra1.toLowerCase().split("").sort().join("")!="" && palabra2.toLowerCase().split("").sort().join("")!="")){

        alert("Palabras válidas");

    }else{

        alert("Palabras no válidas");

    }

    

}

//EJERCICIO 4

//Función que carga el select2 al seleccionar una opción del select1
function cambiar() {

    var Alicante = ["Alicante Capital", "Elche", "Orihuela"];
    var Castellon = ["Castelllón Capital", "Oropesa", "Vinaroz"];
    var Valencia = ["Valencia Capital", "Torrent", "Mislata"];

    var opcion1 = document.getElementById("select1").value;

    if (opcion1 == 1) {

        crearOptions(Alicante);

    } else if (opcion1 == 2) {

        crearOptions(Castellon);

    } else if (opcion1 == 3) {

        crearOptions(Valencia);

        document.getElementById("select2").selectedIndex = 3;

    }

}
//Función que vacía el select2 y crea las opciones según la opción seleccionada del select1
function crearOptions(lista) {

    vaciar();

    let opcion2 = document.getElementById("select2");
    let h = 1;

    var opcion0 = document.createElement("option");
        opcion0.value = 0;
        opcion0.innerHTML = "Select no seleccionado";
        opcion2.appendChild(opcion0);

    for (let i = 0; i < lista.length; i++) {

        var opcion = document.createElement("option");
        opcion.value = h;
        opcion.innerHTML = lista[i];
        opcion2.appendChild(opcion);

        h++;

    }

}
//Función que vacía el select2
function vaciar() {

    let opcion2 = document.getElementById("select2");
    opcion2.innerHTML="";

}
//Función que comprueba la validación de los selects
function validarSelects() {

    var opcion1 = document.getElementById("select1");
    var opcion2 = document.getElementById("select2");

    if (opcion1.value !=0 && opcion2.value !=0) {

        alert("Selects válidados");

        //return true;

    }else{

        alert("Selects no válidados");

    }

    
    //return false;

}