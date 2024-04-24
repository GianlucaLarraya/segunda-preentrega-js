/* OBJETOS */

    class Alumno {

    constructor(nombre, apellido, edad, cinturon) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.cinturon = cinturon;
    }

    }
/* FUNCIONES */

    function registrarAlumno(alumnos){

        let alumno = new Alumno()
    
        do {
              alumno.nombre = prompt("Ingrese el nombre: ")
            if (alumno.nombre.trim() === "" ) {
                alert("Ingrese un nombre valido!")
            }
        } while (alumno.nombre.trim() === "");
    
        do {
            alumno.apellido = prompt("Ingrese el apellido: ")
           if (alumno.apellido.trim() === "" ) {
               alert("Ingrese un apellido valido!")
           }
       } while (alumno.apellido.trim() === "")

        do {
            alumno.edad = parseInt(prompt("Ingrese la edad"))
           if ( alumno.edad < 13) {
            alert("No admitimos alumnos de esas edad. Lo lamentamos ")
           }
       } while ( alumno.edad < 13 )

       let cinturon_min = ""

       do {

        alumno.cinturon = prompt("Ingrese el color del cinturon: ")
        cinturon_min = (alumno.cinturon).toLowerCase()

        if ((cinturon_min.trim() === "") || ( !["blanco", "azul", "violeta", "marron", "negro"].includes(cinturon_min)) ) {
            alert("Ingrese un color valido!")
        }
        } while ( (cinturon_min.trim() === "") || ( !["blanco", "azul", "violeta", "marron", "negro"].includes(cinturon_min) ) ) ;

        alumnos.push(alumno)

    }

    function mostrarAlumnos(alumnos){

        if ( alumnos.length === 0 ) {
            alert("Todavia no hay alumnos para mostrar")
        }

        else {

            for ( const alumno of alumnos) {
                console.log(`Nombre: ${alumno.nombre} Apellido: ${alumno.apellido}
                Edad: ${alumno.edad}
                Cinturon: ${alumno.cinturon}`)
            }
        
            alert("Alumnos mostrados en consola.")
        }


    }

    function filtrarAlumnosPorCinturon(alumnos){

        let opcion = ""
        let opcion_min = opcion.toLowerCase()

        do {
             opcion = prompt("Ingrese el color de cinturon a buscar: ")
             opcion_min = opcion.toLowerCase()

          if ((opcion_min.trim() === "") || ( !["blanco", "azul", "violeta", "marron", "negro"].includes(opcion_min) )) {
              alert("Ingrese un color valido!")
          }
      } while ( (opcion_min.trim() === "") || ( !["blanco", "azul", "violeta", "marron", "negro"].includes(opcion_min) ) ) ;

        const busqueda = alumnos.filter((alumno) => (alumno.cinturon).toLowerCase() === opcion_min )

        if ( busqueda.length === 0 ) {
            alert("Todavia no hay alumnos para mostrar con ese cinturon")
        }

        else {

            for ( const alumno of busqueda) {
                console.log(`Nombre: ${alumno.nombre} Apellido: ${alumno.apellido}
                Edad: ${alumno.edad}
                Cinturon: ${alumno.cinturon}`)
            }
        
            alert("Alumnos encontrados mostrados en consola.")
        }

        
    }

    function despedirUsuario(){
    alert("Muchas gracias por usar el programa.\nPrograma finalizado.")
    }

/* Inicio del programa */

 let texto_bienvenida = `Bienvenido al Software de admision de Samuray Jiu Jitsu!
 Pulse 1 para registrar un alumno
 Pulse 2 para mostrar todos los alumnos en consola
 Pulse 3 para buscar alumnos por color de cinturon
 Pulse 0 para salir`;

let opcion = parseInt(prompt(`${texto_bienvenida}`))

let listaDeAlumnos = [];


while ( opcion != 0) {


    switch(opcion) {

        case 1: 
        registrarAlumno(listaDeAlumnos);
        break;

        case 2: 
        mostrarAlumnos(listaDeAlumnos);
        break;

        case 3:
        filtrarAlumnosPorCinturon(listaDeAlumnos);
        break;

        default:
        alert("Opcion invalida")
        break;


    }

    opcion = parseInt(prompt(`${texto_bienvenida}`))

}

despedirUsuario()
