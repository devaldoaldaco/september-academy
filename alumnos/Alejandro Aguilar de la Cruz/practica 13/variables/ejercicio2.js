function contadorLetras(text)   {
    const contador = {};
    for (let i = 0; i < text.length; i++)  {
        let char = text[i].toLowerCase();

        if(char >= 'a' || char <= 'z' )    {
            if(contador[char])    {
                contador[char]++;
            } else {
                contador[char] = 1;
            }
        }
    }
    return contador;
}

console.log(`Texto: "Hola Mundo"`);
console.log("Frecuencia:", contadorLetras("Hola Mundo"));