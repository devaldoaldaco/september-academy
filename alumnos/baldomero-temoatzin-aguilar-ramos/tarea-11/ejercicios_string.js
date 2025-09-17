// 1. Declara una variable con tu nombre y muestra un mensaje que diga: Hola, [nombre].
let nombre = "Baldomero";
console.log("Hola, " + nombre);

// 2. Declara dos variables con tu nombre y apellido, y únelas en una sola cadena.
let nombre2 = "Baldomero";
let apellido = "Aguilar";
let nombreCompleto = nombre2 + " " + apellido;
console.log(nombreCompleto);

// 3. Declara una cadena y muestra cuántos caracteres tiene.
let cadena1 = "JavaScript es genial";
console.log(cadena1.length);

// 4. Declara una cadena y conviértela a mayúsculas.
let cadena2 = "aprendiendo js";
console.log(cadena2.toUpperCase());

// 5. Declara una cadena y conviértela a minúsculas.
let cadena3 = "PROGRAMAR ES DIVERTIDO";
console.log(cadena3.toLowerCase());

// 6. Declara una cadena y muestra la primera letra.
let cadena4 = "Hola Mundo";
console.log(cadena4[0]);

// 7. Declara una cadena y muestra la última letra.
console.log(cadena4[cadena4.length - 1]);

// 8. Declara una cadena y extrae una parte usando substring o slice.
let cadena5 = "Aprendiendo JavaScript";
console.log(cadena5.substring(0, 11)); // "Aprendiendo"

// 9. Declara una cadena y reemplaza una palabra por otra.
let cadena6 = "Me gusta JavaScript";
console.log(cadena6.replace("JavaScript", "React"));

// 10. Declara una cadena y verifica si contiene cierta palabra.
let cadena7 = "Estoy practicando JavaScript";
console.log(cadena7.includes("JavaScript")); // true

// 11. Declara una cadena y separa las palabras en un arreglo usando split.
let cadena8 = "React Node MongoDB Express";
let arreglo = cadena8.split(" ");
console.log(arreglo);

// 12. Declara una cadena y elimina los espacios al inicio y al final.
let cadena9 = "   Hola Mundo   ";
console.log(cadena9.trim());

// 13. Declara una cadena y repite el texto varias veces.
let cadena10 = "JS ";
console.log(cadena10.repeat(3)); // "JS JS JS "

// 14. Declara una cadena y convierte la primera letra en mayúscula.
let cadena11 = "javascript";
let capitalizada = cadena11.charAt(0).toUpperCase() + cadena11.slice(1);
console.log(capitalizada);

// 15. Declara una cadena con una frase y cuenta cuántas veces aparece una letra.
let cadena12 = "programando en javascript";
let letra = "a";
let contador = cadena12.split(letra).length - 1;
console.log(`La letra "${letra}" aparece ${contador} veces.`);
