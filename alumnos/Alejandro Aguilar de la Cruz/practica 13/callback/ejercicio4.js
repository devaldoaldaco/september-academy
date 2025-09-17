function correrTareasSecuencial(tareas, incompleta, tareaAtrasada = 500)  {
let tareaActual = 0;

function ejecutarSiguienteTarea() {
    if (tareaActual < tareas.length)    {
        const tarea = tareas[tareaActual];
        console.log(`Ejecutando tarea ${tareaActual + 1}: "${tarea}"`);
        tareaActual++;
        setTimeout(ejecutarSiguienteTarea, tareaAtrasada);
    } else  {
        console.log("Todas las tareas han sido ejecutadas.");
        incompleta();
    }
}
if (tareas.length === 0)    {
    console.log("No hay tareas para ejecutar");
    incompleta();
    return;
}
console.log("Iniciando ejecucion de tareas...");
ejecutarSiguienteTarea();
}
const miTarea = [
    "Cargar Datos de Usuario",
    "Procesar Imagen de Perfil",
    "Enviar Notificacion",
    "Actualizar interfaz"
];
correrTareasSecuencial(miTarea, () => {
    console.log("\n¡Proceso de Actualizacion de Perfil Completado!");
}, 800);
correrTareasSecuencial([], () => {
    console.log("\n¡Callback para tareas vacias ejecutando!");
},500);