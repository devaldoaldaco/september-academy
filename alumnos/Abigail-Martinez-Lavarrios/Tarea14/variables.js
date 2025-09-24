// 1. numero a formato moneda
let num = 1234567
let moneda = num.toLocaleString("es-MX",{
    style:"currency",
    currency:"MXN"})
console.log("formato: ", moneda)

// 2. frecuencia de letras
let txt = "elefante"
let freq = {}
for(let l of txt){
  freq[l] = (freq[l]||0)+1
}
console.log("letras:", freq)

// 3. fechas a objetos
let fechas = "2025-09-15, 2023-02-10, 2024-06-25"
let arrFechas = fechas.split(",").map(f=>{
  let [y,m,d] = f.trim().split("-")
  return {año:y, mes:m, dia:d}
})
console.log("fechas:", arrFechas)

// 4. correos en un solo string → correos validados
let correos = "correo1@gmail.com; correo2@outlook.com; correo3@incorrecto"; 
let lista = correos.split(";");
lista = lista.map(c => c.trim());
let validos = lista.filter(c => c.includes("@") && c.includes("."));
console.log("String completo:", lista);
console.log("Correos válidos:", validos);

