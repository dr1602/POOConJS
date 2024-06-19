// objeto literal
const Riley  = {
    // propiedades
    _nombre: 'Riley ',
    segundoNombre: 'Elphaba ',
    apellido: 'Andersen',
    _edad: 13,
    cursosAprobados: [
        'Curso Definitivo de HTML y CSS',
        'Curso Práctico de HTML y CSS'
    ],
    residencia: 'San Francisco',

    // Crearemos positvos

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    },

    get nombre() {
        return this._nombre;
    },

    get edad() {
        return this._edad;
    },

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    },

    set edad(nuevaEdad) {
        this._edad = nuevaEdad;
    }

}; 

// Hacer que Riley aprueba otro curso

// Riley.cursosAprobados.push('Curso de Responsive Design');

function Student (name, age, emocion, cursosAprobados, address ) {
    this._name = name;
    this._age = age;
    this.emocion = emocion
    this.cursosAprobados = cursosAprobados;
    this.address = address
    this.aprobarCurso = function(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

// Extension sin clases

Student.prototype.aprobarCurso = function(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso)
}

// Constructor de FreeStudent

function FreeStudent(name, age, emocion, cursosAprobados, address) {
    Student.call(this, name, age, emocion, cursosAprobados, address);
    this.tipo = 'Free';
}

// Herencia prototipica para FreeStudent;

FreeStudent.prototype = Object.create(Student.prototype);
FreeStudent.prototype.constructor = FreeStudent;

// Constructor de BasicStudent

function BasicStudent(name, age, emocion, cursosAprobados, address) {
    Student.call(this, name, age, emocion, cursosAprobados, address);
    this.tipo = 'Basic';
}

// Herencia prototipica para BasicStudent

BasicStudent.prototype = Object.create(Student.prototype);
BasicStudent.prototype.constructor = BasicStudent;

// Constructor de ExpertStudent

function ExpertStudent(name, age, emocion, cursosAprobados, address) {
    Student.call(this, name, age, emocion, cursosAprobados, address);
    this.tipo = 'Expert';
}

// Herencia prototipica para ExpertStudent

ExpertStudent.prototype = Object.create(Student.prototype);
ExpertStudent.prototype.constructor = ExpertStudent;

// Ejemplo de uso

const freeStudent = new FreeStudent('Alice', 20, 'Happy', ['Math'], '123 Main St.');
const basicStudent = new BasicStudent('Bob', 22, 'Excited', ['Science'], '456 Elm St.');
const expertStudent = new ExpertStudent('Charles', 24, 'Determined', ['Physics'], '789 Oak St.');

console.log(freeStudent);
console.log(basicStudent);
console.log(expertStudent);

// Se definen los getters y setters fuera del constructor cuando no es una Clase y con la propiedad Object.defineProperty

Object.defineProperty(Student.prototype, 'name', {
    get name() {
        return this._name;
    },
    set name (nuevoNombre) {
        this._name = nuevoNombre;
    },
})

Object.defineProperty(Student.prototype, 'age', {
    get age() {
        return this._age;
    },
    set age(nuevaEdad) {
        this._age = nuevaEdad;
    }
})

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
        address,
        team = '',
    }) {
        this.name = name;
        this.age = age;
        this.emotions = emotions;
        this.address = address;
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
    address: 'San Francisco',
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

// Polimorfismo

class Comment {
    constructor({
        content,
        studentName,
        studentRole = 'estudiante',
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        // sin necesidad de recibir atributos, podemos crear mas atributos
        this.likes = 0;
        // despues crearimos un atributo para agregar mas comentarios
    }

    publicar() {
        console.log(`${this.studentName} (${this.studentRole})`);
        console.log(`${this.likes} likes`)
        console.log(`${this.content}`)
    }
}


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
        approvedCourses=[],
        learningPaths = {},
    }) {
        this._name = name;
        this.human = human;
        this.jobLocaton = jobLocaton;
        this.energyType = energyType;
        this._age = age;
        this.responsabilities = responsabilities;
        this.friends = friends;
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombre) {

        if (typeof nuevoNombre !== 'string') {
            console.error('El nombre de la o el personaje tiene que ser una cadena de texto')
        } else {
            this._name = nuevoNombre;
        }
        
    }

    get age() {
        return this._name;
    }

    set age(nuevaEdad) {

        if (typeof nuevaEdad !== 'number') {
            console.error('La edad de la o el personaje tiene que ser un numero')
        } else {
            this._age = nuevaEdad;
        }
        
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        })

        comment.publicar();
    }
}

