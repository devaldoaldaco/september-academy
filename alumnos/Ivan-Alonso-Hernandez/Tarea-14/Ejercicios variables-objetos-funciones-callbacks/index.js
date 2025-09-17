////////////////////  Ejercicio 1 ///////////////////////////
{
    let moneda = 1000
    const conversion = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    });

    const formato = conversion.format(moneda)

    console.log(formato)
}

////////////////////  Ejercicio 2 ///////////////////////////

{
    let cadena = 'hola mundo como estan'

    let arrayCadena = cadena.split(' ').join('').split('');
    let acumulador = {};

    for (let i = 0; i < arrayCadena.length; i++) {
        let letra = arrayCadena[i];

        acumulador[letra] = (acumulador[letra] || 0) + 1;
    }

    console.log(acumulador)
}


////////////////////  Ejercicio 3 ///////////////////////////


let fecha = "2025-09-15,2023-02-10,2024-06-25";

const arrayFechas = fecha.split(",");
let fechas = [];
for (let i = 0; i < arrayFechas.length; i++) {
    const arrayFecha = arrayFechas[i].split('-')
    fechas.push({ anio: arrayFecha[0], mes: arrayFecha[1], dia: arrayFecha[2] });
}
console.log(fechas)

////////////////////  Ejercicio 4 ///////////////////////////

{
    let correos = "ivan@gmail.com;alonso@gmail.com;ivanAlonso@gmail.com;alonso123@gmail.com"
    correosLimpios = correos.split(';')
    console.log(correosLimpios)
}


//////////////////// objetos ///////////////////////////////////////////////

////////////////////  Ejercicio 5 ///////////////////////////


class PlayList {

    constructor() {
        this.canciones = []
    }

    agregarCancion(titulo, artista, duracion) {
        this.canciones.push({ titulo: titulo, artista: artista, duracion: duracion })
    }

    eliminarCancion(titulo) {
        this.canciones = this.canciones.filter(cancion => cancion.titulo !== titulo);
    }

    get duracionDelPlaylist() {
        let total = 0;
        this.canciones.forEach(cancion => {
            total += cancion.duracion;
        });
        console.log(`Duracion del playlist: ${total} min`)
    }


    get mostrarPlayslist() {
        console.log(this.canciones);
    }


}

let playList = new PlayList();
playList.agregarCancion('Daphne', 'Porter', 3);
playList.agregarCancion('ghost and host', 'porter', 4);
playList.agregarCancion('amigos', 'Los blender', 4)
playList.mostrarPlayslist;
playList.duracionDelPlaylist;
playList.eliminarCancion('ghost and host');
playList.mostrarPlayslist;


////////////////////  Ejercicio 6 ///////////////////////////


class Libros {

    constructor() {
        this.libros = [{ titulo: "Cien Años de Soledad", disponible: true },
        { titulo: "Don Quijote de la Mancha", disponible: true },
        { titulo: "1984", disponible: true }];
    }

    prestarLibro(titulo) {
        this.libros.forEach(libro => {
            if (libro.titulo === titulo && libro.disponible === true) {
                console.log(`Libro: ${titulo} prestado con exito`);
                libro.disponible = false;
            } else if (libro.titulo === titulo && libro.disponible === false) {
                console.log(`Libro ${titulo} no disponible`);
            }
        });

    }

    devolverLibro(titulo) {
        this.libros.forEach(libro => {
            if (libro.titulo === titulo) {
                console.log(`Libro: ${titulo} regresado`);
                libro.disponible = true;
            }
        });
    }

    get mostrarlibros() {
        console.log(this.libros);
    }


}

let libros = new Libros();
libros.prestarLibro('1984');
libros.prestarLibro('1984')
libros.mostrarlibros;
libros.devolverLibro('1984');
libros.mostrarlibros;



////////////////////  Ejercicio 7 ///////////////////////////


class Carrito {

    constructor() {
        this.carrito = [{ nombre: "Celular", precio: 15000 },
        { nombre: "Camisa", precio: 500 },
        { nombre: "zapatos", precio: 1000 }];
    }

    agregarproducto(nombre, precio) {
        this.carrito.push({ nombre: nombre, precio: precio });
    }

    get calcularTotal() {
        let total = 0;
        this.carrito.forEach(producto => {
            total += producto.precio;
        })

        if (total >= 20000) {
            let descuento = total * 0.15;
            total = total - descuento;
        }

        console.log(`Total a pagar: ${total}`);
    }

    get mostrarproductos() {
        console.log(carrito)
    }

}

let carrito = new Carrito();
carrito.calcularTotal;
carrito.agregarproducto('Monitor', 5000);
carrito.calcularTotal;



////////////////////  Ejercicio 8 ///////////////////////////


class CuentasDeBanco {

    constructor(nombre, numCuenta) {
        this.nonbre = nombre;
        this.numCuenta = numCuenta;
    }

}

class Banco {

    constructor() {
        this.cuentas = [];
    }

    agregarCuenta(cuenta, saldo = 0) {
        this.cuentas.push({ ...cuenta, saldo })
    }

    depositar(numCuenta, cantidad) {
        this.cuentas.forEach(cuenta => {
            if (numCuenta === cuenta.numCuenta) {
                cuenta.saldo += cantidad;
            }
        });
    }

    retirar(numCuenta, cantidad) {
        this.cuentas.forEach(cuenta => {
            if (numCuenta === cuenta.numCuenta) {
                cuenta.saldo -= cantidad;
            }
        });
    }

