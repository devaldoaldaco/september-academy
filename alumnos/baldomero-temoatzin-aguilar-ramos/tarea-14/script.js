const entradaTarea = document.getElementById("entradaTarea");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");
const contadorTareas = document.getElementById("contadorTareas");

const GUARDAR_LS = "mis_tareas_guardadas";
let tareas = JSON.parse(localStorage.getItem(GUARDAR_LS)) || [];

function guardarTareas() {
  localStorage.setItem(GUARDAR_LS, JSON.stringify(tareas));
}

function mostrarTareas() {
  listaTareas.innerHTML = "";
  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    if (tarea.completada) li.classList.add("completada");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarea.completada;
    checkbox.addEventListener("change", () => marcarCompletada(index));

    const texto = document.createElement("span");
    texto.textContent = tarea.texto;

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "🗑️";
    btnBorrar.classList.add("borrar");
    btnBorrar.title = "Eliminar";
    btnBorrar.addEventListener("click", () => eliminarTarea(index));

    li.appendChild(checkbox);
    li.appendChild(texto);
    li.appendChild(btnBorrar);

    listaTareas.appendChild(li);
  });
  actualizarContador();
  guardarTareas();
}

function agregarTarea() {
  const texto = entradaTarea.value.trim();
  if (texto === "") return;
  tareas.push({ texto, completada: false });
  entradaTarea.value = "";
  mostrarTareas();
}

function marcarCompletada(index) {
  tareas[index].completada = !tareas[index].completada;
  mostrarTareas();
}

function eliminarTarea(index) {
  tareas.splice(index, 1);
  mostrarTareas();
}

function actualizarContador() {
  const pendientes = tareas.filter((tarea) => !tarea.completada).length;
  contadorTareas.textContent =
    pendientes + (pendientes === 1 ? " tarea pendiente" : " tareas pendientes");
}

btnAgregar.addEventListener("click", agregarTarea);
entradaTarea.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") agregarTarea();
});

mostrarTareas();
