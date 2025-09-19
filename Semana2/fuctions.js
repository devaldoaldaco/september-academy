let edad = 10

console.log(edad*2)
console.log(edad/2)
console.log(edad-2)
console.log(edad+2)
console.log(edad%2)
console.log(edad**2)

console.log(edad == 10);//comparacion no estricta
console.log(edad === 10);//comparacion estricta
console.log(edad != 11);//valida el valor
console.log(edad !== 10);//valida el valor y el tipo de dato


console.log({} == {})//compara referencias y espacios de memoria
console.log({} == [])

console.log(!true)//el signo de admiracion niega el valor que le estas dando y lo pasa al contrario
console.log(!false)//siempre se niega

console.log(!![])
console.log(!!'')

console.log(!!{} == !![])

const alumnos = []

console.log(!!{} == !!alumnos)  //valores falsy null, undefiend, 0

//?? evita que este indefinido el objeto, es buena practica para casos donde sabemos que una variable esta vacia pero en el futuro se va a llenar
// valores truty
//?. Es un operador que te permite acceder a propiedades, métodos o índices de arrays sin que tu programa se rompa cuando alguna parte intermedia es null o undefined.
function suma(a,b,c){
console.log(arguments)
return a*b*c

}

console.log(suma(20,100,3))  //arguemnts es una coleccion de los argumentos **
//this toma un valor de el objeto que es dueño de la funcion, normalmente siempre depende de el contexto


const despedir = () => {
    console.log()
} //

// los escope se generan cuando haces uso de los {} 

const restar=(a,b) => console.log(a - b)
const resultado = restar(1,2)
console.log(resultado) //pinta el valor que esta en medio de los parentesis 