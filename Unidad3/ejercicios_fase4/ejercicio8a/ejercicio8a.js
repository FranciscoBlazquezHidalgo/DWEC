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
