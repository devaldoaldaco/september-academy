//se van a almacenar lo que se indique en la pantalla
let numeros = [];
//funciones para cada button
function cero() {
    let pantalla = document.querySelector('#pantalla');
    console.log(pantalla);
    pantalla.value += '0';
    numeros.push(0);
}
function uno() {
    let pantalla = document.querySelector('#pantalla');
    console.log(pantalla);
    pantalla.value += '1';
    numeros.push(1);
}
function dos() {
    let pantalla = document.querySelector('#pantalla');
    console.log(pantalla);
    pantalla.value += '2';
    numeros.push(2);
}
function tres() {
    let pantalla = document.querySelector('#pantalla');
    console.log(pantalla);
    pantalla.value += '3';
    numeros.push(3);
}
function cuatro() {
    let pantalla = document.querySelector('#pantalla');
    console.log(pantalla);
    pantalla.value += '4';
    numeros.push(4);
}
function cinco() {
    let pantalla = document.querySelector('#pantalla');
    console.log(pantalla);
    pantalla.value += '5';
    numeros.push(5);
}
function seis() {
    let pantalla = document.querySelector('#pantalla');
    console.log(pantalla);
    pantalla.value += '6';
    numeros.push(6);
}
function siete() {
    let pantalla = document.querySelector('#pantalla');
    console.log(pantalla);
    pantalla.value += '7';
    numeros.push(7);
}
function ocho() {
    let pantalla = document.querySelector('#pantalla');
    console.log(pantalla);
    pantalla.value += '8';
    numeros.push(8);
}
function nueve() {
    let pantalla = document.querySelector('#pantalla');
    console.log(pantalla);
    pantalla.value += '9';
    numeros.push(9);
}
//en estos caracteres hay que verificar que no se repitan doble operacion o punto.
function punto() {
    let pantalla = document.querySelector('#pantalla');

    
    
    let contenidoPantalla= pantalla.value;
    let ultimoCaracter= contenidoPantalla.slice(-1);
    if((ultimoCaracter=='.')){
        alert('No puedes poner doble operador o punto.');
    }else if((ultimoCaracter=='/')){
        alert('No puedes poner doble operador o punto.');
        return;
    }else if((ultimoCaracter=='*')){
        alert('No puedes poner doble operador o punto.');
        return;
    }else if((ultimoCaracter=='-')){
        alert('No puedes poner doble operador o punto.');
        return;
    }else if((ultimoCaracter=='+')){
        alert('No puedes poner doble operador o punto.');
        return;
    }else{
        pantalla.value += '.';
        
    }
    numeros.push('.');
    
}
function suma() {
    let pantalla = document.querySelector('#pantalla');

    let contenidoPantalla= pantalla.value;
    let ultimoCaracter= contenidoPantalla.slice(-1);
    if((ultimoCaracter=='.')){
        alert('No puedes poner doble operador o punto.');
    }else if((ultimoCaracter=='/')){
        alert('No puedes poner doble operador o punto.');
        return;
    }else if((ultimoCaracter=='*')){
        alert('No puedes poner doble operador o punto.');
        return;
    }else if((ultimoCaracter=='-')){
        alert('No puedes poner doble operador o punto.');
        return;
    }else if((ultimoCaracter=='+')){
        alert('No puedes poner doble operador o punto.');
        return;
    }else{
        pantalla.value += '+';
        
    }
    numeros.push('+');
}
function resta() {
    let pantalla = document.querySelector('#pantalla');

    
    
    let contenidoPantalla= pantalla.value;
    let ultimoCaracter= contenidoPantalla.slice(-1);
    if((ultimoCaracter=='.')){
        alert('No puedes poner doble operador o punto.');
    }else if((ultimoCaracter=='/')){
        alert('No puedes poner doble operador o punto.');
        return;
    }else if((ultimoCaracter=='*')){
        alert('No puedes poner doble operador o punto.');
        return;
    }else if((ultimoCaracter=='-')){
        alert('No puedes poner doble operador o punto.');
        return;
    }else if((ultimoCaracter=='+')){
        alert('No puedes poner doble operador o punto.');
        return;
    }else{
        pantalla.value += '-';
        
    }
    numeros.push('-');
}
function multiplicar() {
    let pantalla = document.querySelector('#pantalla');

    let contenidoPantalla= pantalla.value;
    let ultimoCaracter= contenidoPantalla.slice(-1);
    if((ultimoCaracter=='.')){
        alert('No puedes poner doble operador o punto.');
    }else if((ultimoCaracter=='/')){
        alert('No puedes poner doble operador o punto.');
        return;
    }else if((ultimoCaracter=='*')){
        alert('No puedes poner doble operador o punto.');
        return;
    }else if((ultimoCaracter=='-')){
        alert('No puedes poner doble operador o punto.');
        return;
    }else if((ultimoCaracter=='+')){
        alert('No puedes poner doble operador o punto.');
        return;
    }else{
        pantalla.value += '*';
        
    }
    numeros.push('*');
}
function division() {
    let pantalla = document.querySelector('#pantalla');

    
    
    let contenidoPantalla= pantalla.value;
    let ultimoCaracter= contenidoPantalla.slice(-1);
    if((ultimoCaracter=='.')){
        alert('No puedes poner doble operador o punto.');
    }else if((ultimoCaracter=='/')){
        alert('No puedes poner doble operador o punto.');
        return;
    }else if((ultimoCaracter=='*')){
        alert('No puedes poner doble operador o punto.');
        return;
    }else if((ultimoCaracter=='-')){
        alert('No puedes poner doble operador o punto.');
        return;
    }else if((ultimoCaracter=='+')){
        alert('No puedes poner doble operador o punto.');
        return;
    }else{
        pantalla.value += '/';
        
    }
    numeros.push('/');
}
function borrar() {
    let pantalla = document.querySelector('#pantalla');
    console.log(pantalla);
    pantalla.value = '';
    numeros = []; //vaciarlo
}

