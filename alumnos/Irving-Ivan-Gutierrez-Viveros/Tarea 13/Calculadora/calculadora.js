function sumar(){
    const forma= document.getElementById('forma');
    let operandoA= forma['dato1'];
    let operandoB= forma['dato2'];
    let resultado = Number(dato1.value) + Number(dato2.value);
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

function restar(){
    const forma= document.getElementById('forma');
    let operandoA= forma['dato1'];
    let operandoB= forma['dato2'];
    let resultado = Number(dato1.value) - Number(dato2.value);
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

function multiplicar(){
    const forma= document.getElementById('forma');
    let operandoA= forma['dato1'];
    let operandoB= forma['dato2'];
    let resultado = Number(dato1.value) * Number(dato2.value);
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

function dividir(){
    const forma= document.getElementById('forma');
    let operandoA= forma['dato1'];
    let operandoB= forma['dato2'];
    let resultado = Number(dato1.value) / Number(dato2.value);
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}