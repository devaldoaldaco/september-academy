const contenedor = document.querySelector('.contenedor-pokedex');
const inputBusqueda = document.querySelector('input');
const pokemonsId = [10, 4, 6, 25, 133, 150, 143, 149, 94 ];

let pokemonData = [];

function pokemonsApi() {
    pokemonsId.forEach(function(id) {
        fetch('https://pokeapi.co/api/v2/pokemon/' + id)
            .then(response => response.json())
            .then(function(pokemon) {
                pokemonData.push(pokemon);
                crearTarjeta(pokemon);
            })
            .catch(error =>{
                console.log("Error al obtener los datos")
                console.log(error);
            });
    });
}

function crearTarjeta(pokemon) {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'pokemon-card';
    tarjeta.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>${pokemon.name}</p>
    `;
    contenedor.appendChild(tarjeta);
}

function filtrarPokemon() {
    const texto = inputBusqueda.value.toLowerCase();
    
    contenedor.innerHTML = '';
    
    pokemonData.forEach(function(pokemon) {
        if (pokemon.name.toLowerCase().includes(texto)) {
            crearTarjeta(pokemon);
        }
    });
    
    if (contenedor.children.length === 0) {
        contenedor.innerHTML = '<p>No se encontraron Pokémon</p>';
    }
}

inputBusqueda.addEventListener('input', filtrarPokemon);

pokemonsApi();