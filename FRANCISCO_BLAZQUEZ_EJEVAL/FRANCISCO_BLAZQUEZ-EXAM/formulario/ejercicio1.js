window.onload = iniciar;

//Función que contiene el evento
function iniciar() {
    //Evento que comprueba el formulario del ejercicio 1
    document.getElementById("btnEnviar").onclick = comprobar;

}

//Función que comprueba todos los campos del formulario
function comprobar() {
    //Contador para saber si todos los campos están bien
    let contador = 0;
    //Si el resultado de la función flecha que comprueba si el campo de la contraseña nueva es correcto, aumenta el contador
    if (comprobarContraseña1()) {

        contador++;
        //Si no, muestra el mensaje de error
    } else {

        alert("La contraseña debe empezar por una letra mayúscula, tener un mínimo de 6 caracteres y contener, al menos, un dígito");

    }
    //Si el resultado de la función flecha que comprueba si el campo de ambas contraseñas es correcto, aumenta el contador
    if (comprobarContraseñas()) {

        contador++;

        //Si no, muestra el mensaje de error
    } else {

        alert("Las contraseñas escritas no coinciden. Vuelve a intentarlo");

    }
    //Si el resultado de la función flecha que comprueba si el campo de indicio es correcto, aumenta el contador
    if (comprobarIndicio()) {

        contador++;
        //Si no, muestra el mensaje de error
    } else {

        alert("“El indicio de contraseña no puede contener la contraseña");

    }
    //Si todos los campos están bien, muestra su mensaje
    if (contador == 3) {

        alert("USUARIO VÁLIDO");

    }

}
//Función flecha que comprueba que el campo de la contraseña nueva sea correcto
let comprobarContraseña1 = () => {

    var contraseña = document.getElementById("textboxContraseña1");

    if (contraseña.value != "") {

        var passw = /^[A-Za-z]\w{6,25}$/;

        if (contraseña.value.match(passw) && contraseña.value.charAt(0) == contraseña.value.charAt(0).toUpperCase()) {

            return true;

        }
        else {

            contraseña.focus();

            return false;


        }

    }

    contraseña.focus();

    return false;

};

//Función flecha que comprueba que el campo de ambas contraseñas sea correcto
let comprobarContraseñas = () => {

    var contraseña1 = document.getElementById("textboxContraseña1");
    var contraseña2 = document.getElementById("textboxContraseña2");

    if (comprobarContraseña1 && contraseña1.value == contraseña2.value) {

        return true;

    }

    contraseña1.focus();

    return false;

};

//Función flecha que comprueba que el campo de indicio sea correcto
let comprobarIndicio = () => {

    var textarea = document.getElementById("textarea");

    if (textarea.value != document.getElementById("textboxContraseña1") && textarea.value != "") {

        return true;

    }

    textarea.focus();

    return false;

};