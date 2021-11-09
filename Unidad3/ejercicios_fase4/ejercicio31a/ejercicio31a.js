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