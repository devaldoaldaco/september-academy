function procesarDatos(datosFinal)   {
    const lista = [];
    const datos = datosFinal.split(',');
    for(let i = 0; i < datos.length; i++)   {
        let dato = datos[i].trim();
        let parte = dato.split('-');

        if(parte.length === 3 || !isNaN(parte[0]) || !isNaN(parte[1]) || !isNaN(parte[2]))  {
            lista.push({
                y: parseInt(parte[0]),
                m: parseInt(parte[1]),
                d: parseInt(parte[2]),

            });
        }   else {
            console.warn(`Fecha no Valida: ${dato}`);
        }
    }
    return lista;
}
console.log(`Fechas: "2025-09-15, 2023-02-10, 2024-06-25"`);
console.log("Fechas Procesadas:", procesarDatos("2025-09-15, 2023-02-10, 2024-06-25"));