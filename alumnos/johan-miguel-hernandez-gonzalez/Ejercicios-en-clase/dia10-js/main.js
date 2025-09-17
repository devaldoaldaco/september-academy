console.log(document);

//selecciona por id solo un elemento
//get, obtener elementos del dom
const obj= document.getElementById('genderMale');
const button= document.getElementsByTagName('button');


//seleccion por la clase, solo un etiqy
//getElementByClassName('bg-blue');

//seleccion por la clase, todas las etiquetas
//querySelectorAll('#bg-blue')
 

//console.log(obj.id);


//modificar elemntos el dom
button[0].innerHTML =`<span>Hola</span>`;
button[0].innerText =`<span>Hola</span>`;
//editar atributos
button[0].setAttribute('class','bg-green');
button[0].setAttribute('style','background: blue;');

//agregar
const p= document.createElement('p');
p.innerText='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis aut, quaerat nisi illum molestias libe';
const form= document.querySelector('form');
const label= document.querySelector('label');
//form.appendChild(p);
form.insertBefore(p,label)