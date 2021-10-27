
//Ejercicio 1 de clases

function ejercicio1() {

    //Clase colegio
    class Colegio {

        constructor(nombre, numerosAulas, numeroAlumnos) {

            this.nombre = nombre;
            this.numerosAulas = numerosAulas;
            this.numeroAlumnos = numeroAlumnos;

        }
        //Método que cambia nota media del alumno
        modificarNotaMediaAlumno(DNIAlumno, nuevaNota) {

            let j = 0;

            while (j < this.numeroAlumnos.length) {

                if (this.numeroAlumnos[j].DNI == DNIAlumno) {

                    this.numeroAlumnos[j].modificarNotaMediaAlumno(nuevaNota);

                    alert("Nota cambiada a " + this.numeroAlumnos[j].notaMedia + ".");

                }

                j++;

            }

        }
        //Método que crea un nuevo alumno
        crearAlumno(DNI, nombre, notaMedia) {

            let alumno = new Alumno(DNI, nombre, notaMedia);
            this.numeroAlumnos.push(alumno);

            alumno.mostrar();

        }
        //Método que muestra el colegio y sus alumnos
        mostrar() {

            let mensajeAlumno = "";

            let i = 0;

            while (i < this.numeroAlumnos.length) {

                mensajeAlumno = mensajeAlumno + "DNI: " + this.numeroAlumnos[i].DNI + " Nombre: " + this.numeroAlumnos[i].nombre + " Nota media: " + this.numeroAlumnos[i].notaMedia + " \n";

                i++;

            }

            alert("Nombre: " + this.nombre + " Número de aulas: " + this.numerosAulas + " Número de alumnos: " + this.numeroAlumnos.length + "\nAlumnos: \n" + mensajeAlumno);

        }

    }
    //Clase alumno
    class Alumno {

        constructor(DNI, nombre, notaMedia) {

            this.DNI = DNI;
            this.nombre = nombre;
            this.notaMedia = notaMedia;

        }
        //Método que modifica la nota media del alumno
        modificarNotaMediaAlumno(nuevaNota) {

            this.notaMedia = nuevaNota;


        }
        //Método que muestra el alumno creado
        mostrar(numeroAlumnos, DNIAlumno) {

            alert("Alumno creado: \nDNI: " + this.DNI + " Nombre: " + this.nombre + " Nota media: " + this.notaMedia);

        }


    }
    //Función que crea los alumnos y los introduce en el array
    function creacionObjetos(numeroAlumnos) {

        //Creación de los objetos alumno e introducción en el array
        let alumno = new Alumno('45954612S', 'Javier', 7);
        numeroAlumnos.push(alumno);

        alumno = new Alumno('98487561L', 'Mario', 6);
        numeroAlumnos.push(alumno);

        alumno = new Alumno('97846145F', 'María', 8);
        numeroAlumnos.push(alumno);


    }
    //Función del menú principal
    function main() {

        //Creación del array
        var numeroAlumnos = [];

        creacionObjetos(numeroAlumnos);

        //Creación del objeto colegio
        let colegio = new Colegio('Mar de Cádiz', 30, numeroAlumnos);

        let opcion = 0;
        //Bucle del menú de opciones
        while (opcion != 4) {

            opcion = parseInt(prompt("1 para cambiar nota media de alumno. \n 2 para crear un alumno. \n 3 para mostrar el colegio con sus alumnos. \n 4 para salir."));

            switch (opcion) {
                //Opción para cambiar nota media del alumno
                case 1:

                    let DNIAlumno = (prompt("Introduce el DNI del alumno.")).toString();
                    let nuevaNota = parseInt(prompt("Introduce la nueva nota media del alumno."));

                    colegio.modificarNotaMediaAlumno(DNIAlumno, nuevaNota);

                    break;
                //Opción para crear paciente
                case 2:

                    let DNI = (prompt("Introduce el DNI del alumno.")).toString();
                    let nombre = (prompt("Introduce nombre del alumno.")).toString();
                    let notaMedia = parseInt(prompt("Introduce la nota media del alumno."));

                    colegio.crearAlumno(DNI, nombre, notaMedia);

                    break;
                //Opción para mostrar hospital
                case 3:

                    colegio.mostrar();

                    break;

            }

        }

    }

    main();

}

