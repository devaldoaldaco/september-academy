class CarruselImagenes extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:"open"});
    this.indice = 0;
  }

  connectedCallback(){
    this.render();
    this.cache();
    this.bind();
    this.mostrar(0);
  }

  get data(){
    try{
      const raw = this.getAttribute("imagenes") || "[]";
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : [];
    }catch{ return []; }
  }

  render(){
    const imgs = this.data;
    const puntos = imgs.map((_,i)=>`<button class="punto" aria-selected="${i===0?'true':'false'}"></button>`).join("");
    const slides = imgs.map((it, i)=>`
      <figure class="diapositiva desvanecer" aria-hidden="${i===0?'false':'true'}">
        <figcaption class="numerotexto">${i+1} / ${imgs.length}</figcaption>
        <img src="${it.src}" alt="${it.alt||''}" loading="${it.loading||'lazy'}">
        <figcaption class="leyenda">${it.leyenda||''}</figcaption>
      </figure>
    `).join("");

    this.shadowRoot.innerHTML = `
      <style>
        :host{
            display:block;
            max-width:min(900px,92vw);
            margin:16px auto 24px;
            font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif
        }

        .contenedor{    
            position:relative;
            border-radius:16px;
            overflow:hidden;
            background:#0c1020
        }
        .diapositiva{
            display:none;
            margin:0;
            position:relative;
            min-height:240px
        }

        .diapositiva img{
            display:block;
            width:100%;
            height:auto;
            aspect-ratio:16/9;
            object-fit:cover;
            background:#0b0f1a
        }
        .numerotexto{
            position:absolute;  
            top:10px;
            left:12px;
            padding:6px 10px;
            background:rgba(0,0,0,.45);
            border-radius:999px;
            font-size:12px;
            color:#fff
        }
        .leyenda{
            position:absolute;
            left:0;right:0;
            bottom:0;
            padding:14px 18px;
            background:linear-gradient(180deg,transparent,rgba(0,0,0,.55));
            font-size:14px;
            color:#fff
        }
        .control{
            position:absolute;
            top:50%;
            transform:translateY(-50%);
            background:rgba(0,0,0,.45);
            border:0;
            color:#fff;
            padding:10px 14px;
            cursor:pointer;
            border-radius:10px
        }

        .anterior{
            left:10px
        }

        .siguiente{
            right:10px
        }
        .control:disabled{
            opacity:.4;
            pointer-events:none
        }
        .puntos{
            text-align:center;
            margin:14px 0 0
        }
        .punto{
            width:11px;
            height:11px;
            border-radius:50%;
            border:0;
            background:#6b7280;
            opacity:.6;
            margin:0 5px;
            cursor:pointer
        }
        .punto[aria-selected="true"]{
            background:#6c79ff;
            opacity:1;
            transform:scale(1.1)
        }
        .desvanecer{
            animation:aparecer .5s ease
        }
        @keyframes aparecer{from{opacity:.35}to{opacity:1}}
      </style>

      <div class="contenedor">
        ${slides}
        <button class="control anterior" aria-label="Anterior">&#10094;</button>
        <button class="control siguiente" aria-label="Siguiente">&#10095;</button>
      </div>
      <div class="puntos" role="tablist" aria-label="Seleccionar diapositiva">${puntos}</div>
    `;
  }

  cache(){
    const $ = sel => this.shadowRoot.querySelector(sel);
    const $$ = sel => this.shadowRoot.querySelectorAll(sel);
    this.$slides = $$('.diapositiva');
    this.$puntos = $$('.punto');
    this.$prev = $('.anterior');
    this.$next = $('.siguiente');
  }

  bind(){
    this.$prev.addEventListener('click', () => this.cambiar(-1));
    this.$next.addEventListener('click', () => this.cambiar(1));
    this.$puntos.forEach((p, i) => p.addEventListener('click', () => this.mostrar(i)));
    this.addEventListener('keydown', e => {
      if(e.key === 'ArrowLeft') this.cambiar(-1);
      if(e.key === 'ArrowRight') this.cambiar(1);
    });
    this.setAttribute('tabindex','0');
  }

  cambiar(paso){
    this.mostrar(this.indice + paso);
  }

  mostrar(i){
    const total = this.$slides.length;
    if(total === 0) return;
    const idx = Math.min(Math.max(i, 0), total - 1);

    this.$slides.forEach((s, k) => {
      const activo = k === idx;
      s.style.display = activo ? 'block' : 'none';
      s.setAttribute('aria-hidden', String(!activo));
    });

    this.$puntos.forEach((p, k) => p.setAttribute('aria-selected', String(k === idx)));

    this.$prev.disabled = idx === 0;
    this.$next.disabled = idx === total - 1;

    this.indice = idx;
  }
}
customElements.define('carrusel-imagenes', CarruselImagenes);


class PantallaDashboard extends HTMLElement {
  constructor(){ super(); this.attachShadow({ mode:"open" }); }

  connectedCallback(){ this.render(); }

  render(){
    this.shadowRoot.innerHTML = `
      <style>
        :host{
          display:block;
          min-height:100dvh;
          background:linear-gradient(135deg,#f5f7fa,#c3cfe2);
          font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;
          padding:20px;
        }
        h1{
          text-align:center;
          margin:0 0 20px;
          color:#283593;
        }
      </style>

      <h1>Galería de Fotos</h1>

      <carrusel-imagenes imagenes='[
        {"src":"img/img1.jpeg","alt":"Imagen 1","leyenda":"Texto de la primera"},
        {"src":"img/img2.jpeg","alt":"Imagen 2","leyenda":"Texto de la segunda"},
        {"src":"img/img3.jpeg","alt":"Imagen 3","leyenda":"Texto de la tercera"}
    ]'></carrusel-imagenes>
    `;
  }
}
customElements.define("pantalla-dashboard", PantallaDashboard);