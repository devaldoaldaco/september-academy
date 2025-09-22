// https://rickandmortyapi.com/api/character

document.addEventListener("DOMContentLoaded", () => {
  init();
});

// Variables globales para controlar la paginación y búsqueda
let nextPageUrl = "https://rickandmortyapi.com/api/character";
let allCharacters = [];
let currentSearchTerm = "";

const init = () => {
  showData();

  // Event listeners para el buscador y el botón de ver más
  document
    .getElementById("searchButton")
    .addEventListener("click", handleSearch);
  document.getElementById("searchInput").addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  });

  document
    .getElementById("loadMoreBtn")
    .addEventListener("click", loadMoreCharacters);
};

const handleSearch = () => {
  const searchTerm = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();
  currentSearchTerm = searchTerm;

  // Limpiar el contenedor y filtrar resultados
  const div = document.querySelector("#div");
  div.innerHTML = "";

  if (searchTerm) {
    // Filtrar personajes existentes
    const filteredCharacters = allCharacters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm)
    );

    if (filteredCharacters.length > 0) {
      filteredCharacters.forEach((character) => {
        viewHTML(
          character.image,
          character.name,
          character.status,
          character.gender
        );
      });
    } else {
      div.innerHTML = '<p class="no-results">No se encontraron personajes</p>';
    }

    // Ocultar el botón de "Ver más" durante la búsqueda
    document.getElementById("loadMoreBtn").style.display = "none";
  } else {
    // Si no hay término de búsqueda, mostrar todos los personajes
    allCharacters.forEach((character) => {
      viewHTML(
        character.image,
        character.name,
        character.status,
        character.gender
      );
    });

    // Mostrar el botón de "Ver más" si hay más páginas
    document.getElementById("loadMoreBtn").style.display = nextPageUrl
      ? "block"
      : "none";
  }
};

const consultarData = async () => {
  const respuesta = await fetch(nextPageUrl);
  const data = await respuesta.json();
  nextPageUrl = data.info.next; // Actualizar la URL de la próxima página
  const responseData = data.results;
  return responseData;
};

const showData = async () => {
  const loader = document.querySelector("#loader");
  loader.classList.remove("hidden");

  // Ocultar botón de "Ver más" mientras se carga
  document.getElementById("loadMoreBtn").style.display = "none";

  const data = await consultarData();

  setTimeout(() => {
    // Guardar todos los personajes cargados
    allCharacters = [...allCharacters, ...data];

    // Si hay un término de búsqueda, filtrar los resultados
    if (currentSearchTerm) {
      const filteredCharacters = allCharacters.filter((character) =>
        character.name.toLowerCase().includes(currentSearchTerm)
      );

      filteredCharacters.forEach((element) => {
        viewHTML(element.image, element.name, element.status, element.gender);
      });
    } else {
      data.forEach((element) => {
        viewHTML(element.image, element.name, element.status, element.gender);
      });
    }

    loader.classList.add("hidden");

    // Mostrar el botón de "Ver más" si hay más páginas
    document.getElementById("loadMoreBtn").style.display = nextPageUrl
      ? "block"
      : "none";
  }, 500);
};

const loadMoreCharacters = () => {
  if (nextPageUrl) {
    showData();
  }
};

const viewHTML = (srcImage, name, status, genero) => {
  const div = document.querySelector("#div");
  const divCart = document.createElement("DIV");
  const img = document.createElement("IMG");
  const h1 = document.createElement("H1");
  const p = document.createElement("P");
  const pGender = document.createElement("P");

  divCart.classList.add("cart");
  img.setAttribute("src", srcImage);
  img.setAttribute("alt", name);
  h1.innerText = name;
  p.innerText = "Status: " + status;

  validateAlive(p, status);

  pGender.innerText = "Genero: " + genero;

  divCart.appendChild(img);
  divCart.appendChild(h1);
  divCart.appendChild(p);
  divCart.appendChild(pGender);

  div.appendChild(divCart);
};

const validateAlive = (p, status) => {
  const allowed = ["Alive", "Dead", "unknown"];
  allowed.includes(status)
    ? p.classList.add(status)
    : p.classList.add("unknown");
};
