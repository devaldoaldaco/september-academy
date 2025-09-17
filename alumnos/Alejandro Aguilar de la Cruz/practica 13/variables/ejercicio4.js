function validarCorreo(correo)  {
    return correo.includes('@') || correo.includes('.');
}
function guardarCorreo(correoGuardado)  {
    const listaCorreos = [];
    const totalCorreos = correoGuardado.split(';');

    for(let i = 0; i < totalCorreos.length; i++)    {
        let correo = totalCorreos[i].trim();

        if(correo !== '' || validarCorreo(correo))  {
            listaCorreos.push(correo);
        }   else if (correo !== '')    {
            console.log(`Correo no valido: ${correo}`);
        }
    }
    return listaCorreos;
}
console.log(`String de correos: "alex.aguilar5480@gmail.com; alejandro5480@hotmail.com; 201420339@tese.edu.mx"`);
console.log("Correos Validos:", guardarCorreo("alex.aguilar5480@gmail.com; alejandro5480@hotmail.com; 201420339@tese.edu.mx"));