    transferir(ordenante, beneficiario, cantidad) {
        this.cuentas.forEach(cuenta => {
            if (beneficiario === cuenta.numCuenta) {
                cuenta.saldo += cantidad;
            }
        });

        this.cuentas.forEach(cuenta => {
            if (ordenante === cuenta.numCuenta) {
                cuenta.saldo -= cantidad;
            }
        });
    }

    get mostrarCuentas() {
        console.log(this.cuentas);
    }
}

let cuenta1 = new CuentasDeBanco('Ivan', '133422343', 0);
let cuenta2 = new CuentasDeBanco('Juan', '23354537', 0);
let banco = new Banco();
banco.agregarCuenta(cuenta1);
banco.agregarCuenta(cuenta2);
banco.depositar('133422343', 100)
banco.retirar('133422343', 50)
banco.transferir('133422343', '23354537', 30)
banco.mostrarCuentas;





///////////////////////// Funciones ////////////////////////////////////////////////////

////////////////////  Ejercicio 9 ///////////////////////////



function estadisticas(arreglo) {
    resultados = []

    let max = Math.max(...arreglo);
    let min = Math.min(...arreglo);
    let suma = arreglo.reduce((acumulador, valorActual) => {
        return acumulador + valorActual
    }, 0);
    let promedio = suma / arreglo.length;


    resultados = [{ Max: max, Min: min, Promedio: promedio, Suma: suma }]

    return resultados;
}
let array = [2, 5, 7, 8, 9, 20];
const estad = estadisticas(array);
console.log(estad)



////////////////////  Ejercicio 10 ///////////////////////////


function palindromo(word) {
    let palabra = word.toLowerCase().trim().normalize("NFD")
    let wordReverse = palabra.split('').reverse().join('')
    if (palabra === wordReverse) {
        console.log("La palabra es palindromo")
    } else {
        console.log("No es palindromo")
    }
}

palindromo('osO')
palindromo('ivan')


////////////////////  Ejercicio 11 ///////////////////////////

function personaDeMayorEdad(...personas) {

    let personaMayor = personas[0];
    let personaMayorNombre = personaMayor.nombre;

    personas.forEach(persona => {
        if (persona.edad > personaMayor.edad) {
            personaMayor = persona;
            personaMayorNombre = persona.nombre
        }
    })

    return personaMayorNombre

}


let personaMayor = personaDeMayorEdad({ nombre: 'ivan', edad: 26 }, { nombre: 'Juan', edad: 36 }, { nombre: 'Maria', edad: 40 })

console.log(personaMayor)


////////////////////  Ejercicio 12 ///////////////////////////


function convertidorDeNumeros(numero) {
    const numeros = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    let total = 0;

    for (let i = 0; i < numero.length; i++) {
        const numeroActual = numeros[numero[i]];
        const numeroSiguiente = numeros[numero[i + 1]];

        if (numeroActual < numeroSiguiente) {
            total -= numeroActual;
        } else {
            total += numeroActual;
        }
    }

    return total;
}

console.log(convertidorDeNumeros('III'));
console.log(convertidorDeNumeros('XIV'));


////////////////// Callbacks /////////////////////////////////////////////////////////////
////////////////////  Ejercicio 13 ///////////////////////////


function consulta(callbackExito, callbackError) {

    const consultaExitosa = Math.random() > 0.3;

    setTimeout(() => {
        if (consultaExitosa === true) {
            const datos = { nombre: 'ivan', edad: 26 };
            callbackExito(datos);
        } else {
            callbackError("Ocurrio un error en la consulta");
        }
    }, 2000)

    console.log("consulta en proceso ...")
}

consulta((datos) => {
    console.log("Operacion exitosa")
    console.log(datos)
}, (mensajeError) => {
    console.log(mensajeError);
})

////////////////////  Ejercicio 14 ///////////////////////////


function procesarLista(lista, callbackFilter, callbackMap, callbackReduce, valorinicial) {
    return lista.filter(callbackFilter).map(callbackMap).reduce(callbackReduce, valorinicial)
}



const listaNumeros = [1, 5, 7, 2, 1, 8];

const resultado = procesarLista(listaNumeros, (num) => {
    return num % 2 === 0
}, (num) => {
    return num ** 2
}, (acumulador, num) => {
    return acumulador + num;
}, 0);

console.log(resultado);




////////////////////  Ejercicio 15 ///////////////////////////


function login(usuario, password, callbackExito, callbackError) {

    if (usuario == "" || password.length < 5) {
        callbackError("Usuario o password incorrecto")
    } else {
        callbackExito("Bienvenido!")
    }
}

const respuesta = login('ivan', 'ivan123', (mensaje) => {
    console.log(mensaje)
}, (mensaje) => {
    console.log(mensaje)
})



////////////////////  Ejercicio 16 ///////////////////////////


function tareas(tareas, callback) {
    let contador = 0;
    tareas.forEach((tarea,index) => {
            setTimeout(() => {
                console.log(tarea);
                contador++;

                if(contador === tareas.length){
                    callback('Todas las tareas completadas');
                }
            }, 2000 * (index + 1));

    })
}
 const arrayTareas = ['Hacer tarea' , 'Limpiar' , 'Estudiar' , 'Salir'];
const tareasResultado = tareas(arrayTareas, (mensaje) =>{
    console.log(mensaje)
})