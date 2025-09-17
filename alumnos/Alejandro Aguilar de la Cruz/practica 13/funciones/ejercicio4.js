function numeroRomano (romano) {
    const valores = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    };
    let total = 0;
    for(let i = 0; i < romano.length; i++)  {
        let actual = valores[romano[i]];
        let siguiente = valores[romano[i + 1]];
        if(siguiente && actual < siguiente)  {
            total -= actual;
        }  else     {
            total += actual;
        } 
    }
    return total;
}
console.log(`"III" -> ${numeroRomano("III")}`);