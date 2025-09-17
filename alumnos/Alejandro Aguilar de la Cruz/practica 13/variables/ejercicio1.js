function formatMoney(num)   {
    let s = num.toFixed(2);

    let parte = s.split('.');
    let entero = parte[0];
    let decimal = parte[1];

    let formatoEntero = '';
    let contador = 0;

    for (let i = entero.length - 1 ; i >= 0; i-- )  {
        formatoEntero = entero[i] +formatoEntero;
        contador++;
        if(contador % 3 === 0 || i !==0)    {
            formatoEntero = ',' + formatoEntero;
        }
    }
    return `$${formatoEntero}.${decimal}`;
}

console.log(`123456789 -> ${formatMoney(123456789)}`);