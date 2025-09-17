// 13.	Crea una función que simule una operación asíncrona (como consultar una base de datos) usando setTimeout. La función debe recibir un callback que maneje éxito y error.
function consultarBaseDatos(callback) {
  setTimeout(() => {
    let exito = Math.random() > 0.3; // 70% de probabilidad de éxito
    if (exito) callback(null, "Datos obtenidos correctamente");
    else callback("Error al consultar la base de datos", null);
  }, 1000);
}
consultarBaseDatos((error, datos) => console.log(error || datos));

// 14.	Implementa una función que procese una lista de números en 3 pasos:
	//•	Filtrar (callback)
	//•	Transformar (callback)
	//•	Reducir a un valor final (callback)
function procesarNumeros(numeros, filtrar, transformar, reducir) {
  let filtrados = numeros.filter(filtrar);
  let transformados = filtrados.map(transformar);
  return transformados.reduce(reducir);
}
let resultado = procesarNumeros(
  [1, 2, 3, 4, 5, 6],
  (n) => n % 2 === 0,
  (n) => n * 2,
  (a, b) => a + b
);
console.log("Resultado final:", resultado);

// 15.	Escribe una función que simule un sistema de login: recibe usuario y contraseña y usa un callback para responder si la validación fue exitosa o fallida.
function login(usuario, contraseña, callback) {
  let baseUsuarios = { admin: "1234", user: "abcd" };
  setTimeout(() => {
    if (baseUsuarios[usuario] && baseUsuarios[usuario] === contraseña)
      callback(null, "Login exitoso");
    else callback("Usuario o contraseña incorrecta");
  }, 500);
}
login("admin", "1234", (error, mensaje) => console.log(error || mensaje));

// 16.	Crea una función que lea un arreglo de tareas (strings) y las ejecute una por una con setTimeout, usando un callback cuando todas hayan terminado.
function ejecutarTareasSecuenciales(tareas, callbackFinal) {
  let indice = 0;
  function ejecutar() {
    if (indice < tareas.length) {
      console.log("Ejecutando:", tareas[indice]);
      setTimeout(() => {
        indice++;
        ejecutar();
      }, 500);
    } else {
      callbackFinal("Todas las tareas completadas ✅");
    }
  }
  ejecutar();
}
ejecutarTareasSecuenciales(["Tarea 1", "Tarea 2", "Tarea 3"], (mensaje) =>
  console.log(mensaje)
);
