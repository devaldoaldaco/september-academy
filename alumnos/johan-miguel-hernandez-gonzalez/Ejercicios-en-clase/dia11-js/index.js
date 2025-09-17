const body = document.querySelector('body');

console.log(body.__proto__);
console.log(body.children);

const btn = document.querySelector('button');
//fomra para escuchasr acciones, event listener
btn.addEventListener('click', () => {
    const span = document.querySelector('span');
    //eliminamos el conetnido de sapn
    //span.remove();
    //eliminamos un hijo que es sapn
    body.removeChild(span);
})

console.log(body.children);

//patrones de diseño
//mixin
//pbsub
//mediator
//factory
//module => ES Modules

//import {calculator} from './calculator.js';

import * as Todo from './calculator.js';
console.log(Todo.suma(4, 50));

//Promise
const getUserData = function () {

    const respuesta = new Promise((resolve, reject) => {

        setTimeout(() => {
            let flag = true;

            if (flag) {
                resolve('exito');

            } else {
                reject('error');
            }
        }, 2000);
    });

    return respuesta;
}


const resultado=getUserData()
.then(exito=> {
    console.log('dssd 1');
    console.log(exito);
})
.catch(error => {
    console.log('dssd 2');
    console.log(error);

})


//await fetch

