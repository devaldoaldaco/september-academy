/*📌 Variables 
1.	Escribe un programa que convierta un número en formato de moneda (ejemplo: 1234567 → $1,234,567.00).
*/
console.log('----------Ejercicio1-----------')
let numero = 1234567; //numero de prueba
let numeroString = numero.toString(); //conversion de number a string

//console.log(numeroString);  prueba para jugar cion caracteres
let x = numeroString.length - 1; //iterador

let moneda = ''; //resultado
//usamos un do-while debido que se necesita ejecutar primero las operaciones
do {
    console.log(`Pos ${x} - ${numeroString[x]}`); //prueba que va iterando de atras hacia adelante

    if ((x % 3 == 0) && (x != numeroString.length - 1)) { //modulo de 3 para coma, y no poner una coma al inicio
        moneda = `${numeroString[x]},${moneda}`; //agregamos coma y concatenamos
        x--;
    } else {
        moneda = `${numeroString[x]}${moneda}`; //concatenamos
        x--;
    }
} while (x >= 0); //condicion

moneda = `$${moneda}`; //agregamos ultimo caracter

console.log(moneda); //imprimimos resultado


/*
    2.	Crea un programa que guarde en una variable un texto y cuente cuántas veces aparece cada letra (frecuencia de caracteres).
*/
console.log('-----------Ejercicio2------------');
let frase = 'johan hernandez';
//usamos el map para guardar la llave y el valor, en este caso la llave es el caracter y el valos las veces que se repite
let caracteresMap = new Map();

for (let i = 0; i < frase.length; i++) {
    let caracter = frase[i]; //almacenamos cada caracter para el ciclo de decision
    if (caracteresMap.has(frase[i])) { //pregunta si ese caracter ya esta guardado para no repetir
        caracteresMap.set(caracter, caracteresMap.get(caracter) + 1); //en caso de que exista al valor se le aunmenta 1
    } else {
        caracteresMap.set(caracter, 1); //en caso de ser nuevo el valor, se almacena con el valor de 1 repeticion
    }

}
//se imprime el total de caracteres del string
console.log(caracteresMap);
//se imprime frase original
console.log(frase);


/*
    3.	Dado un string con fechas en formato "2025-09-15, 2023-02-10, 2024-06-25", conviértelo en un arreglo de objetos con {año, mes, día}.
*/
console.log('--------------Ejercicio3----------------')

let fechas = []; //arreglod e objetos

function agregarFecha(fechaNacimiento, fechas) { //parametros que es el formato de fecha y el arreglo donde se guardara
    let anio = fechaNacimiento.slice(0, 4); //extraemos año
    let mes = fechaNacimiento.slice(5, 7); //extraemos mes
    let dia = fechaNacimiento.slice(8, 10);  //extraemos dia

    fechas.push({ anio, mes, dia }); //agregamos el objeto al arreglo
}
//registramos varias fechas
agregarFecha('2025-09-15',fechas);
agregarFecha('2023-02-10',fechas);
agregarFecha('2024-06-25',fechas);

//imprimimos resultado
console.log(fechas);

/*
    4.	Declara una variable con una lista de correos electrónicos en un solo string separados por ; y conviértela en un arreglo limpio y validado.
*/
console.log('---------------Ejercicio4--------------')
//declaracion d ela variable con todos los correos
let correos='jonn@gmail.com;karen@gmail.com;ely@gmail.com;jonathan@gmail.com;kira@gmail.com;miriam@gmail.com;jose@gmail.com';
//arrreglo de los correo a guardar
let arregloCorreos=[];
//iterador para llevar el control de donde a donde guardar cada correo por indice
let y=0;
let correo='';
for(let i=0;i<correos.length;i++){
    if(correos[i]==';'){ //separacion de correo y guardarlos
        correo= correos.slice(y,i); //de donde a donde tomar del string para guardar el correo
        arregloCorreos.push(correo); //guardamos en el arreglo
        y=i+1; //el iterador se actualiza de donde se encontro el ';'
    }
}
//resultado
console.log(arregloCorreos);

