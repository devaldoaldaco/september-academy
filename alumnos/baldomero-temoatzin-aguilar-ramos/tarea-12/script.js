const pantalla = document.getElementById("pantalla");
let operacion = "";

function insertar(valor) {
  if (pantalla.textContent === "0") {
    pantalla.textContent = "";
  }
  operacion += valor;
  pantalla.textContent = operacion;
}

function limpiar() {
  operacion = "";
  pantalla.textContent = "0";
}

function borrar() {
  operacion = operacion.slice(0, -1);
  pantalla.textContent = operacion || "0";
}

function calcular() {
  try {
    const resultado = eval(operacion);
    pantalla.textContent = resultado;
    operacion = resultado.toString();
  } catch (error) {
    pantalla.textContent = "Error";
    operacion = "";
  }
}
