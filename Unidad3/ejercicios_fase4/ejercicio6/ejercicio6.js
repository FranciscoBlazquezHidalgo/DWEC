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