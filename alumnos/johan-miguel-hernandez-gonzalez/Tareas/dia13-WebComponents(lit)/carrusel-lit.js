// carrusel-lit.js — Carrusel de imágenes usando Lit (ESM, sin decoradores)
// Cómo usar: <script type="module" src="./carrusel-lit.js"></script>
// <carrusel-lit autoplay interval="3000">
//   <img src="./img1.jpg" alt="...">
//   <img src="./img2.jpg" alt="...">
// </carrusel-lit>

import { LitElement, html, css, nothing } from 'lit';

class CarruselLit extends LitElement {
  static properties = {
    _actual: { type: Number },
    _imagenes: { type: Array },
    autoplay: { type: Boolean, reflect: true },
    interval: { type: Number }
  };

  static styles = css`
    :host { display:block; max-width:800px; margin:0 auto; font-family: system-ui, "Segoe UI", Roboto, Arial; }
    .carousel { position: relative; overflow: hidden; }
    .track { display:flex; transition: transform .35s ease; width:100%; }
    .slide { min-width:100%; box-sizing:border-box; display:flex; align-items:center; justify-content:center; background:#eee; }
    .slide img { width:100%; aspect-ratio:16/9; object-fit:cover; display:block; }
    .controls { position:absolute; top:50%; transform:translateY(-50%); width:100%; display:flex; justify-content:space-between; pointer-events:none; }
    button.ctrl { pointer-events:auto; background:rgba(255,255,255,0.8); border:none; width:36px; height:36px; border-radius:50%; cursor:pointer; margin:0 8px; }
    .dots { position:absolute; left:50%; transform:translateX(-50%); bottom:10px; display:flex; gap:6px; }
    .dots button { width:10px; height:10px; border-radius:50%; border:none; background:rgba(255,255,255,0.7); cursor:pointer; }
    .dots button[aria-current="true"] { background:#fff; box-shadow:0 0 0 3px rgba(0,0,0,0.06) inset; }
    .empty { padding:2rem; color:#666; text-align:center; }
    button:focus-visible { outline:2px solid #2684FF; outline-offset:2px; }
    @media (max-width:480px) { .slide img { aspect-ratio:4/3; } }
  `;

  constructor() {
    super();
    this._actual = 0;
    this._imagenes = [];
    this.autoplay = false;
    this.interval = 3000;

    this._timer = null;
    this._onKey = this._onKey.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    // permitir foco para teclado
    this.tabIndex = 0;
    // leer imágenes del light DOM y renderizar
    this._leerImagenes();
    // iniciar autoplay si corresponde
    this._iniciarAutoplaySiCorresponde();
    // escucha teclado
    this.addEventListener('keydown', this._onKey);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._pararAutoplay();
    this.removeEventListener('keydown', this._onKey);
  }

  // lee <img> del light DOM y los esconde para evitar duplicados
  _leerImagenes() {
    const imgs = Array.from(this.querySelectorAll('img'));
    this._imagenes = imgs.map(i => ({ src: i.src, alt: i.alt || '' }));
    imgs.forEach(i => i.style.display = 'none');
    if (this._actual >= this._imagenes.length) this._actual = 0;
    this.requestUpdate();
  }

  // autoplay helpers
  _iniciarAutoplaySiCorresponde() {
    this._pararAutoplay();
    if (this.autoplay && Number.isFinite(this.interval) && this._imagenes.length > 1) {
      this._timer = setInterval(() => this.siguiente(), Number(this.interval));
    }
  }

  _pararAutoplay() {
    if (this._timer) { clearInterval(this._timer); this._timer = null; }
  }

  // teclado
  _onKey(e) {
    if (e.key === 'ArrowLeft') this.anterior();
    if (e.key === 'ArrowRight') this.siguiente();
  }

  // render
  render() {
    const slides = this._imagenes.length > 0 ? this._imagenes : null;

    return html`
      <div class="carousel" role="region" aria-label="Carrusel">
        <div class="viewport">
          <div class="track" style="transform: translateX(${ -this._actual * 100 }%);">
            ${slides ? slides.map(img => html`<div class="slide"><img src="${img.src}" alt="${img.alt}" loading="lazy"></div>`) : html`<div class="slide empty">No hay imágenes</div>`}
          </div>
        </div>

        <div class="controls">
          <button class="ctrl anterior" @click=${() => this.anterior()} aria-label="Anterior">&lsaquo;</button>
          <button class="ctrl siguiente" @click=${() => this.siguiente()} aria-label="Siguiente">&rsaquo;</button>
        </div>

        <div class="dots" role="tablist">
          ${slides ? slides.map((_, i) => html`<button @click=${() => this.irA(i)} data-index="${i}" aria-label="Ir a ${i+1}" aria-current="${i === this._actual ? 'true' : 'false'}"></button>`) : nothing}
        </div>
      </div>
    `;
  }

  // métodos públicos en español
  siguiente() {
    const n = this._imagenes.length;
    if (n === 0) return;
    this._actual = (this._actual + 1) % n;
    this.requestUpdate();
    this._resetAutoplay();
  }

  anterior() {
    const n = this._imagenes.length;
    if (n === 0) return;
    this._actual = (this._actual - 1 + n) % n;
    this.requestUpdate();
    this._resetAutoplay();
  }

  irA(indice) {
    const n = this._imagenes.length;
    if (n === 0) return;
    if (!Number.isFinite(indice)) return;
    this._actual = Math.max(0, Math.min(indice, n - 1));
    this.requestUpdate();
    this._resetAutoplay();
  }

  _resetAutoplay() {
    // si hay autoplay, reiniciamos el timer para dar tiempo al usuario
    if (this.autoplay) {
      this._iniciarAutoplaySiCorresponde();
    }
  }
}

customElements.define('carrusel-lit', CarruselLit);

export { CarruselLit };
