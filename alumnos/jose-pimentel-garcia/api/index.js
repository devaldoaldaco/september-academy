const container = document.getElementById('card-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentPage = 1;

function loadCharacters(page = 1) {
container.innerHTML = ""; 

  fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(char => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = char.image;
        img.alt = char.name;

        const name = document.createElement('h3');
        name.textContent = char.name;

        const info = document.createElement('p');
        info.textContent = `${char.species} — ${char.status}`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(info);

        container.appendChild(card);
      });

      
    })
    .catch(error => {
      console.error('Error al obtener personajes:', error);
    });
}

anterior.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    loadCharacters(currentPage);
  }
});

siguiente.addEventListener('click', () => {
  currentPage++;
  loadCharacters(currentPage);
});

loadCharacters(currentPage);