//hecho
(function ejercicio8() {

    let aleatorio = (Math.random() * (10 - 1) + 1);

    let numero = prompt("Adivina un número aleatorio del 1 al 10.");

    if (numero == aleatorio) {

        alert("Buen trabajo.");

    } else {

        alert("No coincide.");

    }

});
//hecho
(function ejercicio9() {

    let hoy = new Date();

    let diaNavidad = new Date(hoy.getFullYear(), 11, 25);

    if (hoy.getMonth() == 11 && hoy.getDate() > 25) {

        diaNavidad.setFullYear(diaNavidad.getFullYear() + 1);

    }

    let diferenciaTiempo = diaNavidad.getTime() - hoy.getTime();

    let diferenciaDias = diferenciaTiempo / (1000 * 3600 * 24);

    alert("Quedan " + Math.abs(parseInt(diferenciaDias)) + " dias para navidad.");

});
//hecho
(function ejercicio10() {

    let numero1 = parseInt(prompt("Introduce el número 1."));
    let numero2 = parseInt(prompt("Introduce el número 2."));

    alert("Resultado de multiplicación: " + numero1 * numero2);
    alert("Resultado de división: " + numero1 / numero2);

});
//hecho
(function ejercicio11() {

    let tCelsius = prompt("Introduce la temperatura en Celsius.");
    let tFahrenheit = prompt("Introduce la temperatura en Fahrenheit.");

    alert(tCelsius + "º C son" + ((tCelsius * (9 / 5)) + 32) + " ºF.");
    alert(tFahrenheit + "º F son" + ((tFahrenheit - 32) * (5 / 9)) + " ºC.");

});
//hecho
(function ejercicio12() {

    alert(window.location.href);

});
//sin hacer
(function ejercicio13() {

    let valor = prompt("Introduce el nombre de la variable.");

    alert("Variable del usuario :" + valor);

});
//hecho
(function ejercicio14() {

    let file = prompt("Introduce la ruta del archivo");
    var ext = file.split('.').pop();
    alert("Extensión: " + ext);

});
//hecho
(function ejercicio15() {

    let comprobar = (numero) => {

        if (numero < 13) {

            return (13 - numero);

        } else if (numero == 13) {

            return "El número es igual a 13.";

        } else {

            return Math.abs((numero - 13) * 2);

        }

    };

    let numero = parseInt(prompt("Introduce el número."));

    alert("Comprobar: " + comprobar(numero));

});
//hecho
(function ejercicio16() {

    let suma = (numero1, numero2) => {

        if (numero1 == numero2) {

            return (numero1 + numero2) * 3;

        } else {

            return (numero1 + numero2);

        }

    };
    let numero1 = parseInt(prompt("Introduce el número 1."));
    let numero2 = parseInt(prompt("Introduce el número 2."));

    alert("Suma: " + suma(numero1, numero2));

});
//hecho
(function ejercicio17() {

    let diferencia = (numero) => {

        if (numero < 19) {

            return Math.abs(19 - numero);

        } else if (numero == 19) {

            return "El número es igual a 19.";

        } else {

            return (Math.abs(numero - 19) * 3);

        }

    };
    let numero = parseInt(prompt("Introduce el número."));

    alert("Diferencia: " + diferencia(numero));

});
//hecho
(function ejercicio18() {

    let comprobar = (numero1, numero2) => {

        if (numero1 == 50) {

            return true;

        } else if (numero2 == 50) {

            return true;

        } else if (numero1 + numero2 == 50) {

            return true;

        }

        return false;

    };
    let numero1 = parseInt(prompt("Introduce el número 1."));
    let numero2 = parseInt(prompt("Introduce el número 2."));

    alert("Comprobar: " + comprobar(numero1, numero2));

});
//hecho
(function ejercicio28() {

    let comprobar = (numero1, numero2) => {

        if (numero1 > 50 && numero1 < 99) {

            return true;

        }

        if (numero2 > 50 && numero2 < 99) {

            return true;

        }

        return false;

    };
    let numero1 = parseInt(prompt("Introduce el número 1."));
    let numero2 = parseInt(prompt("Introduce el número 2."));

    alert("Comprobar: " + comprobar(numero1, numero2));

});