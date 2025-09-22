class Carrusel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._actual = 0;          // índice
    this._imagenes = [];       // array de img
    this._keyHandler = null;
  }

  connectedCallback() {
    // leer DOM y renderizar
    this._leerImagenes();
    this._renderizar();

    // permitir foco para navegación por teclado
    this.tabIndex = 0;
    this._keyHandler = (e) => {
      if (e.key === 'ArrowLeft') this.anterior();
      if (e.key === 'ArrowRight') this.siguiente();
    };
    this.addEventListener('keydown', this._keyHandler);
  }

  disconnectedCallback() {
    // limpiar listeners
    if (this._keyHandler) {
      this.removeEventListener('keydown', this._keyHandler);
      this._keyHandler = null;
    }
  }

  // ---------- lectura de img del light DOM ----------
  _leerImagenes() {
    const imgs = Array.from(this.querySelectorAll('img'));
    this._imagenes = imgs.map(i => ({ src: i.src, alt: i.alt || '' }));
    // ocultar las originales para no ver duplicados
    imgs.forEach(i => i.style.display = 'none');
    if (this._actual >= this._imagenes.length) this._actual = 0;
  }

  // ---------- render (plantilla simple) ----------
  _renderizar() {
    const slidesHtml = this._imagenes.length
      ? this._imagenes.map(img => `<div class="slide"><img src="${img.src}" alt="${img.alt}" loading="lazy"></div>`).join('')
      : `<div class="slide empty">No hay imágenes</div>`;

    const puntosHtml = this._imagenes.map((_, i) => `<button data-index="${i}" aria-label="Ir a ${i + 1}"></button>`).join('');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          max-width: 800px;
          margin: 0 auto;
          font-family: system-ui, "Segoe UI", Roboto, Arial;
        }
        .carousel { position: relative; overflow: hidden; }
        .track {
          display: flex;
          transition: transform .35s ease;
          width: 100%;
        }
        .slide {
          min-width: 100%;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eee;
        }
        .slide img {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          display: block;
        }
        .controls {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          display: flex;
          justify-content: space-between;
          pointer-events: none;
        }
        button.ctrl {
          pointer-events: auto;
          background: rgba(255,255,255,0.8);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          margin: 0 8px;
        }
        .dots {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 10px;
          display: flex;
          gap: 6px;
        }
        .dots button {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.7);
          cursor: pointer;
        }
        .dots button[aria-current="true"] {
          background: #fff;
          box-shadow: 0 0 0 3px rgba(0,0,0,0.06) inset;
        }
        .empty { padding: 2rem; color: #666; text-align: center; }
        /* focus styles para accesibilidad */
        button:focus-visible { outline: 2px solid #2684FF; outline-offset: 2px; }
        @media (max-width:480px) {
          .slide img { aspect-ratio: 4/3; }
        }
      </style>

      <div class="carousel" role="region" aria-label="Carrusel simple">
        <div class="viewport">
          <div class="track">
            ${slidesHtml}
          </div>
        </div>

        <div class="controls">
          <button class="ctrl anterior" aria-label="Anterior">&lsaquo;</button>
          <button class="ctrl siguiente" aria-label="Siguiente">&rsaquo;</button>
        </div>

        <div class="dots" role="tablist">
          ${puntosHtml}
        </div>
      </div>
    `;

    // enlazar controles
    const btnAnterior = this.shadowRoot.querySelector('.anterior');
    const btnSiguiente = this.shadowRoot.querySelector('.siguiente');
    const puntos = Array.from(this.shadowRoot.querySelectorAll('.dots button'));

    if (btnAnterior) btnAnterior.onclick = () => this.anterior();
    if (btnSiguiente) btnSiguiente.onclick = () => this.siguiente();
    puntos.forEach(p => p.onclick = () => this.irA(Number(p.dataset.index)));

    // actualizar posición inicial
    this._actualizar();
  }

  // ---------- actualizar vista (mover track y marcar puntos) ----------
  _actualizar() {
    const track = this.shadowRoot.querySelector('.track');
    if (!track) return;
    // si no hay imágenes no hacer nada
    if (this._imagenes.length === 0) {
      track.style.transform = `translateX(0%)`;
      return;
    }
    const offset = -this._actual * 100;
    track.style.transform = `translateX(${offset}%)`;

    const puntos = Array.from(this.shadowRoot.querySelectorAll('.dots button'));
    puntos.forEach((b, i) => {
      if (i === this._actual) b.setAttribute('aria-current', 'true');
      else b.removeAttribute('aria-current');
    });
  }

  // ---------- navegación (métodos en español) ----------
  siguiente() {
    const n = this._imagenes.length;
    if (n === 0) return;
    this._actual = (this._actual + 1) % n;
    this._actualizar();
  }

  anterior() {
    const n = this._imagenes.length;
    if (n === 0) return;
    this._actual = (this._actual - 1 + n) % n;
    this._actualizar();
  }

  irA(indice) {
    if (!Number.isFinite(indice)) return;
    const n = this._imagenes.length;
    if (n === 0) return;
    this._actual = Math.max(0, Math.min(indice, n - 1));
    this._actualizar();
  }
}

customElements.define('carrusel-component', Carrusel);
