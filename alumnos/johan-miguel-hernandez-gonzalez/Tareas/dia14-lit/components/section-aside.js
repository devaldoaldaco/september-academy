import { LitElement, html, css } from 'lit';

import '@material/web/fab/branded-fab.js';  //crear
import '@material/web/button/filled-button.js';   // <md-filled-button>
import '@material/web/menu/menu.js';              // <md-menu>
import '@material/web/menu/menu-item.js';         // <md-menu-item>

export class Aside extends LitElement {

    constructor() {
        super();
        // arreglo de eventos
        this.eventos = [];
        this._contadorEventos = 1;
        this.modalVisible = false;

        // formulario 
        const hoy = new Date();
        this.nombreEvento = '';
        this.diaEvento = String(hoy.getDate()).padStart(2, '0');
        this.mesEvento = String(hoy.getMonth());
        this.anioEvento = String(hoy.getFullYear());
    }

    static properties = {
        eventos: { type: Array },
        modalVisible: { type: Boolean },
        nombreEvento: { type: String },
        diaEvento: { type: String },
        mesEvento: { type: String },
        anioEvento: { type: String }
    };

    static styles = css`
    .section-aside{
      display:block;
      text-align:center;
    }
    .fab-wrap{
      margin-bottom:5rem;
    }
    :root {
      background-color: #f4fbfa;
      --md-menu-container-color: #f4fbfa;
      --md-menu-container-shape: 0px;
      --md-sys-color-on-surface: #161d1d;
      --md-sys-typescale-body-large-font: system-ui;
    }
    md-menu-item {
      border-radius: 28px;
    }
    md-menu-item::part(focus-ring) {
      border-radius: 28px;
    }
    /* Styles for button and not relevant to menu */
    md-filled-button {
      --md-sys-color-primary: #47476fff;
      --md-sys-color-on-primary: #ffffff;
    }

    
    .modal-overlay {
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.35);
      z-index: 10000;
    }
    .modal {
      background: white;
      border-radius: 8px;
      padding: 1rem 1.25rem;
      width: 320px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.25);
      font-family: system-ui, sans-serif;
    }
    .modal h3 { margin: 0 0 0.75rem 0; }
    .fila { display:flex; gap:0.5rem; margin-bottom:0.5rem; }
    label { font-size: 0.85rem; display:block; margin-bottom:0.25rem; color:#333; }
    input[type="text"], select {
      width: 100%;
      padding: 0.45rem;
      border: 1px solid #d0d7d7;
      border-radius: 6px;
      font-size: 0.95rem;
    }
    .acciones { display:flex; justify-content:flex-end; gap:0.5rem; margin-top:0.75rem; }
    button.modal-cancel {
      background: transparent;
      border: 1px solid #ccc;
      padding: 0.45rem 0.6rem;
      border-radius: 6px;
      cursor: pointer;
    }
    button.modal-guardar {
      background: #006a6a;
      color: white;
      border: none;
      padding: 0.45rem 0.8rem;
      border-radius: 6px;
      cursor: pointer;
    }
    .error { color: #a00; font-size:0.85rem; margin-top:0.25rem;}
  `;

    render() {
        return html`
      <div class="section-aside">
        <div class="fab-wrap">
          <md-branded-fab label="Crear evento" @click=${this._abrirModal}>
            <svg slot="icon" viewBox="0 0 36 36" width="24" height="24" aria-hidden="true">
              <path fill="#34A853" d="M16 16v14h4V20z"></path>
              <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
              <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
              <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
              <path fill="none" d="M0 0h36v36H0z"></path>
            </svg>
          </md-branded-fab>
        </div>

        <span style="position: relative">
          <md-filled-button id="menu" @click=${this._menuClick}>
            Eventos programados
          </md-filled-button>

          <!-- el menu en el mismo shadow root -->
          <md-menu id="lista">
            ${this.eventos.length === 0
                ? html`<md-menu-item><div slot="headline">No hay eventos</div></md-menu-item>`
                : this.eventos.map(ev => html`
                  <md-menu-item>
                    <div slot="headline">${ev.dia}-${ev.mes}-${ev.anio} — ${ev.nombre}</div>
                  </md-menu-item>
                `)
            }
          </md-menu>
        </span>
      </div>

      ${this.modalVisible ? html`
        <div class="modal-overlay" @click=${this._overlayClick}>
          <div class="modal" @click=${e => e.stopPropagation()}>
            <h3>Nuevo evento</h3>

            <div>
              <label>Nombre</label>
              <input type="text" .value=${this.nombreEvento} @input=${e => this.nombreEvento = e.target.value} placeholder="Nombre del evento" />
            </div>

            <div class="fila">
              <div style="flex:1">
                <label>Día</label>
                <input type="text" .value=${this.diaEvento} @input=${e => this.diaEvento = e.target.value} maxlength="2" />
              </div>
              <div style="flex:1">
                <label>Mes</label>
                <input type="text" .value=${this.mesEvento} @input=${e => this.mesEvento = e.target.value} maxlength="2" />
              </div>
            </div>

            <div>
              <label>Año</label>
              <input type="text" .value=${this.anioEvento} @input=${e => this.anioEvento = e.target.value} maxlength="4" />
            </div>

            ${this._error ? html`<div class="error">${this._error}</div>` : ''}

            <div class="acciones">
              <button class="modal-cancel" @click=${this._cerrarModal}>Cancelar</button>
              <button class="modal-guardar" @click=${this._guardarEvento}>Guardar</button>
            </div>
          </div>
        </div>
      ` : ''}
    `;
    }

    _abrirModal() {
        const hoy = new Date();
        this.nombreEvento = '';
        this.diaEvento = String(hoy.getDate()).padStart(2, '0');
        this.mesEvento = String(hoy.getMonth());
        this.anioEvento = String(hoy.getFullYear());
        this._error = '';
        this.modalVisible = true;
    }

    _cerrarModal() {
        this.modalVisible = false;
        this._error = '';
    }

    _overlayClick() {
        this._cerrarModal();
    }

    _guardarEvento() {
        // validaciones simples
        const nombre = (this.nombreEvento || '').trim();
        const diaNum = Number(this.diaEvento);
        const anioNum = Number(this.anioEvento);

        if (!nombre) {
            this._error = 'Escribe un nombre para el evento.';
            return;
        }
        if (!Number.isInteger(diaNum) || diaNum < 1 || diaNum > 31) {
            this._error = 'Día inválido (1-31).';
            return;
        }
        if (!Number.isInteger(anioNum) || anioNum < 1900) {
            this._error = 'Año inválido.';
            return;
        }

        const nuevoEvento = {
            nombre: nombre,
            dia: String(diaNum).padStart(2, '0'),
            mes: this.mesEvento,
            anio: anioNum
        };

        this._contadorEventos += 1;
        this.eventos = [...this.eventos, nuevoEvento];

        this._cerrarModal();
        this.dispatchEvent(new CustomEvent('fab-add', { bubbles: true, composed: true }));
    }



    _menuClick() {
        // buscamos dentro del shadow root del componente
        const menuEventos = this.renderRoot.querySelector('#menu');
        const listaEventos = this.renderRoot.querySelector('#lista');
        if (!listaEventos) return;

        // asigna anchor (mejor que usar attr anchor) y muestra el menu
        try { listaEventos.anchorElement = menuEventos; } catch (e) { /* ignore */ }
        listaEventos.show();
    }

}

