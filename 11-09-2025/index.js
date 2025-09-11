// ARRAY

const alumnos = [
    {name: 'juan', familiares: [{name: 'pedro', edad: 80, parentesco: 'papá'}]}, 
    {name: 'jose', familiares: [{name: 'pedro', edad: 80, parentesco: 'papá'}]},
    {name: 'ernesto', familiares: [{name: 'pedro', edad: 80, parentesco: 'papá'}]}
];
console.log(alumnos)
const letras = Array.from('ABC');
console.log(letras);
const nombres = new Array(1,2,3,4,5);
console.log(nombres);
const otrosNombres = [...nombres, 6,7,8];
console.log(otrosNombres);
console.log(alumnos[0]);
const nuevaPersona = {name: 'juana', familiares: [{name: 'pedro', edad: 80, parentesco: 'papá'}]};
alumnos[0] = nuevaPersona;
console.log(alumnos);

const nuevaLista = alumnos.map((alumno) => {
    return {...alumno, calificacion: 10};
});

const liz = {name: 'lizbeth', familiares: [{name: 'Luis', edad: 65, parentesco: 'papá'}]};
console.log(nuevaLista.push(liz));

console.log(alumnos.length);
console.log(nuevaLista);

const result = alumnos.includes(nuevaPersona); // true || false
console.log(result);

// console.log(nuevaPersona === nuevaPersona); false

for(let i = 0;i < alumnos.length; i++) {
    console.log(alumnos[i]);
}

for(let i in alumnos) { // keys
    console.log(alumnos[i]);
}

for(let i in liz) { // keys
    console.log(liz[i]);
}

for(let i of alumnos) { // valores
    console.log(alumnos[i]);
}

// for(let i of liz) { // keys
//     console.log(liz[i]);
// }

alumnos.forEach(alumno => {
    alumno.age = 0;
})

console.log(alumnos);

// Object literal
const auto = {
    llantas: {
        marca: 'bridgestone',
        medida: '19',
        costo: 1500
    },
    motor: {},
    puertas: '4'
};

console.log(auto['marca']);
console.log(auto.motor.marca);


for(let i in auto) { // keys
    console.log(i, auto[i]);
}

delete auto.motor;

console.log(Object.entries(auto))

const otroAuto = {...auto, motor: true};
console.log(Object.entries(otroAuto));

const {llantas} = auto;
console.log(llantas);

// import {lib} from 'libreria.js';
console.log(Math)
console.log(sessionStorage)
const myMap = new Map();
myMap.set("bar", "foo");
myMap.set("bar", "alallala");

console.log(myMap.get("bar")); // Regresa "foo"
console.log(myMap.get("baz")); // Regresa undefined

const numbers = [1,2,2,2,4,6];
const otroArr = new Set(numbers);
console.log(Array.from(otroArr));

function saludando(nombre, edad, callback) {
    return callback(nombre, edad);
}

const resSaludo = saludando('guillermo', 32, (nombre, edad) => {
    return `HOLA a TODOS, soy ${nombre} y tengo ${edad}`;
}); // funcion
console.log(resSaludo);

const calificaciones = [5,6,7,8,9,10];
const personas = [{name: 'aldo', edad: 30, }, {name: 'evelyn', edad: 27, }, {name: 'ivan', edad: 25, }];

function map(arreglo, callback) {
    let nuevoArreglo = [];
    for(let i = 0; i < arreglo.length; i++) {
        nuevoArreglo.push(callback(arreglo[i]));
    }
    return nuevoArreglo;
}

const nuevasCalificaciones = map(calificaciones, (calificacion) => {
    if(calificacion === 5) {
        return 10;
    } else {
        return 5;
    }
});

console.log(nuevasCalificaciones)

// const uniformados = map(personas);

// console.log(uniformados);

const promedio = calificaciones.reduce((acumulador, calificacion) => {
    acumulador+=calificacion/calificaciones.length;
    return acumulador;
}, 0);
console.log(promedio);

// type cohersion

console.log('10' == '10');
console.log('10' === 10);