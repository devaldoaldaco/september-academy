class MiComponente extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
    <style>
.carrousel{
display: flex;
align-items: center;
justify-content: center;
}

.img-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
}

.img{
  width:50vw;
  height: 50vh;
  border-radius: 15px;
  margin: 5px;
}

.puntos{
  display: flex;
  justify-content: center;
  font-size: 2rem;
}

.puntos .bold{
  font-weight: 1000;
  margin-left: 10px;
  margin-right: 10px;
  color: black;
}

.flecha-atras:hover{
  cursor: pointer;
  opacity: 0.5;
}

.flecha-adelante:hover{
  cursor: pointer;
  opacity: 0.5;
}
    </style>

      <div class="carrousel">
    <div class="flecha-atras">
      <img src="skip-backward-circle.svg" id="flecha-atras" alt="Atras">
    </div>

<div class="img-container">
<div id="img">
  <img class="img" src="/img1.jpeg" alt="Paisaje">
</div>

</div>
<div class="flecha-adelante">
<img src="skip-forward-circle.svg" id="flecha-adelante" alt="Adelante">
</div>
</div>
<div class="puntos" id="puntos"></div>
    `;
    let imagenes = [
      {
        "url": "/img1.jpeg"
      },
      {
        "url": "/img2.jpg"
      },
      {
        "url": "/img3.jpg"
      }
    ]

    let atras = shadow.getElementById("flecha-atras");
    let adelante = shadow.getElementById("flecha-adelante");
    let img = shadow.getElementById("img");
    let puntos = shadow.getElementById("puntos");
    let actual = 0


    carrousel()

    atras.addEventListener('click', function () {
      actual = actual - 1

      if (actual == -1) {
        actual = imagenes.length - 1;
      }

      img.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="Paisaje">`

      carrousel()
    });

    adelante.addEventListener('click', function () {
      actual = actual + 1;
      if (actual == imagenes.length) {
        actual = 0
      }

      img.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="Paisaje">`

      carrousel()
    });

    function carrousel() {
      puntos.innerHTML = ""
      for (var i = 0; i < imagenes.length; i++) {
        if (i == actual) {
          puntos.innerHTML += '<p class= "bold">.<p>'
        } else {
          puntos.innerHTML += '<p>.<p>'

        }
      }
      ocultar(actual);
      mostrar(actual);
    }

    function mostrar(actual) {
      if (actual == 2) {
        shadow.getElementById("flecha-adelante").style.display = "none"
      } else if (actual) {
        shadow.getElementById("flecha-adelante").style.display = "block"
      }
    }

    function ocultar(actual) {
      if (actual == 0) {
        shadow.getElementById("flecha-atras").style.display = "none";
      } else if (actual != 0) {
        shadow.getElementById("flecha-atras").style.display = "block"
      }
    }
  }
}

customElements.define('mi-componente', MiComponente);

