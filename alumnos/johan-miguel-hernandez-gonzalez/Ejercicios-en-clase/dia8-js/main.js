//arreglo
const alumnos=['johan',23,false];

console.log(alumnos);

//arreglo de arreglo o. objetos
const numeros= Array.from('123456789');


//recorre a traves de los valor que cargues
for (const element of numeros) {
    console.log(element);
}
//recorre a traves de las llaves osea indices
for (const element in numeros) {
    console.log(element);
}


//objetos de construccion literal

const moto={
    marca: 'Pulsar',
    color: 'Gris',
    precio: 20000,
    llantas:{
        marca:'RMF',
        medidas:100,
        precio: 1500
    }
}

//formas de tener datos
console.log(moto.marca);
console.log(moto['marca']);
//no hay valor en la propiedad
console.log(moto.modelo);

//acceder a otro objeto de objeto
console.log(moto.llantas.marca);

//borrar propiedades del objeto

delete moto.llantas.precio;

console.log(moto)

//copiar otro objeto
const auto= {...moto, seguro:'BBVA'};

console.log(auto);

//funciones
function saludar(){
    return 'hOLA Mundo';
}

const saludo= function(){
    return 'Hola mundo';
}

console.log(saludar());
console.log(saludo());

const calificaciones= [4,6,8,6,7,9,10];

const nuevasCalificaciones= map(calificaciones, (calificaciones) => {
    calificaciones=0;
});


console.log(nuevasCalificaciones);


//profe aldo
const calificacioness = [5,6,7,8,9,10];
    const personas = [{name: 'aldo', edad: 30, }, {name: 'evelyn', edad: 27, }, {name: 'ivan', edad: 25, }];

    function map(arreglo, callback) {
        let nuevoArreglo = [];
        for(let i = 0; i < arreglo.length; i++) {
            nuevoArreglo.push(callback(arreglo[i]));
        }
        return nuevoArreglo;
    }

    const nuevasCalificacioness = map(calificacioness, (calificacion) => {
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