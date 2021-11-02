
(function ejercicio1(){

    document.open();
    document.write("<p>Nombre: Francisco</p>");
    document.write("<p>Edad: 20<p>");
    document.close();

});

(function ejercicio2(){

    let nombre="Javier";
    let sueldo=1850;
    nombre=nombre.toString();
    sueldo=parseInt(sueldo);

    document.open();
    document.write("<p>Nombre del empleado: "+nombre+"</p>");
    document.write("<p>Sueldo del empleado: "+sueldo+"</p>");
    document.close();

});

(function ejercicio3(){

    let nombre=prompt("Introduce el nombre del usuario.");
    let email=prompt("Introduce el email.");

    document.open();
    document.write("<p>Nombre del usuario: "+nombre+"</p>");
    document.write("<p>Email: "+email+"<p>");
    document.close();

});

(function ejercicio4(){

    let lado=parseInt(prompt("Introduce la longitud del lado de un cuadrado."));

    document.open();
    document.write("Perímetro del cuadrado: "+lado*4);
    document.close();

});

(function ejercicio5(){

    let numero1=parseInt(prompt("Introduce el número 1."));
    let numero2=parseInt(prompt("Introduce el número 2."));
    let numero3=parseInt(prompt("Introduce el número 3."));
    let numero4=parseInt(prompt("Introduce el número 4."));

    document.open();
    document.write("<p>Suma del número 1 y 2: "+(numero1+numero2)+"</p>");
    document.write("<p>Producto del número 3 y 4: "+numero3*numero4+"</p>");
    document.close();

});

(function ejercicio6(){

    let nota1=parseInt(prompt("Introduce la nota 1."));
    let nota2=parseInt(prompt("Introduce la nota 2."));
    let nota3=parseInt(prompt("Introduce la nota 3."));

    let promedio=(nota1+nota2+nota3)/3;

    if(promedio>=7){

        document.open();
        document.write("Promocionado.");
        document.close();

    }else{

        document.open();
        document.write("No promocionado.");
        document.close();

    }

});

(function ejercicio7(){

    let clave1=prompt("Introduce la clave 1.");
    let clave2=prompt("Introduce la clave 2.");

    if(clave1==clave2){

        document.open();
        document.write("Son iguales.");
        document.close();

    }else{

        document.open();
        document.write("No son iguales.");
        document.close();

    }

});