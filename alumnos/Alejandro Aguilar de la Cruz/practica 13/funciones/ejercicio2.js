function validarPolindromo(texto)   {
    let limpiar = texto.toLowerCase();
    limpiar = limpiar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    limpiar = limpiar.replace(/[^a-z0-9]/g, '');
    let textoInvertido = '';
    for(let i = limpiar.length - 1; i >= 0; i--)    {
        textoInvertido += limpiar[i];
    }
    return limpiar === textoInvertido;
}
console.log(`"Anita lava la tina" es palindromo? ${validarPolindromo("Anita lava la tina")}`);
console.log(`"Hola mundo" es palindromo? ${validarPolindromo("Hola mundo")}`);