import { LitElement, html, css } from 'https://unpkg.com/lit@2.7.5?module';

export class Mario extends LitElement {
  constructor() {
    super();
    this.img1 = '../images/mario.png';
    this.img2 = '../images/villano.png';
    this.marioX = 0;
    this.villanoX = 1000;
    this.avanza = 10;
  }

  static properties = {
    img1: { type: String },
    img2: { type: String },
    marioX: { type: Number },
    villanoX: { type: Number }
  };

  static styles = css`
    .recorrido {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .mario {
      position: absolute;
      bottom: 0;
      left: 0;
    }

    .villano {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', this.desliza);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.desliza);
    clearInterval(this.villanoInterval);
  }

  firstUpdated() {
    this.villanoInterval = setInterval(() => {
      if (this.villanoX >= 0) { 
        this.villanoX -= this.avanza;      
      } else {
        this.villanoX = 1000;     
      }

      if(this.marioX==this.villanoX){
        alert("GAME OVER");
      }
    }, 100); 
  }

  desliza = (e) => {
    if (e.key === 'ArrowLeft') {
      this.marioX -= this.avanza;
    } else if (e.key === 'ArrowRight') {
      this.marioX += this.avanza;
    }
  };

  render() {
    const styleMario = `transform: translateX(${this.marioX}px);`;
    const styleVillano = `transform: translateX(${this.villanoX}px);`;
    return html`
      <div class="recorrido">
        <div class="mario" style="${styleMario}">
          <img class="mario-img" src="${this.img1}" alt="mario" />
        </div>

        <div class="villano" style="${styleVillano}">
          <img class="villano-img" src="${this.img2}" alt="villano" />
        </div>
      </div>
    `;
  }
}
