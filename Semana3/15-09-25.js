
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;  // Inicializa propiedad
        this.edad = edad;      // Inicializa propiedad
    }
}

const persona1 = new Persona("Ana", 25);
console.log(persona1.nombre); // "Ana" se el objeto en este caso
console.log(persona1.edad);   // 25 la edad tambiuen es un objeto y ambos se definen con la etiqueta 'new'


  //Ejercicio 1 Convertir numero a moneda
function convertirAMoneda(numero) {
  // .toLocaleString con style: 'currency' agrega el simbolo de moneda
  return numero.toLocaleString('en-US', {
    style: 'currency',    // Indicamos que queremos formato de moneda
    currency: 'MXN',      // Aqui se puede modificar el pais al que pertenece la moneda, este caso se estan uasando pesos mexicanos
    minimumFractionDigits: 2, //Controla el numero de decimales que se van a ver en este caso el minimo
    maximumFractionDigits: 2 //En este caso son el maximo 
  });
}

// Número de ejemplo
let numeroOriginal = 500000;

// Convertimos
let numeroFormateado = convertirAMoneda(numeroOriginal);

// Mostramos en consola
console.log("Número original:", numeroOriginal);
console.log("Número en formato moneda:", numeroFormateado);


//Ejercicio 2 Contador de frecuencia de letras
function contarFrecuenciaLetras(texto) {
    const frecuencia = {};
    
    for (let letra of texto.toLowerCase()) {
        // Ignorar espacios y caracteres especiales si se desea
        if (letra.match(/[a-zñáéíóú]/i)) { //usa una expresión regular para aceptar solo letras (ignora espacios y signos)
            frecuencia[letra] = (frecuencia[letra] || 0) + 1; //si la letra ya existe en el objeto, le suma 1, si no existe, toma 0 y luego le suma 1 
        }
    }
    
    return frecuencia;
}

// Ejemplo de uso
const texto = "City Walls";
console.log(contarFrecuenciaLetras(texto));
// Output: {h:1, o:2, l:1, a:1, m:1, u:1, n:1, d:1}

//Metodos usados
//toLowerCase(): Convierte a minúsculas para contar sin distincion

//match(): Filtra solo letras (opcional)

//Bucle for...of: Recorre cada caracter del string


//Ejercicio 3 Conversion de fechas a objetos
function convertirFechas(fechasStr) {
    return fechasStr.split(', ').map(fecha => {// corta el string en cada coma (separa fechas), Map transforma cada fecha en un objeto.
        const [año, mes, día] = fecha.split('-');
        return {
            año: parseInt(año), //parseInt()  convierte cada parte de string a número.
            mes: parseInt(mes),
            día: parseInt(día)
        };
    });
}

// Ejemplo de uso
const fechas = "2025-09-15, 2023-02-10, 2024-06-25"; //Devuelve un array de objetos
console.log(convertirFechas(fechas));


// Ejercicio 4. Validación de correos electronicos
function limpiarYValidarCorreos(correosStr) {
    return correosStr.split(';')
        .map(correo => correo.trim())
        .filter(correo => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(correo);
        });
}

// Ejemplo de uso
const correos = "user1@mail.com; user2@mail.com; invalido; user3@mail.com";
console.log(limpiarYValidarCorreos(correos));
// Output: ["user1@mail.com", "user2@mail.com", "user3@mail.com"]

// Ejercicio 5 Playlist de música
const playlist = {
    canciones: [],
    
    
    agregarCancion(título, artista, duración) {
        this.canciones.push({ título, artista, duración });
    },
    
    
    eliminarCancion(título) {
        this.canciones = this.canciones.filter(c => c.título !== título);
    },
    
    
    calcularDuracionTotal() {
        return this.canciones.reduce((total, cancion) => total + cancion.duración, 0);
    }
};

// Ejemplo de uso
playlist.agregarCancion("City Walls", "Twenty One Pilots", 355);
playlist.agregarCancion("Yo siempre contesto", "Latin Mafia", 183);
console.log(playlist.calcularDuracionTotal()); // 538

//Ejercicio 6 Biblioteca de libros

const biblioteca = {
    libros: [
        { titulo: "Cien años de soledad", estado: "disponible" },
        { titulo: "1984", estado: "disponible" },
        { titulo: "El Quijote", estado: "prestado" }
    ],
    
    prestarLibro(titulo) {
        const libro = this.libros.find(l => l.titulo === titulo);
        if (libro && libro.estado === "disponible") {
            libro.estado = "prestado";
            return true;
        }
        return false;
    },
    
    devolverLibro(titulo) {
        const libro = this.libros.find(l => l.titulo === titulo);
        if (libro && libro.estado === "prestado") {
            libro.estado = "disponible";
            return true;
        }
        return false;
    },
    
    mostrarDisponibles() {
        return this.libros.filter(libro => libro.estado === "disponible");
    }
};

// Ejercicio 7 Carrito de compras con descuentos
const carrito = {
    productos: [],
    
    agregarProducto(nombre, precio, cantidad = 1) {
        this.productos.push({ nombre, precio, cantidad });
    },
    
    calcularTotal() {
        const subtotal = this.productos.reduce((total, producto) => {
            return total + (producto.precio * producto.cantidad);
        }, 0);
        
        // Aplicar descuento del 10% si el total supera $100
        if (subtotal > 100) {
            return subtotal * 0.9;
        }
        
        return subtotal;
    }
};

