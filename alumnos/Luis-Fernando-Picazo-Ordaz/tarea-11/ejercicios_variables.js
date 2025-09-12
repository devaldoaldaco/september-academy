let numero1 = 10;
let numero2 = 5;
console.log(`1. ${numero1} + ${numero2} = ${numero1 + numero2}`);
console.log(`2. ${numero1} - ${numero2} = ${numero1 - numero2}`);
console.log(`3. ${numero1} * ${numero2} = ${numero1 * numero2}`);
console.log(`4. ${numero1} / ${numero2} = ${numero1 / numero2}`);
console.log(`5. ${numero1} % ${numero2} = ${numero1 % numero2}`);
console.log(`6. ${numero1} ^ 2 = ${numero1 ** 2}`);

let base = 4;
let altura = 3;
console.log(`\n7. El área de un rectángulo con base: ${base} y altura: ${altura} es de: ${base * altura}`);

let radio = 5;
const PI = 3.1415;
console.log(`\n8. El área de un círculo con radio: ${radio} es: ${PI * (radio ** 2)}`);

let lado = 7;
console.log(`\n9. El perimetro de un cuadrado con un valor de ${lado} en sus lados es: ${lado * 4}`);

let gradosCelsius = 15;
console.log(`\n10. ${gradosCelsius} grados Celsius equivalen a: ${gradosCelsius* 1.8 + 32} grados Fahrenheit`);

let kilometros = 30;
console.log(`\n11. ${kilometros} Kilómetros equivalen a: ${kilometros/1.609} Millas`);

let num1 = 5;
let num2 = 7;
let num3 = 9;
console.log(`\n12. El promedio de los números: ${num1}, ${num2} y ${num3} es: ${(num1 + num2 + num3) / 3}`);

let numero = 2;

console.log(`\n13. El doble de ${numero} es: ${numero * 2}`);
console.log(`14. El triple de ${numero} es: ${numero * 3}`);
console.log(`15. El cuadrado de ${numero} es: ${numero ** 2} y su cubo es: ${numero ** 3}`);


console.log('\n----------Strings------------');

let nombre = 'Luis Fernando Picazo Ordaz';
console.log(`\n1. Hola ${nombre}`);

let nombres = 'Luis Fernando'
let apellidos = 'Picazo Ordaz'
console.log(`2. ${nombres} ${apellidos}`);

let cadena = 'hola';
console.log(`3. La cadena "${cadena}" tiene ${cadena.length} caracteres.`);
console.log(`4. Cadena a mayúsculas: ${cadena.toUpperCase()}`);

let cadena2 = 'ADIÓS';
console.log(`5. Cadena a minúsculas: ${cadena2.toLowerCase()}`);
console.log(`6. La primera letra de "${cadena}" es: ${cadena.charAt(0)}`);
console.log(`7. La última letra de "${cadena}" es: ${cadena.charAt(cadena.length - 1)}`);

let cadena3 = 'teclado';
console.log(`8. Substring de la cadena "${cadena3}": ${cadena3.substring(0, 3)}`);

let cadena4 = 'carro rojo';
console.log(`9. Remplazando una palabra de la cadena: "${cadena4}" remplazada: "${cadena4.replace('rojo', 'azul')}"`);

let cadena5 = 'casa blanca';
let palabra = 'casa';
console.log(`10. La cadena "${cadena5}" contiene la palabra "${palabra}"? : ${cadena5.includes(palabra)}`);

let cadena6 = 'perro';
console.log(`11. Cadena original: "${cadena6}" Cadena separada: ${cadena6.split("")}`);

let cadena7 = ' gato ';
console.log(`12. Cadena original: "${cadena7}" Cadena sin espacios: "${cadena7.trim()}"`);

let cadena8 = 'loro'
console.log(`13. Cadena original: "${cadena8} Cadena repetida 3 veces: "${cadena8.repeat(3)}"`);
console.log(`14. Cadena original: "${cadena8}" Cadena con la primera letra en mayúscula: "${cadena8.charAt(0).toUpperCase() + cadena8.substring(1)}"`);

let cadena9 = 'ojo';
let letra = 'o';
console.log(`15. ¿Cúantas veces aparece la letra "${letra}" en la cadena "${cadena9}"? : ${conincidencias(cadena9, letra)}`);



function conincidencias(cadena, letra) {
    let conincidencias = 0;
    for (const literal of cadena.toLowerCase()) {
        if (literal === letra) {
            conincidencias += 1;
        }
    }
    return conincidencias;
}










