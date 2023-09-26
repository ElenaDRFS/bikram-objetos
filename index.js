let Coche = {
    marca: " ",
    modelo: ' ',
    matricula: '',
}

let Casa = {
    codPostal: '',
    calle:'',
    portal:'',
    piso:'',
}

let FullStackDeveloper = { 
    lenguajes :[],
    proyectos:[],
}

let Perro = {
    nombre:'',
    raza: '',
    color:  '',
    edad: '',
    ladrar: function(){
        console.log('guau');
    },
    popo: function(){
        return Math.random() *  3;
    },
}

let marcaPortatil = Portatil.marca;

let marcaPortatil2 = Portatil ['marca'];

let grupos = Concierto.grupos;

let RGB = [Led.rojo, Led.verde, Led.azul];

Portatil.modelo = 'P345';

Concierto.cartelera.push("Guns N' Roses");

Concierto.fecha = new Date();

Impresora.imprimiendo = {
    nombreArchivo:'',
    copias: '',
    numPaginas: ''
}

Noticia = {
    titular: '',
    cuerpo:'',
}

Persona = {
    nombre:'',
    apellidos:'',
    edad:'',
}

Avion = {
    numPasajeros:'',
    despegar: function(){
        console.log('despegando');
    },
    volar: function(){
        console.log('llegando al destino');
    },
    aterrizar: function(){
        console.log('aterrizando');
    }
}   

Paquete = {
    contenido:[''],
}

Pais = {
    numHabitantes:'',
    continente:'',
    gentilicio:'',
}

let codError = O_Error.codigo;

let integrantes = Grupo.integrantes;

let nivelesTinta = Impresora.tinta;

let pixeles = Pantalla.pixeles;

let especificaciones = Movil['especificaciones'];

Grupo.numIntegrantes = 5;

Pantalla.dimensiones = '1920x1080';

Led.encendido = !Led.encendido

Movil.temperatura = '20º';