class AdvancedEmotionWithPlatziFreeStudent extends AdvancedEmotion {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn(`Lo siento, ${this.name}, solo puede tomar cursos abiertos`)
        }
    }

}

class AdvancedEmotionWithPlatziBasicStudent extends AdvancedEmotion {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== 'english') {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn(`Lo siento, ${this.name}, no puedes tomar cursos en inglés`)
        }
    }
}

class AdvancedEmotionWithPlatziExpertStudent extends AdvancedEmotion {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse)
    }
}

class AdvancedEmotionAsTeacher extends AdvancedEmotion {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse)
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: 'profesor'
        })

        comment.publicar();
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
        this._escuela = escuela;
        this.subpaths = subpaths;
    }

    get escuela() {
        return this._escuela;
    }

    set escuela(nuevaEscuela) {

        if (typeof nuevaEscuela !== 'string') {
            console.error('Las escuelas tienen que ser cadenas de texto')
        } else {
            this._escuela = nuevaEscuela;
        }
        
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
        name = '',
        classes = {}, 
        isFree = false,
        lang = 'spanish',
    }) {
        // por convencion con el guion bajo se pide que no se llame al atributo desde afuera
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    // para conseguir el nombre del curso, se parecera a un metodo 
    get name() {
        // para dar el nombre metodo privado entre comillas definido en el constructor
        return this._name;
    }

    // Nuevo metodo con se para cambiar el nombre
    set name(nuevoNombre) {
        // recuerdas el objetivo del encapsulamiento?

        if (nuevoNombre === '') {
            console.error('Los nombres no pueden estar vacios')
        } else {
            this._name = nuevoNombre;
        }
        
    }

}

// Modulos de ECMAScript 6
// con la extension main.mjs, empezamos a realmente trabajar con modulos de JS

function videoPlay (id) {
    const urlScreta = 'https://videosDeAprendizajeIntensamente/' + id;
    console.log(`Se reproduce desde: ${urlScreta}`)
}

function videoStop (id) {
    const urlScreta = 'https://videosDeAprendizajeIntensamente/' + id;
    console.log(`Pausamos el video en la url: ${urlScreta}`)
}

class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }

    pausar() {
        videoStop(this.videoID);
    }
}

const FrontDeveloper = new coursesCreator ({
    name: 'Curso de Frontend Developer',
    isFree: true,
    classes : [
        'Inicia tu camino como Frontend Developer',
        '¿Qué es HTML y CSS? ¿Para qué sirven?',
        'Motores de render: de archivos a píxeles',
    ],
})

FrontDeveloper.name
// 'Curso de Frontend Developer'

// FrontDeveloper.name = ''
// ''


const PracticoFrontDeveloper = new coursesCreator ({
    name: 'Curso Practico de Frontend Developer',
    lang: 'english',
    classes : [
        '¿Ya tomaste el Curso de Frontend Developer?',
        'Buenas prácticas de CSS: reflexión y advertencias',
        'Identifica las pantallas de tu proyecto',
    ],
})

const PracticoJS = new coursesCreator ({
    name: 'Curso Practico de JS',
    classes : [
        '¿Ya tomaste el Curso Básico de JavaScript?',
        'Test de JS',
        'Variables',
    ]
})

const FundamentosDesarrollo = new moduleCreator ({
    module : {
        'Fundamentos de desarrollo web' : [
            FrontDeveloper,
            PracticoFrontDeveloper,
            PracticoJS,
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

const MentaleroBobby = new AdvancedEmotionWithPlatziFreeStudent({
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

const MentaleroPaula = new AdvancedEmotionWithPlatziBasicStudent({
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

const GuardiaDave = new AdvancedEmotionWithPlatziExpertStudent({
    name: 'Guardian del Subconciente Dave',
    human: 'Riley',
    jobLocaton: 'Subconciente',
    energyType: 'Masculina',
    responsabilities: {
        cuartel: '',
        human: 'Proteger Mente',
        otras: undefined,
    }, friends: [
        'Guardian del Subconciente Frank',
    ],
    learningPaths: [
        LibreriasDependenciasNPMJS,
        PythonDesdeCero,
    ]
});

const EmocionAlegria = new AdvancedEmotionAsTeacher({
    name: 'Alegria',
    human: 'Riley',
    jobLocaton: 'Cuartel General',
    energyType: 'Femenina',
    responsabilities: {
        cuartel: 'Liderear Emociones',
        human: 'Guiar a Riley',
        otras: undefined,
    }, friends: [
        'Tristeza',
        'Furia',
        'Desagrado',
        'Miedo',
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