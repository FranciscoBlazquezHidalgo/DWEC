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