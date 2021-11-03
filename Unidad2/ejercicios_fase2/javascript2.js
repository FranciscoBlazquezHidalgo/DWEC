//hecho
(function ejercicio8(){

    let aleatorio=(Math.random()*(10-1)+1);

    let numero=prompt("Adivina un número aleatorio del 1 al 10.");

    if(numero==aleatorio){

        alert("Buen trabajo.");

    }else{

        alert("No coincide.");

    }

});
//hecho
(function ejercicio9(){

    let hoy=new Date();

    let diaNavidad=new Date(12, 24);

    let diferenciaTiempo=diaNavidad.getTime()-hoy.getTime();
  
    let diferenciaDias=diferenciaTiempo/(1000 * 3600 * 24);

    alert("Quedan "+Math.abs(diferenciaDias)+" dias para navidad.");

});
//hecho
(function ejercicio10(){

    let numero1=parseInt(prompt("Introduce el número 1."));
    let numero2=parseInt(prompt("Introduce el número 2."));

    alert("Resultado de multiplicación: "+numero1*numero2);
    alert("Resultado de división: "+numero1/numero2);
    
});
//hecho
(function ejercicio11(){

    let tCelsius=prompt("Introduce la temperatura en Celsius.");
    let tFahrenheit=prompt("Introduce la temperatura en Fahrenheit.");

    alert(tCelsius+"º C son"+((tCelsius*(9/5))+32)+" ºF.");
    alert(tFahrenheit+"º F son"+((tFahrenheit-32)*(5/9))+" ºC.");

});
//hecho
(function ejercicio12(){

    alert(window.location.href);

});
//sin hacer
(function ejercicio13(){
    
    let valor=prompt("Introduce el nombre de la variable.");

    alert("Variable del usuario :"+variable);

});
//sin hacer
(function ejercicio14(){



});
//hecho
(function ejercicio15(){

    let numero=parseInt(prompt("Introduce el número."));

    if(numero<13){

        alert("La diferencia es de "+13-numero);

    }else if(numero==13){

        alert("El número es igual a 13.");

    }else{

        alert("El doble de diferencia es de "+Math.abs((numero-13)*2));

    }

});
//hecho
(function ejercicio16(){

    let numero1=parseInt(prompt("Introduce el número 1."));
    let numero2=parseInt(prompt("Introduce el número 2."));

    let suma=parseInt(numero1+numero2);

    if(numero1==numero2){

        alert("Los números son iguales, el resultado tripe de su suma es de: "+suma*3);

    }else{

        alert("El resultado de la suma de los números es de: "+suma);

    }

});
//hecho
(function ejercicio17(){

    let numero=parseInt(prompt("Introduce el número."));

    if(numero<19){

        alert("La diferencia es de "+Math.abs(19-numero));

    }else if(numero==19){

        alert("El número es igual a 19.");

    }else{

        alert("El doble de diferencia es de "+(Math.abs(numero-19)*3));

    }

});
//hecho
(function ejercicio18(){

    let numero1=parseInt(prompt("Introduce el número 1."));
    let numero2=parseInt(prompt("Introduce el número 2."));

    if(numero1==50){

        alert("El número 1 es igual a 50.");

        return true;

    }else if(numero2==50){

        alert("El número 2 es igual a 50.");

        return true;

    }else if(numero1+numero2==50){

        alert("La suma del número 1 y el 2 es 50.");

        return true;

    }

    return false;

});
//hecho
(function ejercicio28(){

    let numero1=parseInt(prompt("Introduce el número 1."));
    let numero2=parseInt(prompt("Introduce el número 2."));

    if(numero1>50 && numero1<99){

        alert("El número 1 está dentro del rango");

        return true;

    }

    if(numero2>50 && numero2<99){

        alert("El número 2 está dentro del rango");

        return true;

    }

    return false;

});