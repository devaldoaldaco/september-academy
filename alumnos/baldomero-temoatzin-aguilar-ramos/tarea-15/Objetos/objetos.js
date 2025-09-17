// 5.	Modela un objeto que represente una playlist de música. Debe tener canciones (título, artista, duración) y métodos para:
	//•	Agregar canciones
	//•	Eliminar canciones
	//•	Calcular la duración total de la playlist
let miPlaylist = {
  canciones: [],
  agregarCancion(titulo, artista, duracion) {
    this.canciones.push({ titulo, artista, duracion });
  },
  eliminarCancion(titulo) {
    this.canciones = this.canciones.filter((c) => c.titulo !== titulo);
  },
  duracionTotal() {
    return this.canciones.reduce((total, c) => total + c.duracion, 0);
  },
};

miPlaylist.agregarCancion("Song 1", "Artist A", 200);
miPlaylist.agregarCancion("Song 2", "Artist B", 180);
console.log("Duración total playlist:", miPlaylist.duracionTotal(), "segundos");

// 6.	Crea un objeto que represente una biblioteca con libros. Cada libro debe tener un estado (disponible o prestado). Agrega métodos para:
	//•	Prestar un libro
	//•	Devolverlo
	//•	Mostrar la lista de libros disponibles
let miBiblioteca = {
  libros: [
    { titulo: "Libro A", disponible: true },
    { titulo: "Libro B", disponible: true },
    { titulo: "Libro C", disponible: false },
  ],
  prestarLibro(titulo) {
    let libro = this.libros.find((l) => l.titulo === titulo);
    if (libro && libro.disponible) libro.disponible = false;
  },
  devolverLibro(titulo) {
    let libro = this.libros.find((l) => l.titulo === titulo);
    if (libro && !libro.disponible) libro.disponible = true;
  },
  listarDisponibles() {
    return this.libros.filter((l) => l.disponible);
  },
};

miBiblioteca.prestarLibro("Libro A");
console.log("Libros disponibles:", miBiblioteca.listarDisponibles());

// 7.	Genera un objeto que represente un carrito de compras. Además de calcular el total, debe aplicar descuentos si el total supera cierto monto.
let miCarrito = {
  productos: [],
  agregarProducto(nombre, precio) {
    this.productos.push({ nombre, precio });
  },
  calcularTotal() {
    let suma = this.productos.reduce((total, p) => total + p.precio, 0);
    return suma > 1000 ? suma * 0.9 : suma; // 10% de descuento si supera 1000
  },
};

miCarrito.agregarProducto("Laptop", 1200);
miCarrito.agregarProducto("Mouse", 200);
console.log("Total del carrito:", miCarrito.calcularTotal());

// 8.	Crea un objeto que represente un sistema bancario simple con usuarios y cuentas. Debe tener métodos para:
	//•	Depositar
	//•	Retirar
	//•	Transferir dinero entre cuentas
let bancoSimple = {
  usuarios: {
    Juan: { saldo: 1000 },
    Ana: { saldo: 500 },
  },
  depositar(usuario, monto) {
    this.usuarios[usuario].saldo += monto;
  },
  retirar(usuario, monto) {
    if (this.usuarios[usuario].saldo >= monto)
      this.usuarios[usuario].saldo -= monto;
  },
  transferir(origen, destino, monto) {
    if (this.usuarios[origen].saldo >= monto) {
      this.usuarios[origen].saldo -= monto;
      this.usuarios[destino].saldo += monto;
    }
  },
};

bancoSimple.transferir("Juan", "Ana", 300);
console.log("Saldos del banco:", bancoSimple.usuarios);
