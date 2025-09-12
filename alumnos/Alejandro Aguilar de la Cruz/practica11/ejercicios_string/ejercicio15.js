let palabra = "escombros";
let cont = 0;
for (let i = 0; i < palabra.length; i++)
{
    if (palabra.charAt(i) == 'o')
    {
        cont++;
    }
}
console.log("la letra 'o' aparece" + cont + "veces");