//funcion principal la cual realoza las operaciones
function igual() {
    let num = []; //arreglo de numeros como strings
    let oper = []; //arreglo de operaciones que se realizan
    let numero = ''; //concatenacion para guardar numero en otro arreglo


    for (let i = 0; i < numeros.length; i++) {
        if (((typeof (numeros[i])) === 'number') || (numeros[i]) == '.') {
            numero += numeros[i]; //sse concatena el numero
        } else {//es string como un operador
            oper.push(numeros[i]); //se guarda el operador
            num.push(numero); //se guarda el numero que se iba concatenando
            numero = '';//se resetea para guardar otro numero
        }
    }
    num.push(numero);//ultimo numero a guardar

    //pruebas que guarad numeros y operadores por aparte
    console.log(num);
    console.log(oper);

    //conversion del arreglo de string a number
    let numNumber = num.map(Number);

    console.log(numNumber);

    //es esta seccion se realizan las operaciones
    let resultado = 0;

    for (let i = 0; i < oper.length; i++) {

        switch (oper[i]) {
            case '*':
                if (i == 0) {
                    //esto es en la primer vuelta para que tome dos numeros del arrreglo
                    resultado += numNumber[i] * numNumber[i + 1];
                } else {
                    //lo que resta del arreglo para hacer la operacion con el resultado anterior
                    resultado += (resultado * numNumber[i + 1]) - resultado;
                }
                break;
            case '/':
                if (i == 0) {
                    //esto es en la primer vuelta para que tome dos numeros del arrreglo
                    resultado += numNumber[i] / numNumber[i + 1];
                } else {
                    //lo que resta del arreglo para hacer la operacion con el resultado anterior
                    resultado += (resultado / numNumber[i + 1]) - resultado;
                }
                break;
            case '-':
                if (i == 0) {
                    //esto es en la primer vuelta para que tome dos numeros del arrreglo
                    resultado += numNumber[i] - numNumber[i + 1];
                } else {
                    //lo que resta del arreglo para hacer la operacion con el resultado anterior
                    resultado += (resultado - numNumber[i + 1]) - resultado;
                }
                break;
            case '+':
                if (i == 0) {
                    //esto es en la primer vuelta para que tome dos numeros del arrreglo
                    resultado += numNumber[i] + numNumber[i + 1];
                } else {
                    //lo que resta del arreglo para hacer la operacion con el resultado anterior
                    resultado += (resultado + numNumber[i + 1]) - resultado;
                }
                break;

            default:
                alert('ya valio :(');
                break;
        }

    }
    //checamos resultado
    console.log(resultado);
    let pantalla = document.querySelector('#pantalla');
    console.log(pantalla);
    pantalla.value = resultado;

}
