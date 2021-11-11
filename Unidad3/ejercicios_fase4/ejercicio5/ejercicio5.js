//Matriz de cadenas de 2x3
var matriz = [["hola", "a", "todos"], ["hasta", "la", "vista"]];
//Valor que contendrá la cadena de todos los valores de la matriz
let respuesta = "";
//Recorrido de cada fila y columna de la matriz
for (let i = 0; i < matriz.length; i++) {

    for (let h = 0; h < matriz[i].length; h++) {
        //La respuesta aumenta con el valor de la posición de la matriz con un espacio
        respuesta += matriz[i][h] + " ";

    }

}

//Muestra de todas las cadenas juntas
alert("Cadena final: " + respuesta);