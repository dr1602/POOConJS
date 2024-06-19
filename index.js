// PROGRAMACION ORIENTADA A OBJETOS

class Phrase {
    constructor({
        content,
        characterName,
        characterRole,
    }) {
        this.content = content;
        this.characterName = characterName;
        this.characterRole = characterRole;
    }

    publicar() {
        console.log(`${this.characterName} (${this.characterRole})`);
        console.log(`${this.content}`)
    }
}

// Clase Personaje de Intensamente

class IntesamenteCharacter {
    constructor({
        name,
        race,
        jobLocaton,
        energyType,
        age = undefined,
        responsabilities = {},
        friends = {},
        firstAppearance,
        state = 'Active',
        originalVoice = '',
        spanishVoice = '',
    }) {
        this._name = name;
        this.race = race;
        this.jobLocaton = jobLocaton;
        this.energyType = energyType;
        this._age = age;
        this.responsabilities = responsabilities;
        this.friends = friends;
        this.firstAppearance = firstAppearance;
        this._state = state;
        this.originalVoice = originalVoice;
        this.spanishVoice = spanishVoice;
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
        return this._age;
    }

    set age(nuevaEdad) {

        if (typeof nuevaEdad !== 'number') {
            console.error('La edad de la o el personaje tiene que ser un numero')
        } else {
            this._age = nuevaEdad;
        }
        
    }

    get state() {
        return this._state;
    }

    set state(nuevoEstado) {

        if (nuevoEstado !== 'Activo' || nuevoEstado !== 'Inactivo') {
            console.error('El estatus de la o el personaje tiene que ser Activo o Inactivo')
        } else {
            this._state = nuevoEstado;
        }
        
    }
    

    famousPhrase(phraseContent) {
        const phrase = new Phrase({
            content: phraseContent,
            characterName: this.name,
        })

        phrase.publicar();
    }
}

class Emotion extends IntesamenteCharacter {
    constructor(props) {
        super(props);
        this.race = 'Emoción';
    }

}

class Thought extends IntesamenteCharacter {
    constructor(props) {
        super(props);
        this.race = 'Pensamiento';
    }
}

class Human extends IntesamenteCharacter {
    constructor(props) {
        super(props);
        this.race = 'Humana';
    }
}

const MentaleroBobby = new Thought({
    name: 'Mentalero Bobby',
    jobLocaton: 'Memoria a Largo Plazo',
    energyType: 'Masculina',
    responsabilities: {
        cuartel: 'Enviar recuerdos',
        human: 'Gestionar la memoria',
    }, friends: [
        'Mentalera Paula',
    ],
    firstAppearance: 'Intensamente 1',
    originalVoice: 'Bobby Moynihan',
    spanishVoice: 'Abraham Vega',
});

const MentaleroPaula = new Thought({
    name: 'Mentalero Paula',
    jobLocaton: 'Memoria a Largo Plazo',
    energyType: 'Femenina',
    responsabilities: {
        cuartel: 'Enviar recuerdos',
        human: 'Gestionar la memoria',
    }, friends: [
        'Mentalero Bobby',
    ],
    firstAppearance: 'Intensamente 1',
    originalVoice: 'Paula Poundstone',
    spanishVoice: 'Yolanda Vidal'
});

const GuardiaDave = new Thought({
    name: 'Guardian del Subconciente Dave',
    jobLocaton: 'Subconciente',
    energyType: 'Masculina',
    responsabilities: {
        cuartel: undefined,
        human: 'Proteger Mente',
    }, friends: [
        'Guardian del Subconciente Frank',
    ],
    firstAppearance: 'Intensamente 1',
    originalVoice: 'Frank Oz',
    spanishVoice: 'Enrique Cervantes'
});

const Alegria = new Emotion({
    name: 'Alegria',
    jobLocaton: 'Cuartel General',
    energyType: 'Femenina',
    responsabilities: {
        cuartel: 'Liderear Emociones',
        human: 'Guiar a Riley',
    }, friends: [
        'Tristeza',
        'Furia',
        'Desagrado',
        'Miedo',
    ],
    firstAppearance: 'Intensamente 1',
    originalVoice: 'Amy Poehler',
    spanishVoice: 'Cristina Hernández'
});

const Vergüenza = new Emotion({
    name: 'Vergüenza',
    jobLocaton: 'Cuartel General',
    energyType: 'Masculina',
    responsabilities: {
        cuartel: 'Apoyo',
        human: 'Dar humildad a Riley',
    }, friends: [
        'Tristeza',
        'Ansiedad',
        'Envidia',
        'Ennui',
    ],
    firstAppearance: 'Intensamente 2',
    originalVoice: 'Paul Walter Hauser',
    spanishVoice: 'Luis Leonardo Suárez'
});

const Riley = new Human({
    name: 'Riley Elphaba Andersen',
    jobLocaton: 'San Francisco',
    energyType: 'Femenina',
    responsabilities: {
        cuartel: undefined,
        human: 'Vivir',
    }, friends: [
        'Valentina “Val” Ortiz',
        'Breeonna "Bree" Young',
        'Grace Hsieh',
    ],
    firstAppearance: 'Intensamente 1',
    originalVoice: 'Kensington Tallman',
    spanishVoice: 'Pamela Mendoza'
});

const Val = new Human({
    name: 'Valentina “Val” Ortiz',
    jobLocaton: 'Michigan',
    energyType: 'Femenina',
    responsabilities: {
        cuartel: undefined,
        human: 'Vivir',
    }, friends: [
        'Riley Elphaba Andersen',
    ],
    firstAppearance: 'Intensamente 2',
    originalVoice: 'Lilimar',
    spanishVoice: 'Zöe Ivanna Mora'
});