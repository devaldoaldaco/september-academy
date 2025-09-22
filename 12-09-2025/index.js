let edad = 10;

console.log(edad * '2') // multiplicacion
console.log(edad / '2') // division
console.log(edad - '2') // resta
console.log(edad + '2') // suma
console.log(edad % '2') // modulo
console.log(edad ** '2') // potencia


console.log(edad == '10'); // non strict equal valida valor
console.log(edad === '10'); // strict equal valida el valor y el tipo de dato
console.log(edad != 11); // non strict equal valida el valor
console.log(edad !== 10); // non strict equal valida el valor y el tipo de dato
console.log(edad > 10); // non strict equal valida el valor y el tipo de dato
console.log(edad < 10); // non strict equal valida el valor y el tipo de dato
console.log(edad >= 10); // non strict equal valida el valor y el tipo de dato
console.log(edad <= 10); // non strict equal valida el valor y el tipo de dato
console.log(false <= true); // non strict equal valida el valor y el tipo de dato

// truthy
console.log(!![]) 
console.log(!!{})
// falsy null, undefined, 0
console.log(!!'') 



const alumnos = [];
console.log(!!{} == !!alumnos);

console.log(10 === 10 && edad)
if(edad) {
    console.log('La edad esta definida(tiene un valor definido) y es truthy');
}

const persona = null;

if(!persona) {
    console.log('La persona esta definida(tiene un valor definido) y es truthy');
    persona = {name: 'Juanito'};
}

// true && true = true
// false && true = false
// true && false = false
// false && false = false

// true || true = true
// false || true = true
// true || false = true
// false || false = false

// !false = true
// !true = false

const persona2 = undefined;
console.log(persona2 ?? 'Esto no es null')
const nombre = persona2 ?? {};
console.log(nombre.name);

const persona3 = undefined;

console.log(persona3?.fullName?.name?.first?.firstChar);
if(persona3?.fullName?.name?.first?.firstChar) {
    console.log('Algun dato no existe');
    // throw new Error('Error reading person name');
}

if(persona3) {
    if(fullName) {
        if(name) {
            if(first) {
                if(firstChar) {

                }
            }
        }
    }
    console.log('Algun dato no existe');
    // throw new Error('Error reading person name');
}

function saludar(persona = {name: 'Robot'}, mensaje) {
    console.log(arguments.__proto__);
    return `Hola mi nombre es: ${persona.name}`;
}

console.log(saludar({name: 'Hector'}));
console.log(saludar());

function suma(a,b,c,d,e,f,g) {
    console.log(...arguments);
    if(Object.keys(arguments).length === 7) {
        return a+b+c+d+e+f+g;
    } else {
        return 0;
    }
    
}

console.log(suma(1,2,3,4,5,6,undefined));

// IIFE
(function mover() {
    console.log('Se esta moviendo...');
    console.log(this);
})();




