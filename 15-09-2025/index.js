let counter = 0;
const objeto = {
    name: 1
}

function Microfono(nombre, edad) {
    this.name = nombre;
    this.age = edad;
    this.saludar = function() {
        console.log(`Hola mi nombre es: ${this.name}`);
    }
}

const hyperx = new Microfono();
console.log(hyperx.name)
console.log(hyperx.age)
hyperx.saludar()

const alienware = new Microfono('alien', 0);
console.log(alienware.name)
console.log(alienware.age)
alienware.saludar()

const Bocina = (nombre) => {
    this.name = nombre;
    console.log(this);
    return {
        name: nombre
    }
}

const bose = Bocina('Bose');
console.log(bose);


// CLASES

class Animal {
    #account;
    constructor(name, foodType, color, sound, duenio, account) {
        // super();
        this.name = name;
        this._duenio = duenio;
        this.#account = account;
        this.foodType = foodType;
        this.color = color;
        this._sound = sound;
    }

    hablar() {
        console.log(`El animal: ${this._hacerSonido()}`);
    }

    roncar() {
        console.log(`El animal: zzzzzzz`);
    }

    _hacerSonido() {
        return this._sound;
    }

    static calcularPeso(tamanio) {
        return (tamanio * 2 / 3.1416)* 100;
    }
}

const perro = new Animal('perro', 'carnivoro', 'blanco', 'ladra', 'Aldo');

console.log(perro.name);
perro.hablar();
// perro.duenioMethod();
console.log(perro._duenio);

const peso = Animal.calcularPeso(1.5);
console.log(peso);
// perro.obtenerCuenta();
// console.log(perro.#account);


class Utilidades {
    constructor() {

    }

    static sumar(a, b) {
        return a + b;
    }

    static areaCirculo(radio) {
        return Math.PI * Math.pow(radio, 2);
    }

    static pi() {
        return 3.1416;
    }
}

const suma = Utilidades.sumar(10,10);
const area = Utilidades.areaCirculo(10);
console.log(suma, area);

class Cuenta {
    constructor(number, balance) {
        this._accountNumber = number;
        this._balance = balance ?? 1000;
    }

    get balance() {
        return this._balance;
    } 

    set balance(balance) {
        if(balance > 0) {
            this._balance += balance;
        } else {
            console.log('Nel no se puede...');
        }
        
    }
}

const aldo = new Cuenta(1001010101001);

console.log(aldo.balance);
aldo.balance = 5000;

console.log(aldo.balance);

class Usuario {
    #password;
    constructor(user, password) {
        this.user = user ?? 'Golosa69';
        this.#password = password ?? 'MaquinaDeFuego2025';
    }

    validarPassword(pass) {
        return this.#password === pass;
    }
}

const juan = new Usuario('Juan', 'Juan2025*._');
console.log(juan);

if(juan.validarPassword('Juan2025*._')) {
    console.log('Login exitoso...')
}

// HERENCIA 

// DECORATOR - Mixin
const mixin = (Base) => class extends Base {
    constructor(name, foodType, color, sound, duenio, account) {
        super(name, foodType, color, sound, duenio, account);
        this.config = {};
    }

    saludar() {
        console.log('HOLA MUNDO');
    }
};

class Perro extends mixin(Animal) {
    constructor(patas, name, foodType, color, sound, duenio, account) {
        super(name, foodType, color, sound, duenio, account)
        this.name = 'Aria';
        this.patas = patas;
    }

    hablar() {
        // super.hablar()
        console.log('El perro hace guau guau');
    }
}

const kevin = new Perro(3, 'Kevin', 'Carnivoro', 'Blanco/Cafe', 'Ladra', 'ALDO', 101010100101);
console.log(kevin);
kevin.hablar();
kevin.roncar();
kevin.saludar();



class Motor {
    encender() {
        console.log('RUN RUN RUN');
    }
}

class Carro {
    constructor() {
        this.motor = new Motor(); // composicion
    }

    arrancar(llave) {
        if(llave) {
            this.motor.encender();
        } else {
            console.log('Se requiere la llave para encender el motor');
        }
        console.log('El coche arranco');
    }
}


const audi = new Carro();
audi.arrancar('1osiwe09');

class Estudiante {
    constructor(name) {
        this.name = name ?? '';
    }
}


class Curso {
    constructor(nombre) {
        this.nombre = nombre;
        this.profe = null;
        this.alumnos = [];
    }

    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    asignarProfesor(profesor) {
        this.profe = profesor;
    }
}

const curso = new Curso('Desarrollo Web', 'Aldo Aldaco');
const ivan = new Estudiante('Ivan');
// curso.agregarAlumno(ivan);

console.log(curso);

class Profesor {
    constructor(name) {
        this.name = name ?? '';
    }
}

const aldoAldaco = new Profesor('Aldo Aldaco');
curso.asignarProfesor(aldoAldaco);

console.log(curso);

console.log(document)
// GET DOM ELEMENTS 

const obj = document.getElementById('genderMale');
const buttons = document.getElementsByTagName('button');
console.log(buttons);
// getElementByClassName('bg-blue');
// getElementByTagName('span');
// querySelector('#span');
// querySelectorAll('span');
console.log(obj.id);

// MODIFYING DOM ELEMENTS 
const btn = buttons[0];
btn.innerHTML = `<span>HOLA</span>`;
btn.innerText = `<span>HOLA</span>`;
btn.setAttribute('class', 'bg-green');
// btn.setAttribute('style', 'background-color: green; border: none;');
console.log(btn.style);
const body = document.querySelector('body');
btn.addEventListener('click', (ev) => {
    ev.target.disabled = true; // button
    setTimeout(() => {
        ev.preventDefault();
        const span = document.createElement('span');
        span.innerText = `span number ${counter}`;
        counter++;
        body.appendChild(span);
        ev.target.disabled = false; // button
    }, 1000);
});


const p = document.createElement('p');
p.innerText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi illo necessitatibus aperiam adipisci beatae reiciendis quasi error ullam, maxime delectus praesentium? Unde ex minima eius numquam voluptates ad consequatur ducimus.';
const form = document.querySelector('form');
const label = document.querySelector('[for="gender"]');
form.insertBefore(p, label);

const render = (name, apellido) => {
    return `<div>
        <p>Mi nombre ${name}</p>
        <span>Mi nombre ${apellido}</span>
    </div>`
}

body.innerHTML = render('aldo', 'aldaco');