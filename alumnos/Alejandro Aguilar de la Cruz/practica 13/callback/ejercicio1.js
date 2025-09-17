function SimularOperacionAsincrona(callback, tenerExito, demora = 1000)     {
    console.log(`Iniciando operacion asincrona(simulando ${demora}ms)...`);
    setTimeout(() => {
        if(tenerExito) {
            const resultado = {datos: "Datos obtenidos de la BD"};
            console.log("Operacion asincrona completada con exito.");
            callback(null, resultado);
        }   else    {
            const error = new Error("Error: Fallo al conectar con la BD.");
            console.error("Operacion asincrona fallida.");
            callback(error, null);
        }
    },demora);
}
SimularOperacionAsincrona((error, datos) => {
    if(error) {
        console.error("Manejo del error", error.message);
    } else  {
        console.log("Manejo del exito", datos.datos);
    }   
}, true, 1500); 
SimularOperacionAsincrona((error, datos) => {
    if(error) {
        console.error("Manejo del error", error.message);
    } else  {
        console.log("Manejo del exito", datos.datos);
    }   
}, false, 2000); 