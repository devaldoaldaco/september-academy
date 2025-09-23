import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Carrusel extends LitElement {

    static properties = {
        infinite: { type: Boolean},
        index: { type: Number, attribute:false}
    }

    static styles = css`

            :host{
                width: 90%;
                height: 90%;
            }
            .container {
                width: 100%;
                height: 100%;
                position: relative;
            }

            button {
                position: absolute;
                background-color: rgba(255, 255, 255, 0.5);
                border: none;
                font-size: 2rem;
                color: #fff;
                cursor: pointer;
                height: 100px;
                z-index: 1;
            }

            button:hover {
                background-color: rgba(174, 174, 174, 0.5);
            }

            button:active {
                background-color: rgba(255, 255, 255, 0.5);
            }


            button:last-child {
                right: 0%;
                bottom: 45%;
            }

            button:first-child {
                bottom: 45%;
            }

            .imgs-container {
                max-width: 90vw;
                height: 100%;
                display: flex;
                overflow-x: hidden;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
    `

    constructor() {
        super();
        this.infinite = false;
        this.index = 1;
    }

    render() {                
        return html`
        <div class="container">
            <button id="left" class="1l" @click=${this.moveLeft}> < </button>
                <div class="imgs-container">
                    <img src="imgs/1.jpg" id="1" alt="Imagen 1" ?hidden="${this.index !== 1}">
                    <img src="imgs/2.jpg" id="2" alt="Imagen 2" ?hidden="${this.index !== 2}">
                    <img src="imgs/3.jpg" id="3" alt="Imagen 3" ?hidden="${this.index !== 3}">
                    <img src="imgs/4.jpg" id="4" alt="Imagen 4" ?hidden="${this.index !== 4}">
                </div>
            <button id="right" class="1r" @click=${this.moveRight}> > </button>
        </div>
        `
    }

    moveRight() {
        this.index++;
        if (this.index > 4) {
            this.index = this.infinite ? 1: 4
        }
    }

    moveLeft() {
        this.index--;
        if (this.index < 1) {
            this.index = this.infinite ? 4 : 1
        }
    }

}

customElements.define('mi-carrusel', Carrusel)