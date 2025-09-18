const divCard = document.getElementById('card')
const modal = document.querySelector('dialog')
fetch('https://pokeapi.co/api/v2/pokemon?limit=15&offset=0')
    .then(response => response.json())
    .then(data => {
        const pokemonData = data.results
        for (let i = 0; i < pokemonData.length; i++) {
            createPokemon(pokemonData[i].name, pokemonData[i].url, i)
        }
    })
    .catch(error => console.log(error));


    
    async function createPokemon(name, url, length) {
        const pokemon = document.createElement('div')
        pokemon.className = 'pokemon'
        const span = document.createElement('span')
        span.textContent = name;
        const img = document.createElement('img')
        img.id = length + 1
        const pokemonImg = await getImg(url)
        
        img.src = pokemonImg
        divCard.appendChild(pokemon)
        pokemon.appendChild(img)
        pokemon.appendChild(span)
        createEventListener(pokemon, url)
    }
    
    async function getImg(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data.sprites.front_default;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    
    
    const h2 = document.getElementById('pokemon-name')
    const pType = document.getElementById('pokemon-type')
    const pWeight = document.getElementById('pokemon-weight')
    
    async function createEventListener(pokemon, url) {
        const pokemonData =  await getPokemonData(url)
        pokemon.addEventListener('click', () => {
            h2.textContent = pokemonData[0]
            pType.textContent = `Tipo: ${pokemonData[1]}`
            pWeight.textContent = `Peso ${pokemonData[2]/10} Kg`
            modal.showModal()
        })
    }
    
    const closeBtn = document.getElementById('closeModal');
    closeBtn.addEventListener('click', () => {
        modal.close();
    });
    
    async function getPokemonData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            const type = data.types[0].type.name
            const name = data.name
            const weight = data.weight
            return [name, type, weight]
        } catch (error) {
            console.log(error);
            return null;
        }
    }