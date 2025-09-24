// src/components/Mario.js
import { LitElement, html, css } from 'https://unpkg.com/lit@2.7.5?module';

export class Puntos extends LitElement {
    constructor() {
        super();
        this.img3 = '../images/puntos.png';
        this.puntos = 0;
    }

    static properties = {
        img3: { type: String },
        puntos: { type: Number }
    };

    static styles = css`

    .recorrido {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .caja{
      position: absolute;
      bottom: 0; 
      left:25rem;               
    }

    .puntos{
      position: absolute;
      bottom: 14rem; 
      left:30rem;  
      width:20rem;
      height:4rem;
      border-radius:3rem;
      border: 1px solid black;
      background: #da6a1c;
      display: flex;
      justify-content: center;
    }

    p {
          font-family: Fantasy;
          color: white;
          font-size: 1.3rem;
        }

  `;

    render() {
        return html`

    <div class="recorrido">

        <div class="puntos">
        <p>Score: ${this.puntos}</p>
      </div>

      <div class="caja">
        <img class="caja-img" src="${this.img3}" alt="caja" />
      </div>
    </div>
    `;
    }
}

