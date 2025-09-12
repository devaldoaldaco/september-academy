document.addEventListener('DOMContentLoaded', function() {
    const loaderBar = document.getElementById('loader-bar');
    const loaderText = document.getElementById('loader-text');
    const formContainer = document.getElementById('form-container');

    let currentPage = 1;
    const totalPages = 3;

    const pages = {
        1: {
            title: 'Videojuegos - Página. 1',
            html: `
                <header>
                    <h1>Videojuegos</h1>
                    <p>Página 1 de 3</p>
                </header>
                <form id="game-form-1">
                    <label for="game-name">Nombre del Videojuego:</label>
                    <input type="text" id="game-name" name="game-name" required>
                    <label for="platform">Plataforma:</label>
                    <input type="text" id="platform" name="platform" required>
                    <button type="submit">Siguiente</button>
                </form>
            `
        },
        2: {
            title: 'Videojuegos - Página. 2',
            html: `
                <header>
                    <h1>Videojuegos</h1>
                    <p>Página 2 de 3</p>
                </header>
                <form id="game-form-2">
                    <label for="genre">Género:</label>
                    <input type="text" id="genre" name="genre" required>
                    <label for="rating">Calificación:</label>
                    <input type="number" id="rating" name="rating" min="1" max="10" required>
                    <button type="submit">Siguiente</button>
                </form>
            `
        },
        3: {
            title: 'Videojuegos - Página. 3',
            html: `
                <header>
                    <h1>Videojuegos</h1>
                    <p>Página 3 de 3</p>
                </header>
                <form id="game-form-3">
                    <label for="comments">Comentarios:</label>
                    <textarea id="comments" name="comments" rows="4"></textarea>
                    <button type="submit">Finalizar</button>
                </form>
            `
        }
    };
    function updateProgressBar() {
        const progress = Math.round((currentPage / totalPages) * 100);
        loaderBar.style.width = `${progress}%`;
        loaderText.textContent = `Cargando ${progress}%`;
    }

    function renderPage() {
        formContainer.innerHTML = pages[currentPage].html;
        updateProgressBar();

        const currentForm = document.getElementById(`game-form-${currentPage}`);
        if (currentForm) {
            currentForm.addEventListener('submit', (event) => {
                event.preventDefault(); 

                if (currentPage < totalPages) {
                    currentPage++;
                    renderPage(); 
                } else {
                    alert('Terminado');
                }
            });
        }
    }
    renderPage();
});