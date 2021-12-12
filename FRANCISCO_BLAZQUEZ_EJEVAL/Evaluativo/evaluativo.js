//Al cargar la ventana ejecuta la función iniciar
window.onload = iniciar;

//Variables de almacenan los aciertos e intentos de las palabras ocultas
let acierto = 0, intentos = 0;
//Variable que almacen la posición de la lista de palabras para adivinar
let i;

let tiempoInicio;

//Función que contiene todos los eventos
function iniciar() {
    //Evento que comprueba el formulario del ejercicio 1
    document.getElementById("btnEnviar").onclick = comprobar;
    //Eventos de las acciones del ejercicio 2
    document.getElementById("btnIniciar").onclick = inicio;
    document.getElementById("btnParar").onclick = parar;
    //Función que carga el campo de texto de letras del ejercicio 3
    crearLetras();
    //Eventos de las acciones del ejercicio 3
    document.getElementById("btnNuevaPalabra").onclick = nuevaPalabra;
    document.getElementById("btnSolucion").onclick = solucion;
    document.getElementById("btnFin").onclick = finalizar;

}

//EJERCICIO 1

//Función que comprueba todos los campos del formulario
function comprobar() {
    //Contador para saber si todos los campos están bien
    let contador = 0;
    //Si el resultado de la función flecha que comprueba si el campo de nombre es correcto, aumenta el contador y oculta el mensaje de error
    if (comprobarNombre()) {

        contador++;

        document.getElementById("nombreError").classList.remove("visible");
        document.getElementById("nombreError").classList.add("hidden");
        //Si no, muestra el mensaje de error
    } else {

        document.getElementById("nombreError").classList.remove("hidden");
        document.getElementById("nombreError").classList.add("visible");

    }
    //Si el resultado de la función flecha que comprueba si el campo de correo es correcto, aumenta el contador y oculta el mensaje de error
    if (comprobarCorreo()) {

        contador++;

        document.getElementById("correoError").classList.remove("visible");
        document.getElementById("correoError").classList.add("hidden");
        //Si no, muestra el mensaje de error
    } else {

        document.getElementById("correoError").classList.remove("hidden");
        document.getElementById("correoError").classList.add("visible");

    }
    //Si el resultado de la función flecha que comprueba si los campos de contraseñas son correctos, aumenta el contador y oculta el mensaje de error
    if (comprobarContraseña()) {

        contador++;

        document.getElementById("contraError").classList.remove("visible");
        document.getElementById("contraError").classList.add("hidden");
        //Si no, muestra el mensaje de error
    } else {

        document.getElementById("contraError").classList.remove("hidden");
        document.getElementById("contraError").classList.add("visible");

    }
    //Si el resultado de la función flecha que comprueba si el campo de resultado es correcto, aumenta el contador y oculta el mensaje de error
    if (comprobarResultado()) {

        document.getElementById("resError").classList.remove("visible");
        document.getElementById("resError").classList.add("hidden");

        contador++;
        //Si no, muestra el mensaje de error
    } else {

        document.getElementById("resError").classList.remove("hidden");
        document.getElementById("resError").classList.add("visible");

    }
    //Si el resultado de la función flecha que comprueba si el campo de checkbox es correcto, aumenta el contador y oculta el mensaje de error
    if (comprobarCheckBox()) {

        document.getElementById("checkError").classList.remove("visible");
        document.getElementById("checkError").classList.add("hidden");

        contador++;
        //Si no, muestra el mensaje de error
    } else {

        document.getElementById("checkError").classList.remove("hidden");
        document.getElementById("checkError").classList.add("visible");

    }
    //Si todos los campos están bien, muestra su mensaje
    if (contador == 5) {

        alert("Formulario válido");

    }

}
//Función flecha que comprueba que el campo nombre sea correcto
let comprobarNombre = () => {

    if (document.getElementById("textboxNombre").value != "") {

        return true;

    }

    return false;

};
//Función flecha que comprueba que el campo correo sea correcto
let comprobarCorreo = () => {

    var email = document.getElementById("textboxCorreo").value;

    var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    if (email.match(email) && email != "") {


        return true;

    } else {

        return false;

    }

};
//Función flecha que comprueba que los campos contraseñas sean correctos
let comprobarContraseña = () => {

    if (document.getElementById("textboxContra1").value == document.getElementById("textboxContra2").value &&
        (document.getElementById("textboxContra1").value != "" && document.getElementById("textboxContra2").value != "")) {

        return true;

    }

    return false;
};
//Función flecha que comprueba que el campo resultado sea correcto
let comprobarResultado = () => {

    if (document.getElementById("textboxRes").value == 8) {

        return true;

    }

    return false;

};
//Función flecha que comprueba que el campo checkbox sea correcto
let comprobarCheckBox = () => {

    if (document.getElementById("checkbox").checked) {

        return true;

    }

    return false;

};

