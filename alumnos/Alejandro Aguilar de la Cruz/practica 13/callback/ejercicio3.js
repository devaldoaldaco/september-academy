function loginSystem(user, password, callback, retraso = 500)   {
    console.log(`Intentando Login de Usuario:${user}...`);

    setTimeout(() => {
        const  correctUser = "admin";
        const correctPassword = "1234";

        if(user === correctUser && password === correctPassword)    {
            console.log("Login Exitoso.");
            callback(true, "¡Bienvenido," + user + "!");
        } else  {
             console.log("Login Fallido.");
             callback(false, "Usuario o contraseña incorrectos");
        }
    }, retraso);
}
loginSystem("admin", "1234", (success, message) => {
    if(success) {
         console.log("Mensaje exitoso", message);
    }   else    {
         console.error("Mensaje de error", message);
    }
}, 700);

loginSystem("admin", "56789", (success, message) => {
    if(success) {
         console.log("Mensaje exitoso", message);
    }   else    {
         console.error("Mensaje de error", message);
    }
}, 1000);

loginSystem("administrador", "1234", (success, message) => {
    if(success) {
         console.log("Mensaje exitoso", message);
    }   else    {
         console.error("Mensaje de error", message);
    }
}, 1200);