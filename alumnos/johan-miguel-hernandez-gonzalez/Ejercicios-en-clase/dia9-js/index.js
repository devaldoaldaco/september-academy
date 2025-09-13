console.log('operadores aritmeticos');

console.log(6*'9');  //si se cumple por que js realiza typecorsion
console.log(6-9);
console.log(6+9);
console.log(6/9);
console.log(6%9);
console.log(6**9);

console.log('operadores comparación');

console.log(6==19); //preguntar igualdad - operador no estricto- solo valida el valor
console.log(6===19); //preguntar igualdad - operador  estricto-  valida el valor y tipod e dato
console.log(6!=19); //preguntar si es distinto - operador no estricto- solo valida el valor
console.log(6!==19); //preguntar si es distinto - operador estricto- solo valida el valor y tipo de dato

console.log({}=={})

//operadpres logicos
console.log(true&&false);
console.log(false&&false);
console.log(true&&false);
console.log(false&&true);

console.log(true||false);
console.log(false||false);
console.log(true||false);
console.log(false||true);


//funciones
function saludar(persona={name:'Usuario'} ,apellido='N/A'){ //valor por defecto
    console.log(...arguments);
    console.log(`Hola ${persona.name} ${apellido} como estas??`);
}

saludar('Johan');
saludar();
saludar({name:'Johan'},'hernandez');
