const nombre = "Carlos Franco";
const nombreSolo = "Carlos";
const apellido = "Franco";
const cadenaBase = "  JavaScript es increíble.  ";
const frase = "hoy es un gran día";
const letraAContar = "ª";
const celsius = 25;
const kilometros = 10;
const a = 12, b = 5;
const n = 7;
const base = 8, altura = 3;
const radio = 4;
const lado = 6;
const n1 = 8, n2 = 5, n3 = 10;

function runAll() {
  console.clear();

  console.log("STRINGS ");
  console.log("1) Hola:", `Hola, ${nombre}.`);
  console.log("2) Nombre + apellido:", nombreSolo + " " + apellido);
  console.log("3) Longitud:", `"Programación".length = ${"Programación".length}`);
  console.log("4) Mayúsculas:", cadenaBase.toUpperCase());
  console.log("5) Minúsculas:", cadenaBase.toLowerCase());
  console.log("6) Primera letra:", "Javascript".charAt(0));
  console.log("7) Última letra:", "Javascript".charAt("Javascript".length - 1));
  console.log("8) substring/slice:", (() => {
    const cad = "Desarrollo Web";
    return `substring(0,10)="${cad.substring(0,10)}", slice(-3)="${cad.slice(-3)}"`;
  })());
  console.log("9) Reemplazar:", "Me gusta JavaScript".replace("JavaScript","TypeScript"));
  console.log("10) Contiene palabra:", "Aprender JS es divertido".includes("JS"));
  console.log("11) split:", "uno dos tres cuatro".split(" "));
  console.log("12) trim:", `"${cadenaBase.trim()}"`);
  console.log("13) repeat:", "Hey! ".repeat(3));
  console.log("14) Capitalizar:", frase.charAt(0).toUpperCase() + frase.slice(1));
  console.log("15) Contar letra:", (() => {
    const s = frase.toLowerCase(), target = letraAContar.toLowerCase();
    let count = 0;
    for (const ch of s) if (ch === target) count++;
    return `La letra "${letraAContar}" aparece ${count} veces`;
  })());

  console.log("NÚMEROS");
  console.log("1) Suma:", `${a}+${b}=${a+b}`);
  console.log("2) Resta:", `${a}-${b}=${a-b}`);
  console.log("3) Multiplicación:", `${a}*${b}=${a*b}`);
  console.log("4) División:", `${a}/${b}=${a/b}`);
  console.log("5) Módulo:", `${a}%${b}=${a%b}`);
  console.log("6) Cuadrado:", `${n}^2=${n**2}`);
  console.log("7) Área rectángulo:", `base=${base}, altura=${altura}, área=${base*altura}`);
  console.log("8) Área círculo:", `π·r² con r=${radio} = ${Math.PI*radio*radio}`);
  console.log("9) Perímetro cuadrado:", `4·lado=${lado*4}`);
  console.log("10) Celsius→Fahrenheit:", `${celsius}°C = ${(celsius*9/5+32).toFixed(2)}°F`);
  console.log("11) Km→Millas:", `${kilometros} km = ${(kilometros*0.621371).toFixed(3)} mi`);
  console.log("12) Promedio:", `(${n1}+${n2}+${n3})/3 = ${(n1+n2+n3)/3}`);
  console.log("13) Doble:", `2·${n}=${n*2}`);
  console.log("14) Triple:", `3·${n}=${n*3}`);
  console.log("15) Cuadrado y cubo:", `${n}^2=${n**2}, ${n}^3=${n**3}`);
}

document.getElementById("runAll").addEventListener("click", runAll);