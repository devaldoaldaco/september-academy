function playList(nombre)   {
    this.nombre = nombre;
    this.canciones = [];

    this.agregarCancion = function(titulo, artista, duracion)   {
        this.canciones.push({titulo, artista, duracion});
        console.log(`"${titulo}" agregada a la playList "${this.nombre}".`);
    };
    this.eliminarCancion = function(titulo) {
        const iniciarRecorrido = this.canciones.length;
        this.canciones = this.canciones.filter(cancion => cancion.titulo !== titulo);

        if(this.canciones.length < iniciarRecorrido)    {
            console.log(`"${titulo}" Eliminado de la playList "${this.nombre}".`);
        }   else    {
            console.log(`"${titulo}" No se encontro en la playList "${this.nombre}".`);
        }
    };

    this.duracionTotal = function()     {
        let totalSegundos = 0;
        for (let i = 0; i < this.canciones.length; i++) {
            totalSegundos += this.canciones[i].duracion;
        }
        const h = Math.floor(totalSegundos / 3600);
        const m = Math.floor((totalSegundos % 3600) / 60);
        const s = totalSegundos % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}: ${s.toString().padStart(2, '0')}`;
    };
    this.mostrarCancion = function()    {
        console.log(`\n---  PlayList: ${this.nombre}  ---`);
        if (this.canciones.length === 0)    {
            console.log("No hay canciones en esta PlayList");
        }   else    {
            this.canciones.forEach(cancion =>   {
                console.log(`- ${cancion.titulo} por ${cancion.artista} (${cancion.duracion})`);
            });
        }
        console.log(`Duracion Total: ${this.duracionTotal()}`);
    };
}
const miLista = new playList("Rock");
    miLista.agregarCancion("Sueños de verano, Division Minuscula, 600");
    miLista.agregarCancion("Sognare, Division Minuscula, 900");
    miLista.agregarCancion("Bomba atomica, Javier Blake, 600");

    miLista.mostrarCancion();

    miLista.eliminarCancion("Sognare");
    miLista.eliminarCancion("Señales");

    miLista.agregarCancion("Luna, ZOE, 400");

    miLista.mostrarCancion();
    console.log(`Duracion total de "${miLista.nombre}": ${miLista.duracionTotal()}`);