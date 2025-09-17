// 9.	Crea una función que reciba un arreglo de números y devuelva un objeto con estadísticas: {max, min, promedio, suma}.
function obtenerEstadisticas(numeros) {
  let suma = numeros.reduce((total, n) => total + n, 0);
  return {
    max: Math.max(...numeros),
    min: Math.min(...numeros),
    promedio: suma / numeros.length,
    suma,
  };
}
console.log("Estadísticas:", obtenerEstadisticas([10, 20, 30, 40]));

// 10.	Escribe una función que valide si una cadena es un palíndromo (ignorando mayúsculas, espacios y acentos).
function esPalindromo(texto) {
  let limpio = texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quitar acentos
    .replace(/\s+/g, "");
  return limpio === [...limpio].reverse().join("");
}
console.log("Es palíndromo:", esPalindromo("Anita lava la tina"));

// 11.	Escribe una función que reciba una lista de personas ({nombre, edad}) y devuelva la persona de mayor edad.
function personaMayor(personas) {
  return personas.reduce((mayor, p) => (p.edad > mayor.edad ? p : mayor));
}
console.log(
  "Persona mayor:",
  personaMayor([
    { nombre: "Juan", edad: 20 },
    { nombre: "Ana", edad: 35 },
  ])
);

// 12.	Implementa una función que convierta números romanos a enteros ("XIV" → 14).
function romanoAEntero(romano) {
  const valores = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;
  for (let i = 0; i < romano.length; i++) {
    let actual = valores[romano[i]];
    let siguiente = valores[romano[i + 1]] || 0;
    total += actual < siguiente ? -actual : actual;
  }
  return total;
}
console.log("Número romano XIV:", romanoAEntero("XIV"));