//Ejercicio 2 de clases

function ejercicio2() {

    //Clase aeropuerto
    class Aeropuerto {

        constructor(nombre, ciudad, numeroVuelosDiarios) {

            this.nombre = nombre;
            this.ciudad = ciudad;
            this.numeroVuelosDiarios = numeroVuelosDiarios;

        }
        //Método que cambia la hora de salida de un vuelo
        modificarHoraLlegada(codigoVuelo, nuevaHoraLlegada) {

            let i = 0;

            while (i < this.numeroVuelosDiarios.length) {

                if (this.numeroVuelosDiarios[i].codigo == codigoVuelo) {

                    this.numeroVuelosDiarios[i].modificarHoraLlegada(nuevaHoraLlegada);

                    alert("Hora de llegada cambiada a " + this.numeroVuelosDiarios[i].hora_llegada + ".");

                }

                i++;

            }

        }
        //Método que cambia la hora de salida de un vuelo
        modificarHoraSalida(codigoVuelo, nuevaHoraSalida) {

            let j = 0;

            while (j < this.numeroVuelosDiarios.length) {

                if (this.numeroVuelosDiarios[j].codigo == codigoVuelo) {

                    this.numeroVuelosDiarios[j].modificarHoraSalida(nuevaHoraSalida);

                    alert("Hora de salida cambiada a " + this.numeroVuelosDiarios[j].hora_salida + ".\n");

                }

                j++;

            }

        }
        //Método que comprueba la hora de llegada y salida de un vuelo
        comprobarHoras(codigoVuelo) {

            let h = 0, llegada = "", salida = "";

            while (h < this.numeroVuelosDiarios.length) {

                if (this.numeroVuelosDiarios[h].codigo == codigoVuelo) {

                    llegada = this.numeroVuelosDiarios[h].hora_llegada;
                    salida = this.numeroVuelosDiarios[h].hora_salida;

                    this.numeroVuelosDiarios[h].comprobarHoras(llegada, salida);

                }

                h++;

            }

        }
        //Método que crea un nuevo vuelo
        crearVuelo(codigo, hora_llegada, hora_salida) {

            let vuelo = new Vuelo(codigo, hora_llegada, hora_salida);
            this.numeroVuelosDiarios.push(vuelo);

            vuelo.mostrar();

        }
        //Método que muestra el aeropuerto y sus vuelos
        mostrar() {

            let mensajeVuelo = "";

            let i = 0;

            while (i < this.numeroVuelosDiarios.length) {

                mensajeVuelo = mensajeVuelo + "Código: " + this.numeroVuelosDiarios[i].codigo + " Hora de llegada: " + this.numeroVuelosDiarios[i].hora_llegada + " Hora de salida: " + this.numeroVuelosDiarios[i].hora_salida + "\n";

                i++;

            }

            alert("Nombre: " + this.nombre + " Ciudad: " + this.ciudad + " Número de vuelos diarios: " + this.numeroVuelosDiarios.length + "\nVuelos: \n" + mensajeVuelo);

        }

    }
    //Clase aeropuerto
    class Vuelo {

        constructor(codigo, hora_llegada, hora_salida) {

            this.codigo = codigo;
            this.hora_llegada = hora_llegada;
            this.hora_salida = hora_salida;

        }
        //Método que cambia la hora de salida de un vuelo
        modificarHoraLlegada(nuevaHoraLlegada) {

            this.hora_llegada = nuevaHoraLlegada;

        }
        //Método que cambia la hora de salida de un vuelo
        modificarHoraSalida(nuevaHoraSalida) {

            this.hora_salida = nuevaHoraSalida;

        }
        //Método que comprueba la hora de llegada y salida de un vuelo
        comprobarHoras(llegada, salida) {

            let horaLLegada = llegada.substr(0, 2);
            let horaSalida = salida.substr(0, 2);

            alert(llegada.substr(0, 2) + ":" + salida.substr(0, 2));

            if (horaSalida > horaLLegada) {

                alert("La hora de salida es superior a la hora de llegada.");

            } else if (horaSalida < horaLLegada) {

                alert("La hora de llegada es superior a la hora de salida.");

            } else {

                this.comprobarMinutos(llegada, salida);

            }

        }

        //Método que comprueba los minutos de la hora de llegada y salida de un vuelo
        comprobarMinutos(llegada, salida) {

            let minutoLLegada = llegada.substr(3, 4);
            let minutoSalida = salida.substr(3, 4);
            alert(minutoLLegada + ":" + minutoSalida);

            if (minutoSalida > minutoLLegada) {

                alert("La hora de salida es superior a la hora de llegada.");

            } else if (minutoSalida < minutoLLegada) {

                alert("La hora de llegada es superior a la hora de salida.");

            } else {

                alert("Las horas de llegada y salida son las mismas.");

            }

        }
        //Método que muestra el vuelo creado
        mostrar() {

            alert("Vuelo creado: \nCódigo: " + this.codigo + " Hora de llegada: " + this.hora_llegada + " Hora de salida: " + this.hora_salida)

        }


    }
    //Función que crea los vuelos y los introduce en el array
    function creacionObjetos(numeroVuelosDiarios) {

        //Creación de los objetos vuelo e introducción en el array
        let vuelo = new Vuelo(108, '18:00', '14:00');
        numeroVuelosDiarios.push(vuelo);

        vuelo = new Vuelo(21, '20:00', '17:00');
        numeroVuelosDiarios.push(vuelo);

        vuelo = new Vuelo(3, '12:00', '10:00');
        numeroVuelosDiarios.push(vuelo);

    }
    //Función del menú principal
    function main() {
        //Creación del array
        var numeroVuelosDiarios = [];

        creacionObjetos(numeroVuelosDiarios);

        //Creación del objeto aeropuerto
        let aeropuerto = new Aeropuerto('Barajas', 'Madrid', numeroVuelosDiarios);

        let opcion = 0, codigoVuelo = 0;
        //Bucle del menú de opciones
        while (opcion != 6) {
            opcion = parseInt(prompt("1 para cambiar la hora de llegada de un vuelo. \n 2 para cambiar la hora de salida de un vuelo. \n 3 para comprobar horas de llegada y salida. \n 4 para crear un vuelo. \n 5 para mostrar el aeropuerto con sus vuelos. \n 6 para salir."));
            //Selector de opciones
            switch (opcion) {
                //Opción para cambiar hora de llegada de vuelo
                case 1:

                    codigoVuelo = parseInt(prompt("Introduce código del vuelo."));
                    let nuevaHoraLlegada = (prompt("Introduce la nueva hora de llegada del vuelo.")).toString();

                    aeropuerto.modificarHoraLlegada(codigoVuelo, nuevaHoraLlegada);

                    break;
                //Opción para cambiar hora de salida de vuelo
                case 2:

                    codigoVuelo = parseInt(prompt("Introduce código del vuelo."));
                    let nuevaHoraSalida = (prompt("Introduce la nueva hora de salida del vuelo.")).toString();

                    aeropuerto.modificarHoraSalida(codigoVuelo, nuevaHoraSalida);

                    break;
                //Opción para comprobar hora de llegada y salida de vuelo
                case 3:

                    codigoVuelo = parseInt(prompt("Introduce código del vuelo a comprobar."));

                    aeropuerto.comprobarHoras(codigoVuelo);

                    break;
                //Opción para crear vuelo
                case 4:

                    let codigo = parseInt(prompt("Introduce el número del vuelo."));
                    let hora_llegada = (prompt("Introduce la hora de llegada del vuelo.")).toString();
                    let hora_salida = (prompt("Introduce la hora de salida del vuelo.")).toString();

                    aeropuerto.crearVuelo(codigo, hora_llegada, hora_salida);

                    break;
                //Opción para mostrar aeropuerto
                case 5:

                    aeropuerto.mostrar();

                    break;

            }

        }

    }

    main();
}

