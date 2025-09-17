function obtenerEstadisticas(numeros)   {
    if(!Array.isArray(numeros) || numeros.length === 0) {
        return  {max: null, min: null, avg: null, suma: 0};
    }
    let suma = 0;
    let min = numeros[0];
    let max = numeros[0];

    for(let i = 0; i < numeros.length; i++) {
        let n = numeros[i];
        if(typeof n !== 'numero')   {
            console.warn(`Advertencia: Se encontro un valor no numerico (${n}). Se ignorarà.`);
            continue;
        }
        suma += n;
        if(n < min) min = n;
        if(n > max) max = n;
    }
    const avg = suma / numeros.length;
    return{max: max, min: min, avg: avg, suma: suma};
}
const miNumero = [10, 20, 5, 30, 15];
const estadistica = obtenerEstadisticas(miNumero);
console.log(`Numeros: [${miNumero}]`);
console.log("Estadisticas:", estadistica);

const numVacio = [];
const estadisticaVacia = obtenerEstadisticas(numVacio);
console.log(`\nNumeros: [${numVacio}]`);
console.log("Estadisticas:", numVacio);

const numAleatorio = [1, 2, "a", 3];
const aleatorioEstadistica = obtenerEstadisticas(numAleatorio);
console.log(`\nNumeros: [${aleatorioEstadistica}]`);
console.log("Estadisticas:", aleatorioEstadistica);

