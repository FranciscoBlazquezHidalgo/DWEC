var festivales = {
    "Festival": "Navar-Pop",
    "Ciudad": "Ablitas",
    "Anno": 2018,
    "Grupos": [
        {
            "nombre": "Love of lesbian",
            "compañia": "Warner Music",
            "discos": [
                "Microscopic Movies",
                "Is it Fiction?",
                "Ungravity",
                "Maniobras de escapismo",
                "Cuentos chinos para niños del Japón",
                "1999",
                "La noche eterna. Los días no vividos",
                "El poeta Halley"
            ]
        },
        {
            "nombre": "Izal",
            "compañia": "Autoeditado",
            "discos": [
                "Teletransporte",
                "Magia y efectos especiales",
                "Agujeros de gusano",
                "Copacabana",
                "VIVO",
                "Autoterapia"
            ]
        },
        {
            "nombre": "Miss Caffeina",
            "compañia": "Warner Music",
            "discos": [
                "Imposibilidad del fenómeno",
                "De polve y flores",
                "Detroit"
            ]
        }]
}

window.onload = iniciar;
//Función que al cargar la página genera el contenido
function iniciar() {

    generar();

}
//Función que genera el contenido
function generar() {
    //Introduce el texto de los valores básicos del concierto
    document.getElementById("nombre").innerHTML = "Festival: " + festivales.Festival;
    document.getElementById("ciudad").innerHTML = "Ciudad: " + festivales.Ciudad;
    document.getElementById("año").innerHTML = "Año: " + festivales.Anno;
    //Introduce el texto de los nombres de cada grupo del concierto
    document.getElementById("grupo1").innerHTML = festivales.Grupos[0].nombre;
    document.getElementById("grupo2").innerHTML = festivales.Grupos[1].nombre;
    document.getElementById("grupo3").innerHTML = festivales.Grupos[2].nombre;
    //Introduce el texto de las compañías de cada grupo del concierto
    document.getElementById("compañia1").innerHTML ="Compañía: "+ festivales.Grupos[0].compañia;
    document.getElementById("compañia3").innerHTML ="Compañía: "+festivales.Grupos[1].compañia;
    document.getElementById("compañia2").innerHTML ="Compañía: "+festivales.Grupos[2].compañia;

    let lista1 = document.getElementById("lista1");
    //Crea la lista de los discos del grupo 1
    for (let i = 0; i < festivales.Grupos[0].discos.length; i++) {

        var li = document.createElement("li");

        var texto = festivales.Grupos[0].discos[i];

        li.appendChild(document.createTextNode(texto));

        lista1.appendChild(li);

    }

    let lista2 = document.getElementById("lista2");
    //Crea la lista de los discos del grupo 2
    for (let i = 0; i < festivales.Grupos[1].discos.length; i++) {

        var li = document.createElement("li");

        var texto = festivales.Grupos[1].discos[i];

        li.appendChild(document.createTextNode(texto));

        lista2.appendChild(li);

    }

    let lista3 = document.getElementById("lista3");
    //Crea la lista de los discos del grupo 3
    for (let i = 0; i < festivales.Grupos[2].discos.length; i++) {

        var li = document.createElement("li");

        var texto = festivales.Grupos[2].discos[i];

        li.appendChild(document.createTextNode(texto));

        lista3.appendChild(li);

    }

}