// Ejemplo de uso
carrito.agregarProducto("Laptop", 800, 1);
carrito.agregarProducto("Mouse", 25, 2);
console.log(carrito.calcularTotal());

//Ejercicio  8. Sistema bancario simple

const banco = {
    cuentas: [
        { id: 1, titular: "Juan", saldo: 1000 },
        { id: 2, titular: "Maria", saldo: 2000 }
    ],
    
    depositar(idCuenta, monto) {
        const cuenta = this.cuentas.find(c => c.id === idCuenta);
        if (cuenta && monto > 0) {
            cuenta.saldo += monto;
            return true;
        }
        return false;
    },
    
    retirar(idCuenta, monto) {
        const cuenta = this.cuentas.find(c => c.id === idCuenta);
        if (cuenta && cuenta.saldo >= monto && monto > 0) {
            cuenta.saldo -= monto;
            return true;
        }
        return false;
    },
    
    transferir(origenId, destinoId, monto) {
        if (this.retirar(origenId, monto)) {
            return this.depositar(destinoId, monto);
        }
        return false;
    }
};

//Ejercicio 9 Estadísticas de números
function calcularEstadisticas(numeros) {
    if (numeros.length === 0) return null;
    
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    
    return {
        max: Math.max(...numeros),
        min: Math.min(...numeros),
        promedio: suma / numeros.length,
        suma: suma
    };
}

// Ejemplo de uso
console.log(calcularEstadisticas([1, 2, 3, 4, 5]));

// Ejercicio 10 Palindromo
function esPalindromo(texto) {
    // Limpiar texto: minúsculas, sin espacios ni acentos
    const limpio = texto.toLowerCase()
        .replace(/[áéíóú]/g, letra => 
            letra === 'á' ? 'a' :
            letra === 'é' ? 'e' :
            letra === 'í' ? 'i' :
            letra === 'ó' ? 'o' : 'u'
        )
        .replace(/\s/g, '');
    
    // Comparar con su reverso
    return limpio === limpio.split('').reverse().join('');
}

console.log(esPalindromo("Anita lava la tina")); // true

// Ejercicio 11 Persona de mayor edad
function personaMayorEdad(personas) {
    return personas.reduce((mayor, persona) => {
        return persona.edad > mayor.edad ? persona : mayor;
    });
}

// Ejemplo de uso
const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Maria", edad: 30 },
    { nombre: "Pedro", edad: 20 }
];

console.log(personaMayorEdad(personas)); // { nombre: "Maria", edad: 30 }

// Ejercicio 12 Romanos a enteros
function romanoAEntero(romano) {
    const valores = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    
    let total = 0;
    
    for (let i = 0; i < romano.length; i++) {
        const actual = valores[romano[i]];
        const siguiente = valores[romano[i + 1]];
        
        if (siguiente && actual < siguiente) {
            total -= actual;
        } else {
            total += actual;
        }
    }
    
    return total;
}

console.log(romanoAEntero("XIV")); // 14

//Ejercicio 13 Operación asíncrona con callback
function consultarBaseDeatos(id, callback) {
    console.log(`Consultando ID: ${id}...`);
    
    setTimeout(() => {
        const exito = Math.random() > 0.3; // 70% de éxito
        
        if (exito) {
            callback(null, { id, data: "Información obtenida" });
        } else {
            callback("Error: No se pudo conectar", null);
        }
    }, 1000);
}

// Uso
consultarBaseDeatos(123, (error, resultado) => {
    if (error) {
        console.error(error);
    } else {
        console.log("Resultado:", resultado);
    }
});

//Ejercicio 14 Procesamiento de números con callbacks

function procesarNumeros(numeros, filtrar, transformar, reducir) {
    const filtrados = numeros.filter(filtrar);
    const transformados = filtrados.map(transformar);
    return reducir(transformados);
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = procesarNumeros(
    numeros,
    n => n % 2 === 0, // Filtrar pares
    n => n * 2,        // Duplicar
    arr => arr.reduce((a, b) => a + b, 0) // Sumar
);

console.log(resultado); // 60


// Ejercicio 15 Sistema de login con callback
function login(usuario, contraseña, callback) {
    setTimeout(() => {
        const usuariosValidos = {
            "admin": "1234",
            "user": "password"
        };
        
        if (usuariosValidos[usuario] === contraseña) {
            callback(null, "Login exitoso");
        } else {
            callback("Credenciales inválidas", null);
        }
    }, 500);
}

// Uso
login("admin", "1234", (error, mensaje) => {
    if (error) {
        console.error(error);
    } else {
        console.log(mensaje);
    }
});


// Ejercicio 16 Ejecucion de tareas con setTimeout y callback
function ejecutarTareas(tareas, callback) {
    let completadas = 0;
    
    tareas.forEach((tarea, index) => {
        setTimeout(() => {
            console.log(`Ejecutando: ${tarea}`);
            completadas++;
            
            if (completadas === tareas.length) {
                callback("Todas las tareas completadas");
            }
        }, index * 1000); // 1 segundo entre cada tarea
    });
}

// Uso
const tareas = ["Backup", "Limpieza", "Reporte"];
ejecutarTareas(tareas, mensaje => {
    console.log(mensaje);
});