import { LitElement, html, css } from 'lit';

export class CarruselImagenes extends LitElement {
    static styles = css`

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
                    background: #c42537;
                    color: white;
                    border-radius: 5px;
                }

                .boton-carrusel:hover {
                    background: #666;
                }

                .contenedor-imagen {
                    width: 600px;
                    height: 600px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                #imagen-carrusel {
                    max-width: 100%;
                    max-height: 100%;
                    border-radius: 8px;
                }`



    constructor() {
        super();
        this.indiceActual = 0;
        const imagenes1 = this.getAttribute('imagenes');
        this.listaDeImagenes = imagenes1.split(',').map(img => img.trim());
    }

    render() {
        return html`
            <div class="contenedor-principal">
                <button @click=${this.regresar} class="boton-carrusel">←</button>

                <div class="contenedor-imagen">
                    <img id="imagen-carrusel" src="${this.listaDeImagenes[0]}" alt="Imagen del carrusel">
                </div>
                <button @click=${this.siguiente} class="boton-carrusel">→</button>
            </div>
            
        `;
    }

    regresar() {
        this.indiceActual--;
        if (this.indiceActual < 0) this.indiceActual = this.listaDeImagenes.length - 1;
        this.actualizarVista();
    };

    siguiente() {
        this.indiceActual++;
        if (this.indiceActual >= this.listaDeImagenes.length) this.indiceActual = 0;
        this.actualizarVista();
    };

    actualizarVista() {
        const imagen = this.shadowRoot.querySelector('#imagen-carrusel');
        imagen.src = this.listaDeImagenes[this.indiceActual];
    }

}

customElements.define('carrusel-imagenes', CarruselImagenes)