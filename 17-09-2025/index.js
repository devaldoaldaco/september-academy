const body = document.querySelector('body');
console.log(body.__proto__);
console.log(body.children);

// REMOVE ITEMS FROM HTML
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    const spn = document.querySelector('span')
    // spn.remove();
    body.removeChild(spn);
    console.log(body.firstChild);
    body.firstElementChild.remove();
});

// ELEMENTS COMUNICATION 
btn.addEventListener('click', (ev) => {
    console.log(ev);
    window.addEventListener('todo-completed', (ev) => {
        console.log(ev);
    });
    dispatchEvent(new CustomEvent('todo-completed', {
        bubbles: true,
        composed: true,
        detail: function() {}
    }));
});

// DESIGN PATTERNS
// Mixin
// PubSub
// Mediator
// Factory
// Module => ES Modules


// import * as LitLibrary from 'lit';
// console.log(LitLibrary.LitElement);

console.log("Inicio");

setTimeout(() => console.log("⌛ Timeout (Macrotask)"), 0);

Promise.resolve().then(() => console.log("✅ Promesa resuelta (Microtask)"));

console.log("Fin");


// CALLBACKS & PROMISES

function getUserNameData(id, callback) {
    console.log('Buscando informacion del usuario');
    setTimeout(() => {
        const user = {id: id, name: 'Aldo', age: 28};
        callback(user);
    }, 4000);
}

function getUserLocationData(id, callback) {
     setTimeout(() => {
        const user = {id: id, name: 'Aldo', age: 28};
        callback(user);
    }, 4000);
    console.log(`Soy ${user.name} y tengo ${user.age}`);
}

// getUserNameData(1, (id) => {
//     getUserLocationData(id, () => {
//         getUserPreferencesData(id, () => {
//             a(1, () => {
//                 b() {

//                 }
//             })
//         });
//     });
// });

//callback hell


// PROMISES

const getUserData = function() {   
    const respuesta = new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true;
            if(flag) {
                resolve('exito');// cambio a  fullfilled
            } else {
                reject('error');// cambio a rejected
            }
            // throw new Error('HUBO UN ERROR');
        }, 2000);
    });
    
    return respuesta;
}

const resultado = getUserData()
.then(exito => {
    console.log('ESTO DEBERIA DE PASAR 1');
    console.log(exito);
})
.then(response => response.json())
.catch(error => {
    console.log('ESTO DEBERIA DE PASAR 2');
    console.log(error);
});

async function getPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        console.log(response);
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

getPost();