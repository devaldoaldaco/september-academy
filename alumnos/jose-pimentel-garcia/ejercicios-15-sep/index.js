const input = document.getElementById("numero");
const salida = document.getElementById("resultado");
const boton = document.getElementById("Convertir");

boton.addEventListener("click", () => {
    let valor = parseFloat(input.value);

    if(!isNaN(valor)){
        let moneda = valor.toLocaleString("es-Mx", {
          style: "currency",
          currency: "MXN"
        });
        salida.textContent = moneda;
    } 
    else
    {
      salida.textContent = "escribe un numero valido"
    }
});
