
//Ejercicio 1 de clases

function ejercicio1() {
    //Clase colegio
    class Colegio {

        constructor(nombre, numerosAulas, numeroAlumnos) {

            this.nombre = nombre;
            this.numerosAulas = numerosAulas;
            this.numeroAlumnos = numeroAlumnos;

        }
        //Método que muestra el colegio y sus alumnos
        mostrar() {

            let mensajeAlumno = "";

            let i = 0;

            while (i < this.numeroAlumnos.length) {

                mensajeAlumno = mensajeAlumno + "DNI: " + numeroAlumnos[i].DNI + " Nombre: " + numeroAlumnos[i].nombre + " Nota media: " + numeroAlumnos[i].notaMedia + " \n";

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
        //Método que cambia nota media del alumno
        modificarNotaMediaAlumno(numeroAlumnos, DNIAlumno, nuevaNota) {

            let j = 0;

            while (j < numeroAlumnos.length) {

                if (numeroAlumnos[j].DNI == DNIAlumno) {

                    numeroAlumnos[j].notaMedia = nuevaNota;

                    alert("Nota cambiada a " + numeroAlumnos[j].notaMedia + ".");

                }

                j++;

            }

        }
        //Método que muestra el alumno creado
        mostrar(numeroAlumnos, DNIAlumno) {

            alert("Alumno creado: \nDNI: " + this.DNI + " Nombre: " + this.nombre + " Nota media: " + this.notaMedia);

        }
        //Método que crea un nuevo alumno
        crearAlumno(numeroAlumnos, alumno) {

            let DNI = 0, nombre = "", notaMedia = "";

            DNI = (prompt("Introduce el DNI del alumno.")).toString();
            nombre = (prompt("Introduce nombre del alumno.")).toString();
            notaMedia = parseInt(prompt("Introduce la nota media del alumno."));

            alumno = new Alumno(DNI, nombre, notaMedia);
            numeroAlumnos.push(alumno);

            alumno.mostrar();

        }

    }
    //Función del menú principal
    function main() {
        //Array de alumnos
        var numeroAlumnos = [];
        //Creación de los objetos alumno e introducción en el array
        let alumno = new Alumno('45954612S', 'Javier', 7);
        numeroAlumnos.push(alumno);

        alumno = new Alumno('98487561L', 'Mario', 6);
        numeroAlumnos.push(alumno);

        alumno = new Alumno('97846145F', 'María', 8);
        numeroAlumnos.push(alumno);
        //Creación del objeto colegio
        let colegio = new Colegio('Mar de Cádiz', 30, numeroAlumnos);

        let opcion = 0, DNIAlumno = "", nuevaNota = 0;
        //Bucle del menú de opciones
        while (opcion != 4) {

            opcion = parseInt(prompt("1 para cambiar nota media de alumno. \n 2 para crear un alumno. \n 3 para mostrar el colegio con sus alumnos. \n 4 para salir."));

            switch (opcion) {
                //Opción para cambiar nota media del alumno
                case 1:

                    DNIAlumno = (prompt("Introduce el DNI del alumno.")).toString();
                    nuevaNota = parseInt(prompt("Introduce la nueva nota media del alumno."));
                    alumno.modificarNotaMediaAlumno(numeroAlumnos, DNIAlumno, nuevaNota);

                    break;
                //Opción para crear paciente
                case 2:

                    alumno.crearAlumno(numeroAlumnos, alumno);

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
        //Método que muestra el aeropuerto y sus vuelos
        mostrar() {

            let mensajeVuelo = "";

            let i = 0;

            while (i < this.numeroVuelosDiarios.length) {

                mensajeVuelo = mensajeVuelo + "Código: " + numeroVuelosDiarios[i].codigo + " Hora de llegada: " + numeroVuelosDiarios[i].hora_llegada + " Hora de salida: " + numeroVuelosDiarios[i].hora_salida + "\n";

                i++;

            }

            alert("Nombre: " + this.nombre + " Ciudad: " + this.ciudad + " Número de vuelos diarios: " + this.numeroVuelosDiarios.length + "\nVuelos: \n" + mensajeVuelo);

        }

    }
    //Clase vuelo
    class Vuelo {

        constructor(codigo, hora_llegada, hora_salida) {

            this.codigo = codigo;
            this.hora_llegada = hora_llegada;
            this.hora_salida = hora_salida;

        }
        //Método que cambia la hora de salida de un vuelo
        modificarHoraLlegada(numeroVuelosDiarios, codigoVuelo, nuevaHoraLlegada) {

            let i = 0;

            while (i < numeroVuelosDiarios.length) {

                if (numeroVuelosDiarios[i].codigo == codigoVuelo) {

                    numeroVuelosDiarios[i].hora_llegada = nuevaHoraLlegada;

                    alert("Hora de llegada cambiada a " + numeroVuelosDiarios[i].hora_llegada + ".");

                }

                i++;

            }

        }
        //Método que cambia la hora de salida de un vuelo
        modificarHoraSalida(numeroVuelosDiarios, codigoVuelo, nuevaHoraSalida) {

            let j = 0;

            while (j < numeroVuelosDiarios.length) {

                if (numeroVuelosDiarios[j].codigo == codigoVuelo) {

                    numeroVuelosDiarios[j].hora_salida = nuevaHoraSalida;

                    alert("Hora de salida cambiada a " + numeroVuelosDiarios[j].hora_salida + ".\n");

                }

                j++;

            }

        }
        //Método que comprueba la hora de llegada y salida de un vuelo
        comprobarHoras(numeroVuelosDiarios, codigoVuelo) {

            let h = 0, llegada = "", salida = "", horaLLegada = 0, horaSalida = 0;

            while (h < numeroVuelosDiarios.length) {

                if (numeroVuelosDiarios[h].codigo == codigoVuelo) {

                    llegada = numeroVuelosDiarios[h].hora_llegada;
                    horaLLegada = llegada.substring(0, 1);
                    salida = numeroVuelosDiarios[h].hora_salida;
                    horaSalida = salida.substring(0, 1);

                    if (horaSalida > horaLLegada) {

                        alert("La hora de salida es superior a la hora de llegada.");

                    } else {

                        alert("La hora de llegada es superior a la hora de salida.");

                    }

                }

                h++;

            }

        }
        //Método que muestra el vuelo creado
        mostrar() {

            alert("Vuelo creado: \nCódigo: " + this.codigo + " Hora de llegada: " + this.hora_llegada + " Hora de salida: " + this.hora_salida)

        }
        //Método que crea un nuevo vuelo
        crearVuelo(numeroVuelosDiarios, vuelo) {

            let codigo = 0, hora_llegada = "", hora_salida = "";

            codigo = parseInt(prompt("Introduce el número del vuelo."));
            hora_llegada = (prompt("Introduce la hora de llegada del vuelo.")).toString();
            hora_salida = (prompt("Introduce la hora de salida del vuelo.")).toString();

            vuelo = new Vuelo(codigo, hora_llegada, hora_salida);
            numeroVuelosDiarios.push(vuelo);

            vuelo.mostrar();

        }

    }
    //Función del menú principal
    function main() {
        //Array de vuelos
        var numeroVuelosDiarios = [];
        //Creación de los objetos vuelo e introducción en el array
        let vuelo = new Vuelo(108, '18:00', '14:00');
        numeroVuelosDiarios.push(vuelo);

        vuelo = new Vuelo(21, '20:00', '17:00');
        numeroVuelosDiarios.push(vuelo);

        vuelo = new Vuelo(03, '12:00', '10:00');
        numeroVuelosDiarios.push(vuelo);
        //Creación del objeto aeropuerto
        let aeropuerto = new Aeropuerto('Barajas', 'Madrid', numeroVuelosDiarios);

        let opcion = 0, codigoVuelo = 0, nuevaHoraLlegada0 = "", nuevaHoraSalida = "";
        //Bucle del menú de opciones
        while (opcion != 6) {
            opcion = parseInt(prompt("1 para cambiar la hora de llegada de un vuelo. \n 2 para cambiar la hora de salida de un vuelo. \n 3 para comprobar horas de llegada y salida. \n 4 para crear un vuelo. \n 5 para mostrar el aeropuerto con sus vuelos. \n 6 para salir."));
            //Selector de opciones
            switch (opcion) {
                //Opción para cambiar hora de llegada de vuelo
                case 1:

                    codigoVuelo = parseInt(prompt("Introduce código del vuelo."));
                    nuevaHoraLlegada = (prompt("Introduce la nueva hora de llegada del vuelo.")).toString();
                    vuelo.modificarHoraLlegada(numeroVuelosDiarios, codigoVuelo, nuevaHoraLlegada);

                    break;
                //Opción para cambiar hora de salida de vuelo
                case 2:

                    codigoVuelo = parseInt(prompt("Introduce código del vuelo."));
                    nuevaHoraSalida = (prompt("Introduce la nueva hora de salida del vuelo.")).toString();
                    vuelo.modificarHoraSalida(numeroVuelosDiarios, codigoVuelo, nuevaHoraSalida);

                    break;
                //Opción para comprobar hora de llegada y salida de vuelo
                case 3:

                    codigoVuelo = parseInt(prompt("Introduce código del vuelo a comprobar."));
                    vuelo.comprobarHoras(numeroVuelosDiarios, codigoVuelo);

                    break;
                //Opción para crear vuelo
                case 4:

                    vuelo.crearVuelo(numeroVuelosDiarios, vuelo);

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
        //Método que muestra el hospital y sus pacientes
        mostrar() {

            let mensajePaciente = "";

            let i = 0;

            while (i < this.numPacientes.length) {

                mensajePaciente = mensajePaciente + "DNI: " + numPacientes[i].DNI + " Nombre: " + numPacientes[i].nombre + " Enfermedad: " + numPacientes[i].enfermedad + " \n";

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
        //Método que elimina a un paciente según su DNI
        altaPaciente(numPacientes, DNIPaciente) {

            let i = 0;

            alert("Lista de pacientes antes: " + numPacientes.length);

            while (i < numPacientes.length) {

                if (numPacientes[i].DNI == DNIPaciente) {

                    numPacientes.splice(i, 1);

                    alert("El paciente ha sido dado de alta.");

                    //alert("Lista de pacientes después: " + numPacientes.length);

                }

                i++;

            }

            alert("Lista de pacientes después: " + numPacientes.length);

        }
        //Método que muestra el paciente creado
        mostrar() {

            alert("Paciente creado: \nDNI: " + this.DNI + " Nombre: " + this.nombre + " Enfermedad: " + this.enfermedad)

        }
        //Método que crea un nuevo paciente
        crearPaciente(numPacientes, paciente) {

            let DNI = 0, nombre = "", enfermedad = "";

            DNI = (prompt("Introduce el DNI del paciente.")).toString();
            nombre = (prompt("Introduce nombre del paciente.")).toString();
            enfermedad = (prompt("Introduce la enfermedad del paciente.")).toString();

            paciente = new Paciente(DNI, nombre, enfermedad);
            numPacientes.push(paciente);

            paciente.mostrar();

        }

    }
    //Función del menú principal
    function main() {
        //Array de pacientes
        var numPacientes = [];
        //Creación de los objetos paciente e introducción en el array
        let paciente = new Paciente('45954612S', 'Javier', 'Hemorragia');
        numPacientes.push(paciente);

        paciente = new Paciente('98487561L', 'Mario', 'Apendicitis');
        numPacientes.push(paciente);

        paciente = new Paciente('97846145F', 'María', 'Infarto');
        numPacientes.push(paciente);
        //Creación del objeto hospital
        let hospital = new Hospital('La arboleda', 'Cádiz', numPacientes);

        let opcion = 0, DNIPaciente = "";
        //Bucle del menú de opciones
        while (opcion != 4) {

            opcion = parseInt(prompt("1 para de alta a un paciente. \n 2 para crear un paciente. \n 3 para mostrar el hospital con sus pacientes. \n 4 para salir."));
            //Selector de opciones
            switch (opcion) {
                //Opción para eliminar paciente
                case 1:

                    DNIPaciente = (prompt("Introduce el DNI del paciente.")).toString();
                    paciente.altaPaciente(numPacientes, DNIPaciente);

                    break;
                //Opción para crear paciente
                case 2:

                    paciente.crearPaciente(numPacientes, paciente);

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
