//Función que encripta el correo
let encriptarCorreo = (email) => {
    //Variables de las distintas partes de la cadena
    var encriptado, mitad, parte1, parte2;
    //Corta la cadena donde está el @
    mitad = email.split("@");
    //La primera parte llega hasta @
    parte1 = mitad[0];
    //Encripta la mitad de la primera parte según su tamaño
    encriptado = parte1.length / 2;
    //La primera parte es la primera parte menos la parte encriptada
    parte1 = parte1.substring(0, (parte1.length - encriptado));
    //La segunda parte es los siguiente del @
    parte2 = mitad[1];
    //Devuelve el correo encriptado
    return parte1 + "...@" + parte2;

};
//Introducción del correo
let email = (prompt("Introduce el correo")).toString();
//Resultado del correo encriptado
alert("Correo encriptado: " + encriptarCorreo(email));