//Ejercicio 3  de clases

function ejercicio3() {

    //Clase hospital
    class Hospital {

        constructor(nombre, ciudad, numPacientes) {

            this.nombre = nombre;
            this.ciudad = ciudad;
            this.numPacientes = numPacientes;

        }
        //Método que elimina a un paciente según su DNI
        altaPaciente(DNIPaciente) {

            let i = 0;

            while (i < this.numPacientes.length) {

                if (this.numPacientes[i].DNI == DNIPaciente) {

                    this.numPacientes.splice(i, 1);

                    alert("El paciente ha sido dado de alta.");

                }

                i++;

            }

        }
        //Método que crea un nuevo paciente
        crearPaciente(DNI, nombre, enfermedad) {

            let paciente = new Paciente(DNI, nombre, enfermedad);
            this.numPacientes.push(paciente);

            paciente.mostrar();

        }
        //Método que muestra el hospital y sus pacientes
        mostrar() {

            let mensajePaciente = "";

            let i = 0;

            while (i < this.numPacientes.length) {

                mensajePaciente = mensajePaciente + "DNI: " + this.numPacientes[i].DNI + " Nombre: " + this.numPacientes[i].nombre + " Enfermedad: " + this.numPacientes[i].enfermedad + " \n";

                i++;

            }

            alert("Nombre: " + this.nombre + " Ciudad: " + this.ciudad + " Enfermedad: " + this.numPacientes.length + "\nPacientes: \n" + mensajePaciente);

        }

    }
    //Clase paciente
    class Paciente {

        constructor(DNI, nombre, enfermedad) {

            this.DNI = DNI;
            this.nombre = nombre;
            this.enfermedad = enfermedad;

        }
        //Método que muestra el paciente creado
        mostrar() {

            alert("Paciente creado: \nDNI: " + this.DNI + " Nombre: " + this.nombre + " Enfermedad: " + this.enfermedad)

        }

    }
    //Función que crea los vuelos y los introduce en el array
    function creacionObjetos(numPacientes) {

        //Creación de los objetos paciente e introducción en el array
        let paciente = new Paciente('45954612S', 'Javier', 'Hemorragia');
        numPacientes.push(paciente);

        paciente = new Paciente('98487561L', 'Mario', 'Apendicitis');
        numPacientes.push(paciente);

        paciente = new Paciente('97846145F', 'María', 'Infarto');
        numPacientes.push(paciente);

    }
    //Función del menú principal
    function main() {
        //Array de pacientes
        var numPacientes = [];

        creacionObjetos(numPacientes);

        //Creación del objeto hospital
        let hospital = new Hospital('La arboleda', 'Cádiz', numPacientes);

        let opcion = 0;
        //Bucle del menú de opciones
        while (opcion != 4) {

            opcion = parseInt(prompt("1 para de alta a un paciente. \n 2 para crear un paciente. \n 3 para mostrar el hospital con sus pacientes. \n 4 para salir."));
            //Selector de opciones
            switch (opcion) {
                //Opción para eliminar paciente
                case 1:

                    let DNIPaciente = (prompt("Introduce el DNI del paciente.")).toString();

                    hospital.altaPaciente(DNIPaciente);

                    break;
                //Opción para crear paciente
                case 2:

                    let DNI = (prompt("Introduce el DNI del paciente.")).toString();
                    let nombre = (prompt("Introduce nombre del paciente.")).toString();
                    let enfermedad = (prompt("Introduce la enfermedad del paciente.")).toString();

                    hospital.crearPaciente(DNI, nombre, enfermedad);

                    break;
                //Opción para mostrar hospital
                case 3:

                    hospital.mostrar();

                    break;

            }

        }

    }

    main();

}
