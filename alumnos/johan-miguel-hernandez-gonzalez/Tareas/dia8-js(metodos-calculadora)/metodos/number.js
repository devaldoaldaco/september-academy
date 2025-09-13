//console.log("prueba con node");
//metodos con number
let entero= 101544;
let flotante= -67.89;
//-----------constructor-------------
const constructor= new Number(234);

console.log(typeof(constructor));

console.log(constructor);

//-----------métodos estáticos--------
//isFinite(). -->  verifica que el numero sea numero

console.log('* isFinite()');
console.log(Number.isFinite(constructor));
console.log(Number.isFinite(entero));

//isInteger(). -->  deterina si el valor pasado es un entero

console.log('* isInteger()');
console.log(Number.isFinite(entero));
console.log(Number.isFinite(flotante));

//isNaN(). -->  deterina si el valor pasado es un entero

console.log('* isNaN()');
console.log(Number.isNaN(entero));
console.log(Number.isNaN(NaN));

//parseFloat(). -->  devuelve un numero flotante redondeado

console.log('* parseFloat()');
console.log(Number.parseFloat(78.009990));
console.log(Number.parseFloat(56.090));

//parseInt(). -->  devuelve un numero entero

console.log('* parseInt()');
console.log(Number.parseInt(78.009990));
console.log(Number.parseInt(56.090));

//-----------métodos instancia--------
//toFixed(). -->  el numero con los decimales que gustes

console.log('* toFixed()');
console.log(872.2929929.toFixed(2));
console.log(12.32323.toFixed());

// toString(). -->  conversion del numero

console.log('* toString()');
console.log(872.2929929.toString(2));
console.log(12.32323.toString(6));

