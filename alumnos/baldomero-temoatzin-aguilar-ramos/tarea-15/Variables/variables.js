// 1.	Escribe un programa que convierta un número en formato de moneda (ejemplo: 1234567 → $1,234,567.00).
let miNumero = 1234567;
let formatoMoneda = miNumero.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});
console.log("Número en formato moneda:", formatoMoneda);

// 2.	Crea un programa que guarde en una variable un texto y cuente cuántas veces aparece cada letra (frecuencia de caracteres).
let miTexto = "javascript es genial";
let frecuenciaLetras = {};
for (let letra of miTexto.replace(/\s+/g, "")) {
  // eliminamos espacios
  frecuenciaLetras[letra] = (frecuenciaLetras[letra] || 0) + 1;
}
console.log("Frecuencia de letras:", frecuenciaLetras);

// 3.	Dado un string con fechas en formato "2025-09-15, 2023-02-10, 2024-06-25", conviértelo en un arreglo de objetos con {año, mes, día}.
let fechasString = "2025-09-15, 2023-02-10, 2024-06-25";
let fechasObjetos = fechasString.split(", ").map((fecha) => {
  let [anio, mes, dia] = fecha.split("-");
  return { anio, mes, dia };
});
console.log("Fechas como objetos:", fechasObjetos);

// 4.	Declara una variable con una lista de correos electrónicos en un solo string separados por ; y conviértela en un arreglo limpio y validado.
let correosString = "test@gmail.com; admin@yahoo.com; usuario@outlook.com; mail@dominio";
let listaCorreosValidos = correosString
  .split(";")
  .map((email) => email.trim()) // quitar espacios
  .filter((email) => /\S+@\S+\.\S+/.test(email)); // validar formato
console.log("Correos válidos:", listaCorreosValidos);
