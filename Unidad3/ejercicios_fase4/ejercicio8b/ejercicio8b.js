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