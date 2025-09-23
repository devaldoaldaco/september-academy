
// reemplaza esto:
// import { LitElement, html, css } from 'lit';

// por esto:
import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';


class CarruselLit extends LitElement {
  static properties = {
    _actual: { type: Number },
    _imagenes: { type: Array }
  };

  static styles = css`
    :host { display:block; max-width:800px; margin:0 auto; font-family:system-ui, "Segoe UI", Roboto, Arial; }
    .carousel { position:relative; overflow:hidden; }
    .track { display:flex; transition:transform .35s ease; width:100%; }
    .slide { min-width:100%; box-sizing:border-box; display:flex; align-items:center; justify-content:center; background:#eee; }
    .slide img { width:100%; aspect-ratio:16/9; object-fit:cover; display:block; }
    .controls { position:absolute; top:50%; transform:translateY(-50%); width:100%; display:flex; justify-content:space-between; pointer-events:none; }
    button.ctrl { pointer-events:auto; background:rgba(255,255,255,0.8); border:none; width:36px; height:36px; border-radius:50%; cursor:pointer; margin:0 8px; }
    .dots { position:absolute; left:50%; transform:translateX(-50%); bottom:10px; display:flex; gap:6px; }
    .dots button { width:10px; height:10px; border-radius:50%; border:none; background:rgba(255,255,255,0.7); }
  `;

  constructor() {
    super();
    this._actual = 0;
    this._imagenes = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this._leerImagenes();
  }

  // lee imágenes 
  _leerImagenes() {
    const imgs = Array.from(this.querySelectorAll('img'));
    this._imagenes = imgs.map(i => ({ src: i.src, alt: i.alt || '' }));
    imgs.forEach(i => i.style.display = 'none');
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="carousel" role="region" aria-label="Carrusel simple">
        <div class="viewport">
          <div class="track" style="transform: translateX(${ -this._actual * 100 }%);">
            ${this._imagenes.length ? this._imagenes.map(img => html`<div class="slide"><img src="${img.src}" alt="${img.alt}"></div>`) : html`<div class="slide">No hay imágenes</div>`}
          </div>
        </div>

        <div class="controls">
          <button class="ctrl anterior" @click=${() => this.anterior()} aria-label="Anterior">◀</button>
          <button class="ctrl siguiente" @click=${() => this.siguiente()} aria-label="Siguiente">▶</button>
        </div>

        <div class="dots">
          ${this._imagenes.map((_, i) => html`<button @click=${() => this.irA(i)} aria-label="Ir a ${i+1}"></button>`) }
        </div>
      </div>
    `;
  }

  // navegación simple
  siguiente() {
    const n = this._imagenes.length;
    if (n === 0) return;
    this._actual = (this._actual + 1) % n;
    this.requestUpdate();
  }

  anterior() {
    const n = this._imagenes.length;
    if (n === 0) return;
    this._actual = (this._actual - 1 + n) % n;
    this.requestUpdate();
  }

  irA(indice) {
    const n = this._imagenes.length;
    if (n === 0) return;
    if (!Number.isFinite(indice)) return;
    this._actual = Math.max(0, Math.min(indice, n - 1));
    this.requestUpdate();
  }
}

customElements.define('carrusel-lit', CarruselLit);

export { CarruselLit };