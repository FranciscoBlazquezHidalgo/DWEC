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