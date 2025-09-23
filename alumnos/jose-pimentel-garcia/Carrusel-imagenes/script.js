class ImageCarousel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.index = 0;

    this.cars = [
      { src: "imagenes/carro1.webp", name: "Koenigsegg Jesko" },
      { src: "imagenes/carro2.jpg", name: "RedBull RB19" },
      { src: "imagenes/carro3.jpg", name: "Lamborgini Revuelto"},
      { src: "imagenes/carro4.avif", name: "Porsche GT3Rs"},
      { src: "imagenes/carro5.webp", name: "Porsche GT4"},
      { src: "imagenes/carro6.jpg", name: "Nissan GTR R33 Skyline"}
    ];
  }

  connectedCallback() {
    this.render();
    this.addEvents();
    this.updateSlide();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="styles.css">
      <div class="carousel">
        <div class="slides">
          ${this.cars.map(car => `
            <div class="card">
              <img src="${car.src}" alt="${car.name}">
              <h3>${car.name}</h3>
            </div>
          `).join("")}
        </div>
        <div class="controls">
          <button id="prev">⟨</button>
          <button id="next">⟩</button>
        </div>
        <div class="indicators">
          ${this.cars.map((_, i) => `<span data-index="${i}"></span>`).join("")}
        </div>
      </div>
    `;
  }

  addEvents() {
    this.shadowRoot.querySelector("#prev")
      .addEventListener("click", () => this.prevSlide());
    this.shadowRoot.querySelector("#next")
      .addEventListener("click", () => this.nextSlide());

    this.shadowRoot.querySelectorAll(".indicators span").forEach(dot => {
      dot.addEventListener("click", (e) => {
        this.index = parseInt(e.target.dataset.index);
        this.updateSlide();
      });
    });
  }

  updateSlide() {
    const slides = this.shadowRoot.querySelector(".slides");
    slides.style.transform = `translateX(-${this.index * 100}%)`;

    const dots = this.shadowRoot.querySelectorAll(".indicators span");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === this.index);
    });
  }

  prevSlide() {
    this.index = (this.index - 1 + this.cars.length) % this.cars.length;
    this.updateSlide();
  }

  nextSlide() {
    this.index = (this.index + 1) % this.cars.length;
    this.updateSlide();
  }
}

customElements.define("image-carousel", ImageCarousel);