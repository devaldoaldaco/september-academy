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