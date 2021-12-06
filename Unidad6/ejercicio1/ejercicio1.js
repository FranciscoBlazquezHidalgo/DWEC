window.onload = iniciar;

function iniciar() {

    document.getElementById("btnEnviar").onclick = comprobar;

}

function comprobar() {

    let contador = 0;

    if (comprobarNombre()) {

        contador++;

        document.getElementById("nombreError").classList.remove("visible");
        document.getElementById("nombreError").classList.add("hidden");

    } else {

        document.getElementById("nombreError").classList.remove("hidden");
        document.getElementById("nombreError").classList.add("visible");

    }

    if (comprobarCorreo()) {

        contador++;

        document.getElementById("correoError").classList.remove("visible");
        document.getElementById("correoError").classList.add("hidden");

    } else {

        document.getElementById("correoError").classList.remove("hidden");
        document.getElementById("correoError").classList.add("visible");

    }

    if (comprobarContraseña()) {

        contador++;

        document.getElementById("contraError").classList.remove("visible");
        document.getElementById("contraError").classList.add("hidden");

    } else {

        document.getElementById("contraError").classList.remove("hidden");
        document.getElementById("contraError").classList.add("visible");

    }

    if (comprobarResultado()) {

        document.getElementById("resError").classList.remove("visible");
        document.getElementById("resError").classList.add("hidden");

        contador++;

    } else {

        document.getElementById("resError").classList.remove("hidden");
        document.getElementById("resError").classList.add("visible");

    }

    if (comprobarCheckBox()) {

        document.getElementById("checkError").classList.remove("visible");
        document.getElementById("checkError").classList.add("hidden");

        contador++;

    } else {

        document.getElementById("checkError").classList.remove("hidden");
        document.getElementById("checkError").classList.add("visible");

    }

    if (contador == 5) {

        alert("Todo bien");

    }

}

let comprobarNombre = () => {

    if (document.getElementById("textboxNombre").value != "") {

        return true;

    }

};

let comprobarCorreo = () => {

    var email = document.getElementById("textboxCorreo").value;

    var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    if(email!="" && email.match(email)){

        return true;

    }else{

        return false;

    }

    return false;

};

let comprobarContraseña = () => {

    if (document.getElementById("textboxContra1").value == document.getElementById("textboxContra2").value &&
        (document.getElementById("textboxContra1").value != "" && document.getElementById("textboxContra2").value != "")) {

        return true;

    }

    return false;
};

let comprobarResultado = () => {

    if (document.getElementById("textboxRes").value == 8) {

        return true;

    }

    return false;

};

let comprobarCheckBox = () => {

    if (document.getElementById("checkbox").checked) {

        return true;

    }

    return false;

};