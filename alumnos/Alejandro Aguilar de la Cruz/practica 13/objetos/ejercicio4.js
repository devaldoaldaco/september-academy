function sistemaBancario()  {
    this.cuentas = {};

    this.crearCuenta = function(numCuenta, depositoInicial = 0) {
        if(this.cuentas[numCuenta]) {
            console.log(`Error: La cuenta ${numCuenta} ya existe`);
            return false;
        }
        if(depositoInicial < 0) {
            console.log("Error: El deposito inii¡cial no puede ser negativo.");
            return false;
        }
        this.cuentas[numCuenta] = {balance: depositoInicial};
        console.log(`Cuenta ${numCuenta} creada con un saldo inicial de: $${depositoInicial.toFixed(2)}.`);
        return true;
    };
    this.deposito = function(numCuenta, cantidad)     {
        if(!this.cuentas[numCuenta])    {
            console.log(`Error: Cuenta ${numCuenta} no encontrada.`);
            return;
        }
        if(cantidad <= 0) {
            console.log("Error: El monto a depositar debe ser positivo");
            return;
        }
        this.cuentas[numCuenta].balance += cantidad;
        console.log(`$${cantidad.toFixed(2)} deposito en la cuenta ${numCuenta}. Nuevo saldo $${this.cuentas[numCuenta].balance.toFixed(2)}`);
    };
    this.retirar = function(numCuenta, cantidad)   {
      if(!this.cuentas[numCuenta])    {
            console.log(`Error: Cuenta ${numCuenta} no encontrada.`);
            return;
        }
        if(cantidad <= 0) {
            console.log("Error: El monto a depositar debe ser positivo");
            return;
        }
        if(this.cuentas[numCuenta].balance >= cantidad) {
            this.cuentas[numCuenta].balance -= cantidad;
            console.log(`$${cantidad.toFixed(2)} retirado de la cuenta ${numCuenta}. Nuevo saldo: $${this.cuentas[numCuenta].balance.toFixed(2)}`);
        }   else    {
            console.log(`Error: Fondos insuficientes en la cuenta ${numCuenta}. Saldo actual: $${this.cuentas[numCuenta].balance.toFixed(2)}`);
        }
    };
    this.transferencia = function(cuentaOrigen, cuentaDestino, cantidad)    {
        if(!this.cuentas[cuentaOrigen])    {
            console.log(`Error: Cuenta de origen ${cuentaOrigen} no encontrada.`);
            return;
        }
        if(!this.cuentas[cuentaDestino])    {
            console.log(`Error: Cuenta de destino ${cuentaDestino} no encontrada.`);
            return;
        }
        if(cantidad <= 0)   {
            console.log("Error: El monto a transferir debe ser positivo.");
            return;
        }
        if(this.cuentas[cuentaOrigen].balance >= cantidad)  {
            this.cuentas[cuentaOrigen].balance -= cantidad;
            this.cuentas[cuentaDestino].balance += cantidad;
            console.log(`$${cantidad.toFixed(2)} transferido de ${cuentaOrigen} a ${cuentaDestino}.`);
            console.log(`Saldo ${cuentaOrigen}: $${this.cuentas[cuentaOrigen].balance.toFixed(2)}`);
            console.log(`Saldo ${cuentaDestino}: $${this.cuentas[cuentaDestino].balance.toFixed(2)}`);
        }   else    {
            console.log(`Error: Fondos insuficientes en la cuenta ${cuentaDestino} para transferir $${cantidad.toFixed(2)}.`);
        }
    };
    this.mostrarSaldo = function()  {
        console.log("\n---  Saldos de Cuentas. ---");
        for(const numCuenta in this.cuentas)    {
            console.log(`Cuenta ${numCuenta}: $${this.cuentas[numCuenta].balance.toFixed(2)}`);
        }
    };
}
const banco = new sistemaBancario();
banco.crearCuenta(100, 500);
banco.crearCuenta(101, 800);
banco.crearCuenta(100, 500);

banco.mostrarSaldo();

banco.deposito(100, 300);
banco.retirar(102, 700 );
banco.retirar(102, 200);

banco.mostrarSaldo();

banco.transferencia(101, 102, 100);
banco.transferencia(102, 666, 300);

banco.mostrarSaldo();
