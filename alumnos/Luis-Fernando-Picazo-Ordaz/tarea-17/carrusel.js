class Carrusel extends HTMLElement {

    static get observedAttributes() {
        return ['infinite']
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.infinite = false;
    }

    connectedCallback() {
        this.render()

    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'infinite') {
            this.infinite = true
        }
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>

            :host {
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
                z-index: 2;
            }

            .imgs-container {
                max-width: 90vw;
                height: 100%;
                display: flex;
                overflow-x: hidden;
                position: relative;
            }


            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                position: absolute;
            }

        </style>
        <div class="container">
            <button id="left" class="1l"> < </button>
                <div class="imgs-container">
                    <img src="imgs/1.jpg" id="1" alt="Imagen 1">
                    <img src="imgs/2.jpg" id="2" alt="Imagen 2">
                    <img src="imgs/3.jpg" id="3" alt="Imagen 3">
                    <img src="imgs/4.jpg" id="4" alt="Imagen 4">
                </div>
            <button id="right" class="1r"> > </button>
        </div>
        `;

        const btnLeft = this.shadowRoot.getElementById('left')
        const btnRight = this.shadowRoot.getElementById('right')
        const img1 = this.shadowRoot.getElementById('1')
        img1.style.zIndex = 0
        const img2 = this.shadowRoot.getElementById('2')
        img2.style.zIndex = -1
        const img3 = this.shadowRoot.getElementById('3')
        img3.style.zIndex = -1
        const img4 = this.shadowRoot.getElementById('4')
        img4.style.zIndex = -1

        btnRight.addEventListener('click', () => {
            switch (btnRight.classList[0]) {
                case '1r':
                    img1.style.zIndex = -1
                    img2.style.zIndex = 0
                    btnRight.className = '2r'
                    btnLeft.className = '4l'
                    break;
                case '2r':
                    img2.style.zIndex = -1
                    img3.style.zIndex = 0
                    btnRight.className = '3r'
                    btnLeft.className = '3l'
                    break;
                case '3r':
                    img3.style.zIndex = -1
                    img4.style.zIndex = 0
                    btnRight.className = '4r'
                    btnLeft.className = '2l'
                    break;
                case '4r':
                    if (this.infinite) {
                        img4.style.zIndex = -1
                        img1.style.zIndex = 0
                        btnRight.className = '1r'
                        btnLeft.className = '1l'
                        break;
                    } else {
                        break;
                    }
                default:
                    break;
            }
        })

        btnLeft.addEventListener('click', () => {
            switch (btnLeft.classList[0]) {
                case '1l':
                    if (this.infinite) {
                        img1.style.zIndex = -1
                        img4.style.zIndex = 0
                        btnLeft.className = '2l'
                        btnRight.className = '4r'
                        break;
                    } else {
                        break
                    }
                case '2l':
                    img4.style.zIndex = -1
                    img3.style.zIndex = 0
                    btnLeft.className = '3l'
                    btnRight.className = '3r'
                    break;
                case '3l':
                    img3.style.zIndex = -1
                    img2.style.zIndex = 0
                    btnLeft.className = '4l'
                    btnRight.className = '2r'
                    break;
                case '4l':
                    img2.style.zIndex = -1
                    img1.style.zIndex = 0
                    btnLeft.className = '1l'
                    btnRight.className = '1r'
                    break;

                default:
                    break;
            }
        })
    }
}

customElements.define('carrusel-component', Carrusel);