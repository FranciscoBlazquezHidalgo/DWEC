//Ejercicio 4a
function ejercicio4a() {
    //Matriz de 2x3
    var matriz = [[1, 2, 3], [4, 5, 6]];
    //Valor que contendrá la suma
    let suma = 0;
    //Recorrido de cada fila y columna de la matriz
    for (let i = 0; i < matriz.length; i++) {

        for (let h = 0; h < matriz[i].length; h++) {
            //Sumatorio del valor actual junto al de la posición de la matriz
            suma += matriz[i][h];

        }

    }
    //Muestra el resultado
    alert("Resultado de la suma de todos los elementos: " + suma);

}
//Ejercicio 4b
function ejercicio4b() {
    //Función que recibe una fecha y devuelve su mes
    let conseguirMes = (fecha) => {
        //Array de todos los meses del año
        var array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        //Devuelve el mes del array según el mes de la fecha
        return array[fecha.getMonth()];

    };
    //Introducción de la fecha
    let fecha = new Date(prompt("Introduce la fecha"));
    //Muestra el mes
    alert("Mes: " + conseguirMes(fecha));

};
//Ejercicio 6
function ejercicio6() {
    //Función que devuelve el número mayor de una matriz
    let mayor = () => {
        //Matriz de 2x4
        var matriz = [[11, 3, 90, 102], [60, 4, 24, 16]];
        //Valor que contendrá el máximo
        let maximo = 0;
        //Recorrido de cada fila y columna de la matriz
        for (let i = 0; i < matriz.length; i++) {

            for (let h = 0; h < matriz[i].length; h++) {
                //Si el valor de la posición actual es mayor que el valor actual, su valor se iguala al de la posición
                if (matriz[i][h] > maximo) {


                    maximo = matriz[i][h];

                }

            }

        }
        //Devuelve el valor máximo
        return maximo;

    };
    //Muestra el valor máximo
    alert("Valor más alto: " + mayor());

};
//Ejercicio 8a
function ejercicio8a() {
    //Función que devuelve la diferencia de 2 fechas
    let diferencia = (fecha1, fecha2) => {
        //Cálculo de la diferencia de tiempo
        let diferencia = f1.getTime() - f2.getTime();
        //Cálculo de la diferencia de tiempo a días
        let diferenciaDias = diferencia / (1000 * 3600 * 24);
        //Devuelve el número de días como valor absoluto
        return Math.abs(diferenciaDias);

    };
    //Introducción de las fechas
    let fecha1 = new Date(prompt("Introduce la fecha 1"));
    let fecha2 = new Date(prompt("Introduce la fecha 2"));
    //Muestra el número de días de diferencia
    alert("Diferencia de fechas: " + diferencia(fecha1, fecha2));

}
//Ejercicio 18
function ejercicio18() {
    //Función que devuelve el producto de todos los números de una matriz
    let multiplicar = () => {
        //Matriz de 2x4
        var matriz = [[1, 2, 3, 4], [5, 6, 7, 8]];
        //Valor que contendrá el resultado
        let resultado = 1;
        //Recorrido de cada fila y columna de la matriz
        for (let i = 0; i < matriz.length; i++) {

            for (let h = 0; h < matriz[i].length; h++) {
                //Multiplicación del valor actual por el de la posición de la matriz
                resultado *= matriz[i][h];

            }

        }
        //Devuelve el producto final
        return resultado;

    };
    //Muestra del producto final de la matriz
    alert("Resultado del producto de la matriz: " + multiplicar());

}
//Ejercicio 31a
function ejercicio31a() {
    //Función que devuelve el número mayor de un array
    let maximo = (array) => {
        //Valor que contendrá el máximo
        let valor = 0;
        //Recorrido del array
        for (let i = 0; i < array.length; i++) {
            //Si el valor de la posición actual es mayor que el valor actual, su valor se iguala al de la posición
            if (array[i] > valor) {

                valor = array[i];

            }

        }
        //Devuelve  el valor máximo
        return valor;

    };
    //Array vacío para ser llenado
    let array = [];
    //Introducción de 3 valores en el array
    for (let i = 0; i < 3; i++) {

        let numero = parseInt(prompt("Introduce un número"));

        array.push(numero);

    }
    //Muestra el máximo del array
    alert("Máximo: " + maximo(array));

}
//Ejercicio 5
function ejercicio5() {
    //Matriz de cadenas de 2x3
    var matriz = [["hola", "a", "todos"], ["hasta", "la", "vista"]];
    //Muestra de todas las cadenas juntas
    alert("Cadena final: " + matriz.join(" "));

}
//Ejercicio 8b
function ejercicio8b() {
    //Matriz de 2x5 con distintos valores
    var matriz = [[1, 'hola', 'mundo', 6, 1], [2, 'hola', 'mundo', 1, 6]];
    //Valor que contendrá el valor más repetido
    let valorMaximo;
    //Contadores de repeticiones
    let contador1 = 0;
    let contador2 = 1;
    //Recorrido de cada fila y columna de la matriz
    for (let i = 0; i < matriz.length; i++) {

        for (let h = 0; h < matriz[i].length; h++) {
            //Segundo recorrido de la fila actual para identificar los valores
            for (let j = h; j < matriz[i].length; j++) {
                //Si el valor de la posición actual es igual al del segundo recorrido, aumenta el primer contador
                if (matriz[i][h] == matriz[i][j]) {

                    contador1++;

                }
                //Si el segundo contador es menor que el primero, se iguala al primero y el valor máximo se iguala al valor de la posición actual
                if (contador2 < contador1) {

                    contador2 = contador1;
                    valorMaximo = matriz[i][h];

                }

            }
            //El primer contador vuelve a valer 0 para volver a realizar el recorrido
            contador1 = 0;

        }



    }
    //Muestra del valor que más se repite de una matriz
    alert("Valor más repetido de la matriz: " + valorMaximo);

}
//Ejercicio 31b
function ejercicio31b() {
    //Función que elimina un número de una matriz
    let eliminar = (numero) => {
        //Matriz de 4x4
        let matriz = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];
        //Recorrido de cada fila y columna de la matriz
        for (let i = 0; i < matriz.length; i++) {

            for (let h = 0; h < matriz[i].length; h++) {
                //Si el número es igual al valor de la posición actual, se elimina
                if (numero == matriz[i][h]) {

                    document.open();
                    document.write("Borrado");
                    document.close();

                    matriz.splice(matriz[i][h], 1);

                }

            }

        }
        //Devuelve la matriz modificada
        return matriz;

    };
    //Introducción del número a eliminar
    let numero = parseInt(prompt("Introduce un número del 0 al 15"));
    //Muestra la matriz modificada
    alert(eliminar(numero));

}