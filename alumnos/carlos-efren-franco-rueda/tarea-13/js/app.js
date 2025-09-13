const $antes  = document.getElementById('antes');
const $actual = document.getElementById('actual');
const $keys   = document.querySelector('.calcu_botons');

let actual = '0';
let antes  = '';
let oper   = null;
let justoEvaluado = false;

const esNumero = (s) => /^-?\d+(\.\d+)?$/.test(String(s));
const toNum = (s) => Number(s);

function formatea(val) {
  const num = Number(val);
  if (!isFinite(num)) return 'Error';
  return num.toString().slice(0, 14);
}

function refresca() {
  $actual.textContent = actual;
  $antes.textContent  = antes;
}

function clearTodo() {
  actual = '0';
  antes = '';
  oper = null;
  justoEvaluado = false;
  refresca();
}
function clearEntrada() {
  actual = '0';
  refresca();
}
function borrarUno() {
  if (justoEvaluado) return;
  actual = (actual.length > 1) ? actual.slice(0, -1) : '0';
  refresca();
}

function agregaNumero(d) {
  if (justoEvaluado) { actual = d; justoEvaluado = false; refresca(); return; }
  if (actual === '0' && d !== '.') actual = d;
  else actual += d;
  refresca();
}
function punto() {
  if (justoEvaluado) { actual = '0.'; justoEvaluado = false; refresca(); return; }
  if (!actual.includes('.')) {
    actual += (actual === '' ? '0.' : '.');
    refresca();
  }
}

function setOper(op) {
  if (oper && antes !== '' && !justoEvaluado) evaluar();
  oper = op;
  antes = `${actual} ${op}`;
  actual = '0';
  justoEvaluado = false;
  refresca();
}

function factorial(n) {
  if (!Number.isFinite(n) || n < 0 || Math.floor(n) !== n || n > 170) return NaN;
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

function aplicaFuncion(fn) {
  let x = Number(actual);
  let r;
  switch (fn) {
    case 'sin':   r = Math.sin(x); break;
    case 'cos':   r = Math.cos(x); break;
    case 'tan':   r = Math.tan(x); break;
    case 'sqrt':  r = Math.sqrt(x); break;
    case 'pow2':  r = Math.pow(x, 2); break;
    case 'exp':   r = Math.exp(x); break;
    case 'log':   r = Math.log10(x); break;
    case 'ln':    r = Math.log(x); break;
    case 'pi':    r = Math.PI; break;
    case 'e':     r = Math.E; break;
    case 'fact':  r = factorial(Math.round(x)); break;
    case 'pow':
      oper = '^';
      antes = `${actual} ^`;
      actual = '0';
      justoEvaluado = false;
      refresca();
      return;
    case 'negativo':
      if (actual === '0') return;
      actual = actual.startsWith('-') ? actual.slice(1) : `-${actual}`;
      refresca();
      return;
    default:
      return;
  }
  actual = formatea(r);
  justoEvaluado = true;
  refresca();
}

function evaluar() {
  if (!oper || !antes) return;
  const a = Number(antes.split(' ')[0]);
  const b = Number(actual);
  let res;
  switch (oper) {
    case '+': res = a + b; break;
    case '-': res = a - b; break;
    case 'x': res = a * b; break;
    case '÷': res = (b === 0 ? 'Error' : a / b); break;
    case '^': res = Math.pow(a, b); break;
    default: return;
  }
  actual = formatea(res);
  antes = '';
  oper = null;
  justoEvaluado = true;
  refresca();
}

$keys.addEventListener('click', (e) => {
  const btn = e.target.closest('button.butt');
  if (!btn) return;
  const fn = btn.dataset.fn;
  if (/^\d$/.test(fn)) return agregaNumero(fn);
  if (fn === '.') return punto();
  if (fn === 'suma') return setOper('+');
  if (fn === 'resta') return setOper('-');
  if (fn === 'multiplicacion') return setOper('x');
  if (fn === 'divicion') return setOper('÷');
  if (fn === 'igual') return evaluar();
  if (['sin','cos','tan','sqrt','pow2','pow','exp','log','ln','pi','e','fact','negativo'].includes(fn)) {
    return aplicaFuncion(fn);
  }
  if (fn === 'clear-todo') return clearTodo();
  if (fn === 'clear') return clearEntrada();
  if (fn === 'delete') return borrarUno();
});

window.addEventListener('keydown', (e) => {
  const k = e.key;
  if (/\d/.test(k)) return agregaNumero(k);
  if (k === '.') return punto();
  if (k === '+' || k === '-') return setOper(k);
  if (k === '*') return setOper('x');
  if (k === '/') return setOper('÷');
  if (k === 'Enter' || k === '=') { e.preventDefault(); return evaluar(); }
  if (k === 'Backspace') return borrarUno();
  if (k.toLowerCase() === 'c') return clearEntrada();
  if (k.toLowerCase() === 'e') return clearTodo();
});

refresca();