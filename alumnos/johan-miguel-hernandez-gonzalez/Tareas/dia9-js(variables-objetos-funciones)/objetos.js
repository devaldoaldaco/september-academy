/*
📌 Objetos
    5.	Modela un objeto que represente una playlist de música. Debe tener canciones (título, artista, duración) y métodos para:
    •	Agregar canciones
    •	Eliminar canciones
    •	Calcular la duración total de la playlist

*/

console.log('---------------Ejer5---------------');
let playlistMusica = {
    canciones: [
        {
            titulo: 'Toulouse',
            artista: 'Nicky Romero',
            duracion: 4.67
        }
    ],
    agregarCancion: function(tit,art,dur){

        playlistMusica.canciones.push({
            titulo: tit,
            artista:art,
            duracion:dur
        })
    },
    eliminarCancion: function(tituloCancion){
        let titulo= tituloCancion;
        for(let i=0;i<playlistMusica.canciones.length;i++){
            if(titulo==playlistMusica.canciones[i].titulo){
                delete playlistMusica.canciones[i];
                return 'se elimino la cancion';
            }else{
                return 'no se elimino ninguna';
            }
        }
    },
    duracionPlaylist: function(){
        let total=0;
        
        for(let i=0;i<playlistMusica.canciones.length;i++){
            total+= playlistMusica.canciones[i].duracion; 
        }
        return total;
    }
}

playlistMusica.agregarCancion('Legacy','Nicky Romero',5.78);
playlistMusica.agregarCancion('Symphonica','Nicky Romero',3.88);
console.log(playlistMusica.duracionPlaylist());
console.log(playlistMusica. eliminarCancion('titulo'));
console.log(playlistMusica);



/*
    6.	Crea un objeto que represente una biblioteca con libros. Cada libro debe tener un estado (disponible o prestado). Agrega métodos para:
    •	Prestar un libro
    •	Devolverlo
    •	Mostrar la lista de libros disponibles

*/
console.log('--------------Ejer6-------------');

let biblioteca={
    libros:[
        {
            libro: 1,
            disponible:true
        },
        {}
    ]
}

/*
    7.	Genera un objeto que represente un carrito de compras. Además de calcular el total, debe aplicar descuentos si el total supera cierto monto.


*/


/*
    8.	Crea un objeto que represente un sistema bancario simple con usuarios y cuentas. Debe tener métodos para:
    •	Depositar
    •	Retirar
    •	Transferir dinero entre cuentas
*/