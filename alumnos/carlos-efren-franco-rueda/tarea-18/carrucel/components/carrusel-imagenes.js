import { LitElement, html, css } from 'https://unpkg.com/lit@3/index.js?module';

export class CarruselImagenes extends LitElement {
  static properties = { imagenes: { type: Array }, indice: { type: Number } };

  constructor(){ super(); this.imagenes = []; this.indice = 0; }

  static styles = css`
    :host{ display:block; max-width:min(900px,92vw); margin:16px auto 24px; font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif }
    .contenedor{ position:relative; border-radius:16px; overflow:hidden; background:#0c1020 }
    .diapositiva{ display:none; margin:0; position:relative; min-height:240px }
    .diapositiva.activa{ display:block; animation:aparecer .5s ease }
    .diapositiva img{ display:block; width:100%; height:auto; aspect-ratio:16/9; object-fit:cover; background:#0b0f1a }
    .numerotexto{ position:absolute; top:10px; left:12px; padding:6px 10px; background:rgba(0,0,0,.45); border-radius:999px; font-size:12px; color:#fff }
    .leyenda{ position:absolute; left:0; right:0; bottom:0; padding:14px 18px; background:linear-gradient(180deg,transparent,rgba(0,0,0,.55)); font-size:14px; color:#fff }
    .control{ position:absolute; top:50%; transform:translateY(-50%); background:rgba(0,0,0,.45); border:0; color:#fff; padding:10px 14px; cursor:pointer; border-radius:10px }
    .anterior{ left:10px } .siguiente{ right:10px }
    .control:disabled{ opacity:.4; pointer-events:none }
    .puntos{ text-align:center; margin:14px 0 0 }
    .punto{ width:11px; height:11px; border-radius:50%; border:0; background:#6b7280; opacity:.6; margin:0 5px; cursor:pointer }
    .punto[aria-selected="true"]{ background:#6c79ff; opacity:1; transform:scale(1.1) }
    @keyframes aparecer{ from{opacity:.35} to{opacity:1} }
  `;

  firstUpdated(){
    this.setAttribute('tabindex','0');
    this.addEventListener('keydown', e => {
      if(e.key === 'ArrowLeft') this.cambiar(-1);
      if(e.key === 'ArrowRight') this.cambiar(1);
    });
    this.actualizarBotones(this.indice);
  }

  actualizarBotones(idx){
    const total = this.imagenes.length;
    const prev = this.renderRoot?.querySelector('.anterior');
    const next = this.renderRoot?.querySelector('.siguiente');
    if(prev) prev.disabled = (idx === 0);
    if(next) next.disabled = (idx === total - 1);
  }

  cambiar(paso){
    const total = this.imagenes.length;
    if(!total) return;
    this.indice = Math.min(Math.max(this.indice + paso, 0), total - 1);
    this.actualizarBotones(this.indice);
  }

  irA(i){
    const total = this.imagenes.length;
    if(!total) return;
    this.indice = Math.min(Math.max(i, 0), total - 1);
    this.actualizarBotones(this.indice);
  }

  updated(changed){
    if(changed.has('indice') || changed.has('imagenes')){
      const total = this.imagenes.length;
      if(total){
        if(this.indice < 0) this.indice = 0;
        if(this.indice > total - 1) this.indice = total - 1;
        this.updateComplete.then(()=> this.actualizarBotones(this.indice));
      }
    }
  }

  render(){
    const total = this.imagenes.length;
    const idx = this.indice;

    return html`
      <div class="contenedor">
        ${this.imagenes.map((it, i) => html`
          <figure class="diapositiva ${i===idx?'activa':''}" aria-hidden="${i===idx?'false':'true'}">
            <figcaption class="numerotexto">${i+1} / ${total}</figcaption>
            <img src="${it.src}" alt="${it.alt||''}" loading="${it.loading||'lazy'}">
            ${it.leyenda ? html`<figcaption class="leyenda">${it.leyenda}</figcaption>` : null}
          </figure>
        `)}
        <button class="control anterior" aria-label="Anterior" @click=${()=>this.cambiar(-1)}>&#10094;</button>
        <button class="control siguiente" aria-label="Siguiente" @click=${()=>this.cambiar(1)}>&#10095;</button>
      </div>

      <div class="puntos" role="tablist" aria-label="Seleccionar diapositiva">
        ${this.imagenes.map((_, i) => html`
          <button class="punto" role="tab" aria-selected="${i===idx?'true':'false'}" @click=${()=>this.irA(i)}></button>
        `)}
      </div>
    `;
  }
}

customElements.define('carrusel-imagenes', CarruselImagenes);