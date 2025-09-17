function procesarNumeros(numeros, filtroCall, transformarcall, reduceCall, valorInicial)    {
    console.log("\n---  Procesando Numeros. ---");
    console.log("Original:", numeros);
    const filtrado = numeros.filter(filtroCall);
    console.log("Filtrado:", filtrado);

    const transformar = filtrado.map(transformarcall);
    console.log("Transformando:", transformar);

    const resFinal = transformar.reduce(reduceCall, valorInicial);
    console.log("Reducido a:", resFinal);
    
    return resFinal;
}
const misNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtrarPares = numeros => numeros % 2 === 0;
const dobleNum = numeros => numeros * 2;
const sumaTodo = (acc, numeros) => acc + numeros;

const resultado1 = procesarNumeros(misNumeros, filtrarPares, dobleNum, sumaTodo, 0);
console.log("Resultado final:", resultado1);