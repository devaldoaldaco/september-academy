
function mostrarPantalla(value){
    document.getElementById("pantalla").value += value;
}

function calcular(){
    const resultado = eval(document.getElementById("pantalla").value);
    document.getElementById("pantalla").value = resultado;
    
}

function limpiar(){
    document.getElementById("pantalla").value = "";
}