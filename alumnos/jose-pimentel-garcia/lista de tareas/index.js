
var tareas = []; // almacenará las tareas como objetos {id, texto, completada}

function agregarTarea() {
  let texto = document.getElementById("txtTarea").value.trim();
  if (texto === "") {
    alert("Escribe una tarea primero");
    return;
  }
  let tarea = {
    id: Date.now(),
    texto: texto,
    completada: false
  };
  tareas.push(tarea);
  document.getElementById("txtTarea").value = "";
  listaTareas();
}

function listaTareas() {
  let div = document.getElementById("divTareas");
  let contenido = "";

  if (tareas.length === 0) {
    contenido = "<p>No hay tareas registradas</p>";
  } else {
    tareas.forEach((t) => {
      contenido += `
        <div>
          <input type="checkbox" onclick="toggleCompletada(${t.id})" ${t.completada ? "checked" : ""}>
          <span style="text-decoration:${t.completada ? "line-through" : "none"}">${t.texto}</span>
          <button onclick="editarTarea(${t.id})">Editar</button>
          <button onclick="eliminarTarea(${t.id})">Eliminar</button>
        </div>
      `;
    });
  }

  div.innerHTML = contenido;
  actualizarResumen();
}

function tareaCompletada(id) {
  let tarea = tareas.find(t => t.id === id);
  if (tarea) {
    tarea.completada = !tarea.completada;
    listaTareas();
  }
}

function editarTarea(id) {
  let tarea = tareas.find(t => t.id === id);
  if (tarea) {
    let nuevoTexto = prompt("Editar tarea:", tarea.texto);
    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
      tarea.texto = nuevoTexto.trim();
      listaTareas();
    }
  }
}

function eliminarTarea(id) {
  tareas = tareas.filter(t => t.id !== id);
  listaTareas();
}

function actualizarResumen() {
  let total = tareas.length;
  let completas = tareas.filter(t => t.completada).length;
  let incompletas = total - completas;
  let porcentaje = total > 0 ? Math.round((completas / total) * 100) : 0;

  document.getElementById("divResumen").innerHTML =
    `Completadas: ${completas} | Incompletas: ${incompletas} | ${porcentaje}%`;
}

function mostrarTareasApp() {
  document.getElementById("divInicio").style.display = "none";
  document.getElementById("divTareasApp").style.display = "block";
  mostrarTareas(); 
}

function salirTareas() {
  document.getElementById("divTareasApp").style.display = "none";
  document.getElementById("divInicio").style.display = "block";
}

function agregarTarea() {
  let texto = document.getElementById("txtTarea").value.trim();
  if (texto === "") {
    alert("Escribe una tarea primero");
    return;
  }
  let tarea = {
    id: Date.now(),
    texto: texto,
    completada: false
  };
  tareas.push(tarea);
  document.getElementById("txtTarea").value = "";
  listaTareas();
}

function mostrarTareas() {
  let div = document.getElementById("divTareas");
  div.innerHTML = "";

  tareas.forEach((t) => {
    div.innerHTML+=`
      <div>
        <input type="checkbox" onclick="toggleCompletada(${t.id})" ${t.completada ? "checked" : ""}>
        <span style="text-decoration:${t.completada ? "line-through" : "none"}">${t.texto}</span>
        <button onclick="editarTarea(${t.id})">Editar</button>
        <button onclick="eliminarTarea(${t.id})">Eliminar</button>
      </div>
    `;
  });

  actualizarResumen();
}

function toggleCompletada(id) {
  let tarea = tareas.find(t => t.id === id);
  if (tarea) {
    tarea.completada = !tarea.completada;
    listaTareas();
  }
}

function editarTarea(id) {
  let tarea = tareas.find(t => t.id === id);
  if (tarea) {
    let nuevoTexto = prompt("Editar tarea:", tarea.texto);
    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
      tarea.texto = nuevoTexto.trim();
      listaTareas();
    }
  }
}

function eliminarTarea(id) {
  tareas = tareas.filter(t => t.id !== id);
  listaTareas();
}

function actualizarResumen() {
  let total = tareas.length;
  let completas = tareas.filter(t => t.completada).length;
  let incompletas = total - completas;
  let porcentaje = total > 0 ? Math.round((completas / total) * 100) : 0;

  document.getElementById("divResumen").innerHTML =
    `Completadas: ${completas} | Incompletas: ${incompletas} | ${porcentaje}%`;
}