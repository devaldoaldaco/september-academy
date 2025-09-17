function Biblioteca(nombre)     {
    this.nombre = nombre;
    this.libros = [];

    this.agregarLibro = function(titulo, autor)     {
        this.libros.push({titulo, autor, status: 'disponible'});
        console.log(`"${titulo}" ha sido añadido a la Biblioteca "${this.nombre}".`);
    };
    this.prestamoLibro = function(titulo)   {
        const libro = this.libros.find(b => b.titulo === titulo);
        if (libro)  {
            if(libro.status === 'disponible')   {
                libro.status = 'prestar';
                console.log(`"${titulo}" ha sido prestado.`);
            }   else    {
                console.log(`"${titulo}" ya esta prestado.`);
            }
        }   else    {
            console.log(`"${titulo}" no se ha encontrado en la Biblioteca.`);
        }
    };
    this.devolverLibro = function(titulo)   {
        const libro = this.libros.find(b => b.titulo === titulo);
        if (libro)  {
            if(libro.status === 'prestar')   {
                libro.status = 'disponible';
                console.log(`"${titulo}" ha sido devuelto.`);
            }   else    {
                console.log(`"${titulo}" ya esta disponible.`);
            }
        }   else    {
            console.log(`"${titulo}" no se ha encontrado en la Biblioteca.`);
        }
    };
    this.mostrarLibrosDisponibles = function()    {
        console.log(`\n---  Libros Disponibles en "${this.nombre}" ---`);
        const disponible = this.libros.filter(b => b.status === 'disponible');
        if(disponible.length === 0) {
            console.log("No hay libros disponibles");
        }   else {
            disponible.forEach(libro => {
                console.log(`- ${libro.titulo} por ${libro.autor}`);
            });
        }
    };
}
const miBliblioteca = new Biblioteca("Mi Biblioteca Personal");
miBliblioteca.agregarLibro("Ready Player One", "Ernest Cline");
miBliblioteca.agregarLibro("Sword Art Online", "Reiki Kawahara");
miBliblioteca.agregarLibro("Los Juegos del Hambre", "Suzanne Collins");
miBliblioteca.mostrarLibrosDisponibles();
miBliblioteca.prestamoLibro("Ready Player One");
miBliblioteca.prestamoLibro("Ready Player One");
miBliblioteca.prestamoLibro("Libro Inexistente");
miBliblioteca.mostrarLibrosDisponibles();
miBliblioteca.devolverLibro("Ready Player One");
miBliblioteca.mostrarLibrosDisponibles();