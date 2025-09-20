export class CarruselImagenes extends HTMLElement {
    constructor() {
        super();
        this.indiceActual = 0;
        this.attachShadow({ mode:'open'});

        const imagenes1 = this.getAttribute('imagenes');
        this.listaDeImagenes = imagenes1.split(',').map(img => img.trim());
        this.shadowRoot.innerHTML = this.render();
        this.agregarEventos();
    }

    agregarEventos() {
        const regresar = this.shadowRoot.querySelector('#botonRegresar');
        const siguiente = this.shadowRoot.querySelector('#botonSiguiente');

            regresar.addEventListener('click', () => {
                this.indiceActual--;
                if (this.indiceActual < 0) this.indiceActual = this.listaDeImagenes.length - 1;
                this.actualizarVista();
            });

            siguiente.addEventListener('click', () => {
                this.indiceActual++;
                if (this.indiceActual >= this.listaDeImagenes.length) this.indiceActual = 0;
                this.actualizarVista();
            });
    }

    actualizarVista() {
        const imagen = this.shadowRoot.querySelector('#imagen-carrusel');
        imagen.src = this.listaDeImagenes[this.indiceActual];
    }

    render() {
        return `
            <style>
                .contenedor-principal {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                    padding: 20px;
                }

                .boton-carrusel {
                    padding: 10px 15px;
                    font-size: 18px;
                    cursor: pointer;
                    border: none;
                    background: black;
                    color: white;
                    border-radius: 5px;
                }

                .boton-carrusel:hover {
                    background: #666;
                }

                .contenedor-imagen {
                    width: 300px;
                    height: 300px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                #imagen-carrusel {
                    max-width: 100%;
                    max-height: 100%;
                    border-radius: 8px;
                }

            </style>

            <div class="contenedor-principal">
                <button id="botonRegresar" class="boton-carrusel">←</button>

                <div class="contenedor-imagen">
                    <img id="imagen-carrusel" src="${this.listaDeImagenes[0]}" alt="Imagen del carrusel">
                </div>

                <button id="botonSiguiente" class="boton-carrusel">→</button>
            </div>

        `;
    }
}

customElements.define('carrusel-imagenes', CarruselImagenes);