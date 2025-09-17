function carritoCompras()   {
    this.productos = [];
    this.descuentoProducto = 100;
    this.tasaDescuento = 10;

    this.agregarProducto = function(nombre, precio, qty =1) {
        const productoExistente = this.productos.find(producto => producto.nombre === nombre);
        if (productoExistente)  {
            productoExistente.qty += qty;
        }   else    {
            this.productos.push({nombre, precio, qty});
        }
        console.log(`${qty} x "${nombre}"(Precio: $${precio})Agregado al Carrito.`);
    };
    this.calcularSubTotal = function()  {
        let subtotal = 0;
        for(let i = 0; i < this.productos.length; i++)  {
            subtotal += this.productos[i].precio * this.productos[i].qty;
        }
        return subtotal;
    };
    this.calcularTotal = function()     {
        let subtotal = this.calcularSubTotal();
        let total = subtotal;
        if(subtotal >= this.descuentoProducto)  {
            const importeDescuento = subtotal * this.tasaDescuento;
            total = subtotal - importeDescuento;
            console.log(`\n¡Descuento Aplicado! (-$${this.tasaDescuento.toFixed(2)}) por superar $${this.descuentoProducto}.`);
        }
        return total.toFixed(2);
    };
    this.MostrarCarrito = function()    {
        console.log(`\n---  Tu Carrito de Compras. ---`);
        if(this.productos.length === 0) {
            console.log("Tu carrito esta vacio.");
        }   else    {
            this.productos.forEach(producto => {
                console.log(`- ${producto.nombre} x ${producto.qty} ($${producto.precio.toFixed(2)} c/u) = $${(producto.precio * producto.qty.toFixed(2))}`);
            });
            console.log(`Subtotal: $${this.calcularSubTotal().toFixed(2)}`);
            console.log(`Total a Pagar: $${this.calcularTotal()}`);
        }
    };
}
const miCarrito = new carritoCompras();
miCarrito.agregarProducto("Xbox", 7500, 1);
miCarrito.agregarProducto("Control Xbox", 1000, 1);
miCarrito.agregarProducto("Audifonos", 1500, 1);
miCarrito.MostrarCarrito();
const nuevoCarrito = new carritoCompras();
nuevoCarrito.agregarProducto("leche", 24, 6);
nuevoCarrito.agregarProducto("paquetaxo", 55, 2);
nuevoCarrito.agregarProducto("pan", 10, 3);
nuevoCarrito.MostrarCarrito();