// 9. stats de arreglo
function sacarStats(arr){
  let suma = arr.reduce((a,b)=>a+b,0)
  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
    promedio: suma/arr.length,
    suma
  }
}
console.log(sacarStats([2,4,6,8]))

// 10. palíndromo
// Un palíndromo es una palabra, frase o número que se lee igual de izquierda a derecha que de derecha a izquierda.
// aqui si haré comentarios en las lineas de codigo para tenerlos como guia porque hay cosas que no había visto

function esPalindromo(txt){
  let limpio = txt.toLowerCase()
    // 2. Quitar acentos
    .normalize("NFD").replace(/[\u0300-\u036f]/g,"") //quita acentos para que las letras queden sin nada
    .replace(/ /g,"") //quita espacios

  return limpio === limpio.split("").reverse().join("") //invierte la cadena
}
console.log(esPalindromo("Anita lava la tina")) // true si la frase se lee igual al reves


// 11. persona mayor
function mayorEdad(lista){
  return lista.reduce((max,p)=>p.edad>max.edad? p:max)
}
console.log(mayorEdad([{nombre:"Ana",edad:50},{nombre:"Luis",edad:35}]))

// 12. romano a entero
function romanoAEntero(romano){
  const val={I:1,V:5,X:10,L:50,C:100,D:500,M:1000}
  let total=0
  for(let i=0;i<romano.length;i++){
    let act=val[romano[i]]
    let sig=val[romano[i+1]]||0
    total += act<sig? -act:act
  }
  return total
}
console.log(romanoAEntero("XIV"))
