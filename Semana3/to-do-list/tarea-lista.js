// basicos/tarea-lista.js
let lista = [];
// Esta funcion (function render) se encarga de "pintar" o actualizar la lista de tareas
function render() { 
  //Selecciona el elemento <ul id="lista"> donde se mostraran las tareas
  const ul = document.getElementById("lista");
  //Limpia su contenido para volver a dibujar desde cero
  ul.innerHTML = "";
  //Variables para contar tareas completadas e incompletas
  let comp = 0, incomp = 0;
  lista.forEach((t, i) => {
    //Recorremos el arreglo lista con forEach()
    //Crear un <li> para representar la tarea
    const li = document.createElement("li");
    li.textContent = t.texto;
    //Mostrar el texto de la tarea
    if (t.completa) {
      //Si la tarea está completada Agrega una clase CSS para marcarla visualmente
      li.classList.add("completada");
      comp++; // Incrementa el contador de completadas
    } else {
      incomp++; // Incrementa el contador de incompletas
    }
    li.onclick = () => toggle(i); //al hacer clic en la tarea, se alterna su estado (completa - incompleta)
    ul.appendChild(li); //Finalmente, agregamos el <li> dentro del <ul>
  });
  document.getElementById("comp").textContent = comp; //Actualizamos en pantalla los contadores
  document.getElementById("incomp").textContent = incomp;
}
// Esta funcion se ejecuta cuando el usuario agrega una nueva tarea
function agregarTarea() {
  //Captura el texto escrito en el input con id="nuevaTarea"
  const texto = document.getElementById("nuevaTarea").value;
  //Validación: si no hay texto, no hace nada
  if (!texto) return;
  //Agrega un objeto tarea al arreglo lista
  lista.push({ texto, completa: false });
  //Limpia el campo input para escribir otra tarea
  document.getElementById("nuevaTarea").value = "";
  //Llama a render() para actualizar la lista en pantalla
  render();
}
// Alterna el estado de una tarea (de completa a incompleta y viceversa)
function toggle(i) {
  //Cambia el valor booleano de "completa"
  lista[i].completa = !lista[i].completa;
  //Vuelve a llamar a render() para reflejar el cambio en pantalla
  render();
}


