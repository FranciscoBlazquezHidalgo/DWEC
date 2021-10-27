
//Ejercicio 1 de mapa y flechas

function ejercicio1() {

    //Valor del usuario
    let adivinar = 0;
    //Definición de valor máximo
    let maximo = parseInt(prompt("Introduce el rango máximo."));
    document.open();
    //Función flecha que genera un número aleatorio
    const aleatorio = (maximo) => {
        return (Math.floor(Math.random() * maximo) + 1);
    };
    //Mientras que no adivine el número aleatorio
    while (adivinar != aleatorio(maximo)) {
        //Introducción del número para adivinar
        adivinar = parseInt(prompt("Introduce el número para adivinar el número aleatorio."));
        //Valor del número aleatorio
        alert("Número aleatorio: " + aleatorio(maximo));


    }
    //Número aleatorio adivinado
    document.write("<p>Número aleatorio adivinado: " + adivinar +"<p>");

    document.close();

}

//Ejercicio 2 de mapa y flechas

function ejercicio2() {

    //Función flecha de suma
    let suma = (numero1, numero2) => {

        return (numero1 + numero2);

    };
    //Función flecha de resta
    let resta = (numero1, numero2) => {

        return (numero1 - numero2);

    };
    //Función flecha de multiplicación
    let multiplicacion = (numero1, numero2) => {

        return (numero1 * numero2);

    };
    //Función flecha de división
    let division = (numero1, numero2) => {

        return (numero1 / numero2);

    };
    //Función del menú principal
    function main() {

        //Valores de opcion y de números a operar
        let operacion = 0, numero1 = 0, numero2 = 0;

        document.open();
        //Bucle del menú
        while (operacion != 5) {

            operacion = parseInt(prompt("1 para sumar \n2 para restar \n3 para multiplicar \n4 para divir \n5 para salir"));
            //Selector de opciones
            switch (operacion) {
                //Opción que pide los números para sumar
                case 1:

                    numero1 = parseInt(prompt("Introduce el número1."));
                    numero2 = parseInt(prompt("Introduce el número2."));
                    //document.write("<p>Resultado suma: " + suma(numero1, numero2) + "</p>");
                    alert("Resultado suma: " + suma(numero1, numero2));

                    break;
                //Opción que pide los números para restar
                case 2:

                    numero1 = parseInt(prompt("Introduce el número1."));
                    numero2 = parseInt(prompt("Introduce el número2."));
                    //document.write("<p>Resultado resta: " + resta(numero1, numero2) + "</p>");
                    alert("Resultado resta: " + resta(numero1, numero2));

                    break;
                //Opción que pide los números para multiplicar
                case 3:

                    numero1 = parseInt(prompt("Introduce el número1."));
                    numero2 = parseInt(prompt("Introduce el número2."));
                    //document.write("<p>Resultado multiplicación: " + multiplicacion(numero1, numero2) + "</p>");
                    alert("Resultado multiplicación: " + multiplicacion(numero1, numero2));

                    break;
                //Opción que pide los números para dividir
                case 4:

                    numero1 = parseInt(prompt("Introduce el número1."));
                    numero2 = parseInt(prompt("Introduce el número2."));
                    //document.write("<p>Resultado división: " + division(numero1, numero2) + "</p>");
                    alert("Resultado división: " + division(numero1, numero2));

                    break;

            }

        }

        document.close();

    }

    main();

}

//Ejercicio 3 de mapa y flechas

function ejercicio3() {

    //Función flecha para mostrar las ciudades y sus habitantes
    let mostrarCiudades = () => {

        let i = 0;
        let mensaje = "";

        while (i < mapa.size) {

            mensaje = mensaje + "Ciudad :" + mapa.keys(i) + " Población: " + mapa.get(i) + "\n";

            i++;

        }

        return mensaje;

    };
    //Función flecha para mostrar el número de ciudades
    let numeroCiudades = () => {

        return mapa.size;

    };
    //Función flecha para mostrar borrar ciudad
    let borrarCiudad = (borrar) => {

        mapa.delete(borrar);

        mensaje = borrar;

        return mensaje;

    };
    //Función flecha para crear ciudad
    let añadirCiudad = (nuevaCiudad, nuevaPoblacion) => {

        mapa.set(nuevaCiudad, nuevaPoblacion);

        mensaje = "Ciudad: " + nuevaCiudad + " Población: " + nuevaPoblacion;

        return mensaje;

    };
    //Función del menú principal
    function main() {
        //Mapa de ciudades
        var mapa = new Map();

        let opcion = 0;
        //Bucle del menú
        while (opcion != 5) {

            opcion = parseInt(prompt("1 para mostrar ciudades. \n 2 para saber cuantas ciudades existen. \n 3 para borrar ciudad. \n 4 para añadir nueva ciudad. \n 5 para salir."));
            //Selector de opciones
            switch (opcion) {
                //Opción que muestra las ciudades y sus habitantes
                case 1:

                    alert(mostrarCiudades());

                    break;
                //Opción que muestra el número de ciudades
                case 2:

                    alert("Número de ciudades: " + numeroCiudades());

                    break;
                //Opción que borra una ciudad
                case 3:

                    let borrar = (prompt("Introduce que ciudad a borrar")).toString();
                    alert("Ciudad borrada: " + borrarCiudad(borrar));
                    break;
                //Opción que crea una ciudad
                case 4:

                    let nuevaCiudad = (prompt("Introduce la ciudad a añadir")).toString();
                    let nuevaPoblacion = parseInt(prompt("Introduce su población"));
                    alert("Ciudad añadida: " + "\n" + añadirCiudad(nuevaCiudad, nuevaPoblacion));

                    break;

            }

        }

    }

    main();

}
