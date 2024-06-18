// import { PlatziClass } from './main.mjs'
import { Course } from './controlAccess.mjs'

// const clase66 = new PlatziClass({
//     name: 'JS POO basada en prototipos',
//     videoID: 'HAMSTERMETALICO66'
// });

// clase66.reproducir()

// clase66.pausar()

const courseName = "curso de programación básica"
const nombreMayusculas = new Course({
    name: courseName,
})

console.log(nombreMayusculas.name)

nombreMayusculas.name = 'Nuevo codigo de especias'

console.log(nombreMayusculas.name)