fetch('https://pokeapi.co/api/v2/pokemon/charmander')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById("pokemon-container");
    contenedor.innerHTML = `
<div class="container-fetch">
<h2>${data.name}</h2>
<img src="${data.sprites.front_default}">
<img src="${data.sprites.back_default}">
<p>Tipo: ${data.types.map(t => t.type.name).join(', ')}</p>
<p>Altura: ${data.height}</p>
<p>Peso: ${data.weight}</p>
</div>
</div>
`
  })
  .catch(error => {
    console.error('error en la solicitud', error);
  });

  fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById("pokemon-container");
    contenedor.innerHTML += `
<div class="container-fetch">
<h2>${data.name}</h2>
<img src="${data.sprites.front_default}">
<img src="${data.sprites.back_default}">
<p>Tipo: ${data.types.map(t => t.type.name).join(', ')}</p>
<p>Altura: ${data.height}</p>
<p>Peso: ${data.weight}</p>
</div>
</div>
`
  })
  .catch(error => {
    console.error('error en la solicitud', error);
  });

    fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById("pokemon-container");
    contenedor.innerHTML += `
<div class="container-fetch">
<h2>${data.name}</h2>
<img src="${data.sprites.front_default}">
<img src="${data.sprites.back_default}">
<p>Tipo: ${data.types.map(t => t.type.name).join(', ')}</p>
<p>Altura: ${data.height}</p>
<p>Peso: ${data.weight}</p>
</div>
</div>
`
  })
  .catch(error => {
    console.error('error en la solicitud', error);
  });

      fetch('https://pokeapi.co/api/v2/pokemon/moltres')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById("pokemon-container");
    contenedor.innerHTML += `
<div class="container-fetch">
<h2>${data.name}</h2>
<img src="${data.sprites.front_default}">
<img src="${data.sprites.back_default}">
<p>Tipo: ${data.types.map(t => t.type.name).join(', ')}</p>
<p>Altura: ${data.height}</p>
<p>Peso: ${data.weight}</p>
</div>
</div>
`
  })
  .catch(error => {
    console.error('error en la solicitud', error);
  });

        fetch('https://pokeapi.co/api/v2/pokemon/zapdos')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById("pokemon-container");
    contenedor.innerHTML += `
<div class="container-fetch">
<h2>${data.name}</h2>
<img src="${data.sprites.front_default}">
<img src="${data.sprites.back_default}">
<p>Tipo: ${data.types.map(t => t.type.name).join(', ')}</p>
<p>Altura: ${data.height}</p>
<p>Peso: ${data.weight}</p>
</div>
</div>
`
  })
  .catch(error => {
    console.error('error en la solicitud', error);
  });

          fetch('https://pokeapi.co/api/v2/pokemon/articuno')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById("pokemon-container");
    contenedor.innerHTML += `
<div class="container-fetch">
<h2>${data.name}</h2>
<img src="${data.sprites.front_default}">
<img src="${data.sprites.back_default}">
<p>Tipo: ${data.types.map(t => t.type.name).join(', ')}</p>
<p>Altura: ${data.height}</p>
<p>Peso: ${data.weight}</p>
</div>
</div>
`
  })
  .catch(error => {
    console.error('error en la solicitud', error);
  });