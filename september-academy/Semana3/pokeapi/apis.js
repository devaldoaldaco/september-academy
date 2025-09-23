// ===================================
// Lógica para un buscador de Pokémon
// ===================================

// Referencias al DOM (Conectar el código con los elementos HTML)
const pokemonInput = document.getElementById("pokemonInput"); // Input de búsqueda: Obtiene la caja de texto donde el usuario escribe.
const searchBtn = document.getElementById("searchBtn"); // Botón de búsqueda: Obtiene el botón para iniciar la búsqueda.
const resultContainer = document.getElementById("resultContainer"); // Contenedor de resultados: Obtiene el área donde se mostrará la información del Pokémon.
const errorMessage = document.getElementById("errorMessage"); // Mensajes de error: Obtiene el área para mostrar errores (ej. Pokémon no encontrado).
const loading = document.querySelector(".loading"); // Indicador de carga: Obtiene el elemento que muestra un spinner o mensaje de "cargando".

// ===================== MAPA DE COLORES POR TIPO =====================
const typeColors = { //typeColors: Un objeto que asocia cada tipo de Pokémon con un color hexadecimal para el estilo.
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};

// ===================== FUNCIÓN PRINCIPAL =====================
// Esta función principal se encarga de la lógica de la búsqueda y el manejo de errores.
async function buscarPokemon() {
  // Ocultar resultados previos y errores para empezar de cero
  resultContainer.style.display = "none";
  errorMessage.style.display = "none";

  // Mostrar el indicador de carga mientras se hace la petición a la API
  loading.style.display = "block";

  try {
    // Tomar el valor del input, eliminar espacios y convertir a minúsculas
    const pokemonId = pokemonInput.value.trim().toLowerCase();

    // Validar si el campo de búsqueda está vacío. Si lo está, lanza un error.
    if (!pokemonId) throw new Error("Por favor, ingresa un nombre o ID de Pokémon");

    // Hacer la petición asíncrona a la PokeAPI. El 'await' pausa la ejecución hasta que la respuesta llegue.
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

    // Si la respuesta no es exitosa (ej. 404 Not Found), lanza un error.
    if (!response.ok) throw new Error("Pokémon no encontrado");

    // Convertir la respuesta de la API a un objeto JSON de JavaScript.
    const pokemon = await response.json();

    // Una vez que se tienen los datos, llama a la función para mostrarlos en pantalla.
    mostrarPokemon(pokemon);
  } catch (err) { // Si ocurre algún error en el bloque 'try', el control pasa aquí.
    errorMessage.textContent = err.message; // El mensaje de error del 'throw' se muestra en pantalla.
    errorMessage.style.display = "block"; // Hace visible el contenedor del mensaje de error.
  } finally { // Este bloque se ejecuta siempre, haya o no un error.
    // Ocultar el indicador de carga una vez que la búsqueda finaliza.
    loading.style.display = "none";
  }
}

// ===================== FUNCIÓN DE RENDER =====================
// Esta función se encarga de construir y mostrar el HTML con los datos del Pokémon.
function mostrarPokemon(pokemon) {
  // Construir las etiquetas de tipos (badges) con colores dinámicos
  const tiposHTML = pokemon.types
    .map((t) => { // .map() crea un nuevo arreglo con el resultado de la función.
      const color = typeColors[t.type.name] || "#777"; // Asigna el color según el tipo, o un gris si no se encuentra.
      return `<span class="type-badge" style="background-color: ${color}">${t.type.name}</span>`; // Retorna la estructura HTML de cada tipo.
    })
    .join(""); // Une todos los elementos del arreglo en una sola cadena de texto.

  // Construir las barras de estadísticas (HP, ataque, etc.)
  const statsHTML = pokemon.stats
    .map((s) => {
      const porcentaje = (s.base_stat / 255) * 100; // Calcula el ancho de la barra de estadística como un porcentaje.
      return `
        <div>
          <strong>${s.stat.name}:</strong> ${s.base_stat}
          <div class="stats-bar">
            <div class="stats-fill" style="width:${porcentaje}%"></div>
          </div>
        </div>
      `;
    })
    .join("");

  // Construir la lista de habilidades
  const abilitiesHTML = pokemon.abilities
    .map((a) => `<li>${a.ability.name}</li>`) // Mapea cada habilidad a un elemento de lista HTML.
    .join("");

  // Insertar todo el HTML construido en el contenedor de resultados
  resultContainer.innerHTML = `
    <div class="pokemon-header">
      <img class="pokemon-image" src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
      <div>
        <h2 class="pokemon-name">${pokemon.name} <span class="pokemon-id">#${pokemon.id
    .toString()
    .padStart(3, "0")}</span></h2>
        <div class="pokemon-types">${tiposHTML}</div>
      </div>
    </div>

    <div class="pokemon-details">
      <div class="detail-card">
        <h3>Estadísticas</h3>
        ${statsHTML}
      </div>

      <div class="detail-card">
        <h3>Habilidades</h3>
        <ul>${abilitiesHTML}</ul>
      </div>

      <div class="detail-card">
        <h3>Información Básica</h3>
        <p><strong>Altura:</strong> ${pokemon.height / 10}m</p>
        <p><strong>Peso:</strong> ${pokemon.weight / 10}kg</p>
        <p><strong>Experiencia base:</strong> ${pokemon.base_experience}</p>
      </div>
    </div>
  `;

  // Mostrar el contenedor de resultados, que antes estaba oculto
  resultContainer.style.display = "block";
}

// ===================== EVENTOS (Interacción del usuario) =====================
searchBtn.addEventListener("click", buscarPokemon); // Clic en botón: Al hacer clic en el botón de búsqueda, se ejecuta la función buscarPokemon().
pokemonInput.addEventListener("keypress", (e) => { // Enter en input: Escucha la pulsación de teclas en el campo de texto.
  if (e.key === "Enter") buscarPokemon(); // Si la tecla es "Enter", llama a la función buscarPokemon().
});