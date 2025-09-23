import { LitElement, html, css } from 'lit';

import '@material/web/select/outlined-select.js';   // <md-outlined-select>
import '@material/web/select/select-option.js';     // <md-select-option>


export class Nav2 extends LitElement {

    constructor() {
        super();
    }

    static properties = {

    };

    static styles = css`
        :root {
        --md-outlined-select-text-field-outline-color: #47476fff;
        --md-outlined-select-text-field-container-shape: 0px;
        --md-outlined-select-text-field-input-text-color: #361262ff;
        --md-outlined-select-text-field-input-text-font: system-ui;
        }

        md-outlined-select::part(menu) {
        --md-menu-container-color: #f4fbfa;
        --md-menu-container-shape: 0px;
        }

        .section-info{
        display:flex;
        justify-content: flex-end;
        margin-top:1rem;
        gap:5rem;
        
        }

        md-outlined-select,p{
        margin-right:4rem;
        }

      
        
    `;

    render() {
        return html`
        <div class="section-info">
        <h4 class="fechaHoy">24 de septiembre de  2025</h4>
        <md-outlined-select>
        <md-select-option selected value="anio">
            <div slot="headline">Año</div>
        </md-select-option>
        <md-select-option value="mes">
            <div slot="headline">Mes</div>
        </md-select-option>
        <md-select-option value="semana">
            <div slot="headline">Semana</div>
        </md-select-option>
        </md-outlined-select>

        </div>
        
        `;
    }

    firstUpdated() {
        this.actualizarFechaHoy();
    }

    actualizarFechaHoy() {
        const formateador = new Intl.DateTimeFormat('es-MX', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        const hoy = formateador.format(new Date());

        const h4 = this.renderRoot.querySelector('.fechaHoy');
        if (h4) {
            h4.textContent = hoy;
        }
    }
} 