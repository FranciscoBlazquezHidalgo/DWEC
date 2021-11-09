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