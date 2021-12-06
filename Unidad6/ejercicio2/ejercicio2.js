window.onload=iniciar;

function iniciar() {

    cargar();

    document.getElementById("btnIniciar").onclick = inicio;
    document.getElementById("btnParar").onclick = parar;

}

let cargar=()=>{

    var palabra="inteligencia";

    let array=[];

    for(let i=0; i<palabra.length; i++){

        array.push(palabra.charAt(i));

    }

    return array;

};

function inicio(){

    let letras=cargar();

    var textbox=document.getElementById("fila");

    if(document.getElementsByName("letra").length==0){

        for(let i=0; i<letras.length; i++){

            var campo=document.createElement("input");
            campo.type="text";
            campo.className ="textbox1 arial text-center margin-vertical5";
            campo.maxLength=1;
            campo.name="letra";
            textbox.appendChild(campo);
    
        }

    }else{

        for(let i=0; i<document.getElementsByName("letra").length; i++){

            document.getElementsByName("letra")[i].value="";

        }

    }

}

function parar(){

    let letras=cargar();

    var textbox=document.getElementById("fila");

    for(let i=0; i<letras.length; i++){

        var texto=document.getElementsByName("letra")[i];

        if(texto.value!=letras[i]){

            texto.classList.add("error");

        }

    }

}
