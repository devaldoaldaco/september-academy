const $ = (s) => document.querySelector(s);

const cajaEstado = $("#estado");
const seleccionarTipo = $("#seleccionarTipo");
const cuadricula = $("#cuadricula");
const tarjeta = $("#tarjeta");
const imagen = $("#imagen");
const nombre = $("#nombre");
const subtitulo = $("#subtitulo");
const etiquetasPokemon = $("#etiquetasPokemon");
const hp = $("#hp"), ataque = $("#ataque"), defensa = $("#defensa"),
      ataqueEsp = $("#ataqueEsp"), defensaEsp = $("#defensaEsp"), velocidad = $("#velocidad");

async function pedirApi(endpoint, callback){
  try{
    const res = await fetch(`https://pokeapi.co/api/v2/${endpoint}`);
    if(!res.ok) throw new Error(`Error ${res.status}`);
    const data = await res.json();
    callback(null, data);
  }catch(err){ callback(err); }
}

async function obtenerPokemon(busqueda, cb){
  const q = String(busqueda).trim().toLowerCase();
  if(!q) return cb(new Error("Escribe un nombre o ID."));
  await pedirApi(`pokemon/${encodeURIComponent(q)}`, cb);
}

async function obtenerTipos(cb){
  await pedirApi("type?limit=2000", cb);
}

async function obtenerPorTipo(tipo, cb){
  await pedirApi(`type/${encodeURIComponent(tipo)}`, (err, data) => {
    if(err) return cb(err);
    const lista = data.pokemon?.map(p => p.pokemon.name) || [];
    cb(null, lista);
  });
}

function mostrarEstado(msg){ cajaEstado.textContent = msg || ""; }

function crearEtiqueta(texto){
  const el = document.createElement("span");
  el.className = "etiqueta";
  el.textContent = texto.toUpperCase();
  return el;
}

function mostrarTarjeta(p){
  const art = p.sprites.other?.["official-artwork"]?.front_default || p.sprites.front_default || "";
  imagen.src = art; imagen.alt = `Sprite de ${p.name}`;
  nombre.textContent = p.name.charAt(0).toUpperCase() + p.name.slice(1);
  subtitulo.textContent = `#${p.id} • ${(p.height/10).toFixed(1)} m • ${(p.weight/10).toFixed(1)} kg`;
  etiquetasPokemon.innerHTML = "";
  p.types.forEach(t => etiquetasPokemon.appendChild(crearEtiqueta(t.type.name)));
  const get = (k) => p.stats.find(s => s.stat.name===k)?.base_stat ?? "—";
  hp.textContent = get("hp");
  ataque.textContent = get("attack");
  defensa.textContent = get("defense");
  ataqueEsp.textContent = get("special-attack");
  defensaEsp.textContent = get("special-defense");
  velocidad.textContent = get("speed");
  tarjeta.hidden = false;
}

function construirCuadricula(n){
  cuadricula.innerHTML = '';
  for (let i = 0; i < n; i++){
    const fig = document.createElement('figure');
    fig.className = 'casilla';
    const img = document.createElement('img');
    img.alt = '';
    fig.appendChild(img);
    cuadricula.appendChild(fig);
  }
}

function llenarCuadricula(nombres){
  const total = Math.min(30, nombres.length);
  construirCuadricula(total);
  const casillas = Array.from(cuadricula.querySelectorAll('.casilla'));
  nombres.slice(0,total).forEach((n, idx) => {
    obtenerPokemon(n, (err, p) => {
      if (err || !p) return;
      const img = casillas[idx].querySelector('img');
      const art = p.sprites.other?.["official-artwork"]?.front_default || p.sprites.front_default || "";
      img.src = art; img.alt = n;
      setTimeout(()=> casillas[idx].classList.add("mostrar"), idx*60);
      casillas[idx].addEventListener("click", ()=> mostrarTarjeta(p));
    });
  });
}

document.getElementById("barra").addEventListener("submit", (e) => {
  e.preventDefault();
  const q = $("#entrada").value;
  mostrarEstado("Buscando…");
  obtenerPokemon(q, (err, data) => {
    if(err){ mostrarEstado("⚠ " + err.message); tarjeta.hidden = true; return; }
    mostrarTarjeta(data);
    mostrarEstado("Listo ✅");
  });
});

seleccionarTipo.addEventListener("change", async (e) => {
  const t = e.target.value;
  if(!t){ cuadricula.innerHTML=""; mostrarEstado("Selecciona un tipo o busca un Pokémon."); return; }
  mostrarEstado(`Cargando Pokémon de tipo ${t}…`);
  await obtenerPorTipo(t, (err, lista) => {
    if(err){ mostrarEstado("⚠ No se pudo cargar el tipo."); return; }
    llenarCuadricula(lista);
    mostrarEstado(`Mostrando ${Math.min(30, lista.length)} Pokémon de tipo ${t}.`);
  });
});

(async function iniciar(){
  await obtenerTipos((err, data) => {
    if(err) return;
    const tipos = data.results || [];
    tipos.filter(t => !/unknown|shadow/.test(t.name))
         .sort((a,b)=>a.name.localeCompare(b.name))
         .forEach(t => {
           const opt = document.createElement("option");
           opt.value = t.name; opt.textContent = t.name.toUpperCase();
           seleccionarTipo.appendChild(opt);
         });
  });
  mostrarEstado("Selecciona un tipo o busca por nombre/ID.");
})();