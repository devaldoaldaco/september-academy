class CarruselImagenes extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          max-width: 800px;
          margin: auto;
          text-align: center;
          font-family: Arial, sans-serif;
        }

        h2 {
          margin-bottom: 20px;
          font-size: 2rem;
          color: white;
        }

        .contenedor-carrusel {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .flecha {
          font-size: 2em;
          cursor: pointer;
          user-select: none;
          padding: 10px;
          color: #333;
        }

        .flecha.desactivada {
          opacity: 0.3;
          pointer-events: none;
        }

        .diapositivas {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex: 1;
        }

        .diapositiva {
          position: relative;
          width: 300px;
          height: 200px;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }

        .diapositiva img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      </style>

      <h2>Tecnologias para el desarrollo web</h2>
      <div class="contenedor-carrusel">
        <span class="flecha" id="anterior">&#10094;</span>
        <div class="diapositivas">
          <div class="diapositiva">
            <img src="https://opensource.fb.com/img/projects/react.jpg" alt="React">
          </div>
          <div class="diapositiva">
            <img src="https://images.ctfassets.net/crb83veve8xb/2VaNf5PhpBlvKAUKYfmefe/5fdaf99f05704485b02e14e8d4addefb/vercel.webp" alt="Vercel">
          </div>
          <div class="diapositiva">
            <img src="https://es.vite.dev/logo.svg" alt="vite">
          </div>
          <div class="diapositiva">
            <img src="https://pipedream.com/s.v0/app_XbPhj6/logo/orig" alt="postman">
          </div>
          <div class="diapositiva">
            <img src="https://www.angularminds.com/tech-logos/nodejs-logo.svg" alt="nodejs">
          </div>
          <div class="diapositiva">
            <img src="https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3ihn9bj79g3iyv96c38b.png" alt="npm">
          </div>
        </div>
        <span class="flecha" id="siguiente">&#10095;</span>
      </div>
    `;

    const botonAnterior = this.shadowRoot.querySelector("#anterior");
    const botonSiguiente = this.shadowRoot.querySelector("#siguiente");
    const contenedorDiapositivas = this.shadowRoot.querySelector(".diapositivas");

    let indiceActual = 0;
    const totalDiapositivas = this.shadowRoot.querySelectorAll(".diapositiva").length;
    const mostrarPorPantalla = 2; 

    function mostrarDiapositivas() {
      const todas = Array.from(contenedorDiapositivas.children);
      todas.forEach((diapositiva, i) => {
        diapositiva.style.display =
          i >= indiceActual && i < indiceActual + mostrarPorPantalla
            ? "block"
            : "none";
      });

      botonAnterior.classList.toggle("desactivada", indiceActual === 0);
      botonSiguiente.classList.toggle(
        "desactivada",
        indiceActual + mostrarPorPantalla >= totalDiapositivas
      );
    }

    botonAnterior.addEventListener("click", () => {
      if (indiceActual > 0) {
        indiceActual -= mostrarPorPantalla;
        mostrarDiapositivas();
      }
    });

    botonSiguiente.addEventListener("click", () => {
      if (indiceActual + mostrarPorPantalla < totalDiapositivas) {
        indiceActual += mostrarPorPantalla;
        mostrarDiapositivas();
      }
    });

    mostrarDiapositivas();
  }
}

customElements.define("carrusel-imagenes", CarruselImagenes);