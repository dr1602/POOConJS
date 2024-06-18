// objeto literal
const Riley  = {
    // propiedades
    nombre: 'Riley ',
    segundoNombre: 'Elphaba ',
    apellido: 'Andersen',
    edad: 13,
    cursosAprobados: [
        'Curso Definitivo de HTML y CSS',
        'Curso Práctico de HTML y CSS'
    ],
    residencia: 'San Francisco',

    // Crearemos positvos

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    },

}; 

// Hacer que Riley aprueba otro curso

// Riley.cursosAprobados.push('Curso de Responsive Design');

function Student (name, age, emocion, cursosAprobados, adress, ) {
    this.name = name;
    this.age = age;
    this.emocion = emocion
    this.cursosAprobados = cursosAprobados;
    this.adress = adress
    this.aprobarCurso = function(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

// creamos un metodo para nuestro metodo student por fuera de la funcion o prototipo, usando la herramienta prototupe, para crear los que queramos
Student.prototype.agregarEmocion = function(nuevaEmocion) {
    this.emocion.push(nuevaEmocion);
}

// crearemos una nueva instancia del prototupo con la palabra reservada new

const Vale = new Student(
    'Val Ortiz',
    15,
    [
        'Alegria',
        'Tristeza',
        'Ansiedad'
    ],
    [
        'Curso de Intro a la Prod de Videojuegos',
        'Curso de creacion de personajes'
    ],
    'San Francisco'
)

// Prototipos con la sintaxis de Clases

class IntensamenteCharacter {
    constructor({
        friends = [],
        name, 
        age, 
        emotions,
        adress,
        team = '',
    }) {
        this.name = name;
        this.age = age;
        this.emotions = emotions;
        this.adress = adress;
        this.friends = friends;
        this.team = team;
    }

    crearEmocion(nuevaEmocion) {
        this.emotions.push(nuevaEmocion);
    }
}

const Bree = new IntensamenteCharacter({    
    age: 12,
    name: 'Breonna "Bree" Young',
    adress: 'San Francisco',
    emotions: [
        'Alegria',
        'Tristeza',
        'Furia',
        'Desagrado'
    ],
})

// Otro uso de los objetos, si tenemos muchos metodos
// podemos recibir un parametro del tipo objeto, parra recibir los parametros de antes

// Crearemos estudiantes con OBJETOS LITERALES

const Alegria = {
    name: 'Alegria',
    jobLocaton: 'Cuartel General',
    energyType: 'Femenina',
    age: 13,
    // Los objetos pueden guardar objetos
    responsabilities: {
        cuartel: 'Ser lider',
        human: 'Dar felicidad',
        otras: undefined,
    },
    friends: [
        'Tristeza',
        'Desgrado',
    ],
    learningPaths: [
        {
            name: 'Escuela de Desarrollo Web',
            courses: [
                'Curso Definitivo de HTML y CSS',
                'Curso Practio de HTML y CSS',
                'Curso de Responsive Design'
            ],
        },
        {
            name: 'Escuela de Videojuegos',
            courses: [
                'Curso de Diseño de Personajes',
                'Curso de Unreal Engine',
                'Curso de Unity en 3D'
            ],
        }
    ]
}

const Furia = {
    name: 'Furia',
    jobLocaton: 'Cuartel General',
    energyType: 'Masculina',
    age: 13,
    // Los objetos pueden guardar objetos
    responsabilities: {
        cuartel: 'Dar Apoyo',
        human: 'Dar capacidad de expresion',
        otras: undefined,
    },
    friends: [
        'Temor',
        'Desgrado',
        'Alegria',
    ],
    learningPaths: [
        {
            name: 'Escuela de Desarrollo Web',
            courses: [
                'Curso Definitivo de HTML y CSS',
                'Curso Practio de HTML y CSS',
            ],
        },
        {
            name: 'Escuela de Data Science',
            courses: [
                'Curso de DataBusiness',
                'Curso de Tableau',
            ],
        }
    ]
}

// Tendriamos que modificar estudiante por estudiante, es rapido comenzar pero no es escalable.

// PROGRAMACION ORIENTADA A OBJETOS CON CLASES PARA CREAR INSTANCIAS

class AdvancedEmotion {
    constructor({
        name,
        human,
        jobLocaton,
        energyType,
        age = undefined,
        responsabilities = {},
        friends = {},
        learningPaths = {},
    }) {
        this.name = name;
        this.human = human;
        this.jobLocaton = jobLocaton;
        this.energyType = energyType;
        this.age = age;
        this.responsabilities = responsabilities;
        this.friends = friends;
        this.learningPaths = learningPaths;
    }
}

// Ejercicio para crear learning paths

class learningPath {
    constructor({
        name = '', 
        escuela = '',
        subpaths = {},
    }) {
        this.name = name;
        this.name = escuela;
        this.subpaths = subpaths;
    }
}

class moduleCreator {
    constructor({
        module = {}, 
    }) {
        this.module = module;
    }
}

class coursesCreator {
    constructor({
        courses = {}, 
    }) {
        this.courses = courses;
    }
}

const FrontDeveloper = new coursesCreator ({
    courses : {
        'Curso de Frontend Developer' : [
            'Inicia tu camino como Frontend Developer',
            '¿Qué es HTML y CSS? ¿Para qué sirven?',
            'Motores de render: de archivos a píxeles',
        ],
        'Curso Practico de Frontend Developer' : [
            '¿Ya tomaste el Curso de Frontend Developer?',
            'Buenas prácticas de CSS: reflexión y advertencias',
            'Identifica las pantallas de tu proyecto',
        ],
        'Curso Practico de JS' : [
            '¿Ya tomaste el Curso Básico de JavaScript?',
            'Test de JS',
            'Variables',
        ]
    }
})

const FundamentosDesarrollo = new moduleCreator ({
    module : {
        'Fundamentos de desarrollo web' : [
            FrontDeveloper
        ]
    }
})

const FrontendProfundoReact = new learningPath({
    name: 'Frontend a profundidad con React.js',
    escuela: 'Desarrollo Web',
    subpaths: {
        FundamentosDesarrollo,
        'React.js a profundidad' : [
            'Curso de React.js: Patrones de Render y Composicion',
            'Curso de React.js: Manejo Profesional del Estado',
            'Curso de React.js: Navegacion con React Router',
            'Curso de Webpack',
            'Curso de React.js con Vite.js y TailwindCSS',
            'Curso Profesional de React.js y Redux',
        ],
        'Frameworks y Desarrollo movil con React.js' : [
            'Curso de Next.js: Sitios Estaticos y Jamstack',
            'Curso de Next.js: Optimizacion y Deploy a Produccion',
            'Curso de Next.js: Internacionalizacion de Aplicaciones Web',
        ]
    }
});

const FullStackJS = new learningPath({
    name: 'Full Stack Developer con JavaScript',
    escuela: 'Desarrollo Web',
    subpaths: {
        FundamentosDesarrollo,
        'Configura tu entorno de trabajo' : [
            'Curso de Configuracion de Entorno de Desarrollo',
            'Curso de Introduccion a la Terminal y Lindea de Comandos',
            'Curso Profesional de Git y Github',
        ],
        'Desarrolla el frontend de tu aplicación' : [
            'Curso de Frontend Developer',
            'Curso Practico de Frontend Developer',
            'Curso de JS desde Cero',
        ],
        'Crea el Backend, intégralo a bases de datos y despliega en producción' : [
            'Curso de Introduccion al Desarrollo Backend',
            'Curso de Fundamentos de Bases de Datos',
            'Curso de Fundamentos de Node.js',
        ]
    }
})

const LibreriasDependenciasNPMJS = new learningPath({
    name: 'Librerías y Dependencias de JavaScript con NPM',
    escuela: 'Desarrollo Web',
    subpaths: {
        FundamentosDesarrollo,
        'Primeros pasos con Dependencias y Empaquetadores en JavaScript' : [
            'Curso de NPM: Gestion de Paquetes y Dependencias en JS',
            'Curso de Frameworks y Librerias de JS',
            'Curso de Introduccion a Empaquetadores Web',
        ],
        'Proyectos Prácticos Integrando Herramientas Profesionales' : [
            'Curso de Manipulacion del DOM',
            'Curso Basico de Web Components con JS',
            'Curso de Creacion de Paginas Web con Astro',
        ],
        'Flujo de Trabajo Profesional con TypeScript y Pruebas Automatizadas' : [
            'Curso de Introduccion al Testing con JS',
            'Curso de Fundamentos de TS',
            'Curso de TS: Tipos Avanzados y Funciones',
        ]
    }
})

const PythonDesdeCero = new learningPath({
    name: 'Python: De Cero a Experto',
    escuela: 'Desarrollo Web',
    subpaths: {
        FundamentosDesarrollo,
        'Primeros pasos con Python' : [
            'Curso de Fundamentos de Python',
            'Curso de Python: Comprehensions, Funciones y Manejo de Errores',
            'Curso de Python: PIP y Entornos Virtuales',
        ],
        'Frameworks de python para backend' : [
            'Curso de FastAPI',
        ],
        'Cómputo con Python' : [
            'Curso de Complejidad Algoritmica con Python',
            'Curso de Estructuras de Datos Lineales con Python',
            'Curso de Estadistica Computacional con Pyton',
        ]
    }
})

const MentaleroBobby = new AdvancedEmotion({
    name: 'Mentalero Bobby',
    human: 'Riley',
    jobLocaton: 'Memoria a Largo Plazo',
    energyType: 'Masculina',
    responsabilities: {
        cuartel: 'Enviar recuerdos',
        human: 'Gestionar la memoria',
        otras: undefined,
    }, friends: [
        'Mentalera Paula',
    ],
    learningPaths: [
        FrontendProfundoReact,
        FullStackJS,
    ]
});

const MentaleroPaula = new AdvancedEmotion({
    name: 'Mentalero Paula',
    human: 'Riley',
    jobLocaton: 'Memoria a Largo Plazo',
    energyType: 'Femenina',
    responsabilities: {
        cuartel: 'Enviar recuerdos',
        human: 'Gestionar la memoria',
        otras: undefined,
    }, friends: [
        'Mentalero Bobby',
    ],
    learningPaths: [
        LibreriasDependenciasNPMJS,
        PythonDesdeCero,
    ]
});

/* MANEJO DE CLASES

Dadas la siguientes clases:

Clase Banda con las propiedades:

    nombre - string
    generos - Array
    integrantes - Array

Crea una clase llamada "Integrante" con las propiedades:

    nombre - string
    instrumento - string

Escribe la lógica para agregar integrantes a la clase Banda en la función agregarIntegrante. En esta función no debe dejar agregar más de un baterista, es decir hay que validar que solo se pueda agregar un integrante con instrumento "Bateria".

La solución debería tener un input y output como los siguientes:

Input

  const data = {
    nombre: "Los Jacks",
    generos: ["rock", "pop", "post-punk"],
    integrantes: [],
  }
  const banda = new Banda(data)
  banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))

Output

{
  "nombre":"Los Jacks",
  "generos":["rock","pop","post-punk"],
  "integrantes":[
    {"nombre":"Erik","instrumento":"Guitarra"},
    {"nombre":"Paul","instrumento":"Bateria"}
  ]}

*/


class Banda {
    constructor({
      nombre,
      generos = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = [];
    }

    agregarIntegrante(integranteNuevo) {
      // Tu código aquí 👈
        const bateristas = this.integrantes.filter(member => member.instrumento.toLowerCase() === 'bateria');
        const numberoDeBeteristas = bateristas.length;

        const nuevoInstrumento = integranteNuevo.instrumento.toLowerCase();
            
        if (numberoDeBeteristas > 0 & nuevoInstrumento === 'bateria') {
            // console.log('Solo se puede tener un baterista a la vez')
        }   else {
            this.integrantes.push(integranteNuevo)
        }
    }
  }
  
  //Crear clase Integrante
  class Integrante {
    // Tu código aquí 👈
  
    constructor({
        nombre = '',
        instrumento = '',
    }) {
        this.nombre = nombre;
        this.instrumento = instrumento;
    }
  }

const Muse = new Banda({
    nombre: 'Muse',
    generos: ' Rock Alternativo',
})

const Dominic = new Integrante({
    nombre: 'Dominic Howard',
    instrumento: 'Bateria',
});


const Matt = new Integrante({
    nombre: 'Matt Bellamy',
    instrumento: 'Cantante',
});

const Chris = new Integrante({
    nombre: 'Chris Wolstenholme',
    instrumento: 'Bajista',
});
  
  
//   export {
//     Banda,
//     Integrante,
//   }