//EJERCICIO 2

//Función que reinicia los campos de texto de cada letra y activa el intervalo que muestra las letras
function inicio() {

    let texto = document.getElementsByName("letra");

    for (let i = 0; i < texto.length; i++) {

        if(texto[i].disabled==true){

        texto[i].value = "";
        texto[i].disabled = false;
        texto[i].classList.remove("error");

        }

    }

    intervalo();

}
//Función que comprueba la letra de cada campo de texto introducido y marca en rojo las incorrectas, además de deshabilitar todas
function parar() {

    var refran = "hoyportimañanapormi";

    for (let i = 0; i < refran.length; i++) {

        var textbox = document.getElementsByName("letra")[i];

        var letra=refran.charAt(i);

        console.log(letra);

        if (textbox.value!= letra) {

            textbox.classList.add("error");
            textbox.disabled = true;

        }else if(textbox.value==letra){

            textbox.disabled = true;

        }

    }

}
//Input Password and Submit [7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter]
/*function CheckPassword(inputtxt) 
{ 
var passw=  /^[A-Za-z]\w{7,14}$/;
if(inputtxt.value.match(passw)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}*/
/*function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if((inputtxt.value.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("message");
        return false;
        }
} */
//Función que cada 10 segundos ejecuta la función mostrarLetra
function intervalo() {

    tiempoInicio = setInterval(mostrarLetra, 10000);

}
//Función que muestra una letra en un campo, si se repite el campo vuelve a ejecutarse
function mostrarLetra() {

    var refran = "hoyportimañanapormi";

    let repeticion = true;

    while (repeticion) {

        let aleatorio = Math.floor(Math.random() * refran.length) + 1;

        let texto = document.getElementsByName("letra")[aleatorio];

        if (texto.value!=" " && !texto.disabled) {

            texto.value = refran.charAt(aleatorio);

            repeticion = false;

        }

    }

}

//EJERCICIO 3

//Función que llena el campo de texto de letras con una palabra desordenada y en mayúsculas
function crearLetras() {

    let letras = aleatorio();

    document.getElementById("textboxLetras").value = letras;
    document.getElementById("textboxLetras").disabled = true;

}
//Función flecha que devuelve la posición aleatoria de la lista de palabras
let aleatorio = () => {

    var arrayPalabras = ["aeropuerto", "dinosaurio", "colegio", "piscina", "edificio"];

    let letras = arrayPalabras[Math.floor(Math.random() * arrayPalabras.length) + 1];

    letras = letras.toUpperCase().split("").sort().join("");

    return letras;

};
//Función que ejecuta la función 
function nuevaPalabra() {

    crearLetras();

    document.getElementById("textboxPalabra").classList.remove("acierto");
    document.getElementById("textboxPalabra").classList.remove("error");
    document.getElementById("textboxPalabra").value = "";

}
//Función que muestra si se ha acertado la palabra o no, además, aumenta los contadores de intentos y aciertos
function solucion() {

    if (document.getElementById("textboxLetras").value != document.getElementById("textboxPalabra").value.toUpperCase().split("").sort().join("")) {

        document.getElementById("textboxPalabra").classList.remove("acierto");
        document.getElementById("textboxPalabra").classList.add("error");
        //document.getElementById("textboxPalabra").value = .toUpperCase().split("").sort().join("");

        intentos++;

    } else if (document.getElementById("textboxLetras").value != "") {

        document.getElementById("textboxPalabra").classList.remove("error");
        document.getElementById("textboxPalabra").classList.add("acierto");

        acierto++;

        intentos++;

    }

}
//Función que deshabilita los campos de texto y los botones, aparte, muestra el porcentaje de aciertos de palabras
function finalizar() {

    document.getElementById("aciertos").classList.remove("hidden");
    document.getElementById("aciertos").classList.add("visible");

    document.getElementById("aciertos").innerHTML = "Porcentaje de aciertos: " + ((acierto / intentos) * 100) + "%.";

    document.getElementById("textboxLetras").value = "";
    document.getElementById("textboxPalabra").value = "";
    document.getElementById("textboxLetras").disabled = true;
    document.getElementById("textboxPalabra").disabled = true;
    document.getElementById("btnNuevaPalabra").disabled = true;
    document.getElementById("btnSolucion").disabled = true;
    document.getElementById("btnFin").disabled = true;

}