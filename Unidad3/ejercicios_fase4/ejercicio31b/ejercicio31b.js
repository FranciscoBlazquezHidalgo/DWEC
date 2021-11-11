//Función que elimina un número de una matriz
let eliminar = (numero) => {
    //Matriz de 4x4
    let matriz = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];
    //Recorrido de cada fila y columna de la matriz
    for (let i = 0; i < matriz.length; i++) {

        for (let h = 0; h < matriz[i].length; h++) {
            //Si el número es igual al valor de la posición actual, se elimina
            if (matriz[i][h]==numero) {               

                matriz[i].splice(i, 1);

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