/*⸻
📌 Funciones
    9.	Crea una función que reciba un arreglo de números y devuelva un objeto con estadísticas: {max, min, promedio, suma}.
*/
console.log('--------------Ejercicio9------------');

//arreglo d enumeros
let numeros = [2, 6, 3, 6, 9, 4, 6, 8, 1, 2];

//funcion con parametro de un arreglo d enumeros
function ejer4(arrNumeros) {

    //objeto a usar
    let objNumeros = {
        max: 0,
        min: 0,
        promedio: 0,
        suma: 0
    };

    //ciclo for para sacar suma
    for (let i = 0; i < arrNumeros.length; i++) {
        //suma
        objNumeros.suma += arrNumeros[i];
    }

    //max con la clase math
    objNumeros.max = Math.max(...arrNumeros);

    //min con la clase math
    objNumeros.min = Math.min(...arrNumeros);
    //promedio del arreglo
    objNumeros.promedio = objNumeros.suma / arrNumeros.length;

    //se devuelve el resultado por la funcion
    return objNumeros;
}

console.log(ejer4(numeros));

/*
    10.	Escribe una función que valide si una cadena es un palíndromo (ignorando mayúsculas, espacios y acentos).
*/
console.log('-----------Ejer10----------------')
//cadena a comparar
let cadena = 'ana';

function esPalindromo(cadena) {
    //convertimos a minusculas
    let cadena1 = cadena.toLowerCase();
    //revertimos la cadena
    let cadena2 = cadena1.split('').reverse().join('');
    //comprobacion
    console.log(cadena2);

    if (cadena1 == cadena2) {
        return 'Son palindormoss'
    } else {
        return 'No son palindormoss'
    }
}

console.log(esPalindromo(cadena));
/*
    11.	Escribe una función que reciba una lista de personas ({nombre, edad}) y devuelva la persona de mayor edad.
*/
console.log('------------------Ejer11--------------');

//arreglo d eobjetos a usar
let arrObjPers=[
    {
        nombre: 'johan',
        edad: 67
    },
    {
        nombre: 'karen',
        edad: 56
    },
    {
        nombre: 'fer',
        edad: 78
    },
    {
        nombre: 'kira',
        edad: 34
    },
    {
        nombre: 'joshua',
        edad: 89
    },
]


function mayorEdad(arrObjPers){
    let edades=[];

    //registramos solo las edades
    for(let i=0;i<arrObjPers.length;i++){
        console.log(arrObjPers[i].edad);
        edades.push(arrObjPers[i].edad);
        console.log(edades);
    }
    //sacamos la edad mayor
    let edadMax= Math.max(...edades);
    //console.log(edadMax);

    //buscamos le nombre y lo devolvemos le resultado
    for(let i=0;i<arrObjPers.length;i++){
        if(arrObjPers[i].edad==edadMax){
            return arrObjPers[i].nombre;
        }
    }

}
console.log(mayorEdad(arrObjPers));

/*
12.	Implementa una función que convierta números romanos a enteros ("XIV" → 14).
*/

console.log('---------------Ejer12---------');
function ejer12(romano){

    //numero romano
    let caracter=romano;
    //arreglo para guardar valores numericos
    let arrNum=[];

    //establecemos el valor de cada letra y guardamos en el arreglo
    for(let i=0;i<caracter.length;i++){
        //console.log(caracter[i]);
        if(caracter[i]=='I'){
            arrNum.push(1);
        }else if(caracter[i]=='V'){
            arrNum.push(5);
        }else if(caracter[i]=='X'){
            arrNum.push(10);
        }else if(caracter[i]=='L'){
            arrNum.push(50);
        }else if(caracter[i]=='C'){
            arrNum.push(100);
        }else if(caracter[i]=='D'){
            arrNum.push(500);
        }else if(caracter[i]=='M'){
            arrNum.push(1000);
        }
    }

    //total para el resultado
    let total=0;

    //ciclo for para el recorido del arreglo y sumado
    for(let i=0;i<arrNum.length;i++){
        //condicion acerca de los numeros romanos
        if((i+1<arrNum.length)&&(arrNum[i]<arrNum[i+1])){
            total-=arrNum[i];
        }else{
            total+= arrNum[i];
        }
    }

    console.log(arrNum);
    return total;

}

console.log(ejer12('XV'));
console.log(ejer12('XLII'));
console.log(ejer12('III'));