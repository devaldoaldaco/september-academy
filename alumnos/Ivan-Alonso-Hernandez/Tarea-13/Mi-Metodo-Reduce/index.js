
//Metodo reduce

const calificaciones = [5, 6, 9, 10, 8];

function reduce(array, callback, valorInicial) {
    let acumulador = valorInicial;

    for (let i = 0; i < array.length; i++) {
        acumulador = callback(acumulador, array[i]);
    }

    return acumulador;
}


const sumaTotal = reduce(calificaciones, (acumulador, calificacion) => {
    return acumulador += calificacion
}, 0)


let promedio = sumaTotal / calificaciones.length
console.log(`Promedio: ${promedio}`);

