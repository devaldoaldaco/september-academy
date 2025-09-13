Array.prototype.at(index)

Qué es: Devuelve el elemento en la posición indicada. Soporta índices negativos.

Cómo funciona:

0 = primer elemento

-1 = último elemento

Ejemplo:

const nums = [10, 20, 30, 40];
console.log(nums.at(1));   // 20
console.log(nums.at(-1));  // 40

Array.prototype.concat(...arrays)

Qué es: Devuelve un nuevo array combinando el original con otros.

Ejemplo:

const a = [1, 2];
const b = [3, 4];
console.log(a.concat(b)); // [1, 2, 3, 4]

Array.prototype.copyWithin(target, start, end)

Qué es: Copia una parte del array dentro del mismo, sin cambiar el tamaño.

Ejemplo:

let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3); 
console.log(arr); // [4, 5, 3, 4, 5]

Array.prototype.entries()

Qué es: Devuelve un iterador con pares [índice, valor].

Ejemplo:

const arr = ['a', 'b'];
for (const [i, val] of arr.entries()) {
  console.log(i, val);
}
// 0 'a'
// 1 'b'

Array.prototype.every(callback)

Qué es: Devuelve true si todos cumplen la condición.

Ejemplo:

const nums = [2, 4, 6];
console.log(nums.every(n => n % 2 === 0)); // true

Array.prototype.fill(valor, inicio, fin)

Qué es: Rellena el array con un valor desde inicio hasta fin.

Ejemplo:

const arr = [1, 2, 3, 4];
arr.fill(0, 1, 3);
console.log(arr); // [1, 0, 0, 4]

Array.prototype.filter(callback)

Qué es: Devuelve un nuevo array con los elementos que cumplen la condición.

Ejemplo:

const nums = [1, 2, 3, 4];
const pares = nums.filter(n => n % 2 === 0);
console.log(pares); // [2, 4]

Array.prototype.find(callback)

Qué es: Devuelve el primer elemento que cumple la condición.

Ejemplo:

const nums = [5, 12, 8];
console.log(nums.find(n => n > 10)); // 12

Array.prototype.findIndex(callback)

Qué es: Devuelve el índice del primer elemento que cumpla.

Ejemplo:

const nums = [5, 12, 8];
console.log(nums.findIndex(n => n > 10)); // 1

Array.prototype.findLast(callback)

Qué es: Devuelve el último elemento que cumpla.

Ejemplo:

const nums = [5, 12, 8, 20];
console.log(nums.findLast(n => n > 10)); // 20

Array.prototype.findLastIndex(callback)

Qué es: Devuelve el índice del último elemento que cumpla.

Ejemplo:

const nums = [5, 12, 8, 20];
console.log(nums.findLastIndex(n => n > 10)); // 3

Array.prototype.flat(depth)

Qué es: "Aplana" arrays anidados hasta la profundidad depth.

Ejemplo:

const arr = [1, [2, [3, [4]]]];
console.log(arr.flat(2)); // [1, 2, 3, [4]]

Array.prototype.flatMap(callback)

Qué es: Mapea y aplana en un solo paso.

Ejemplo:

const arr = [1, 2, 3];
console.log(arr.flatMap(n => [n, n * 2]));
// [1, 2, 2, 4, 3, 6]

Array.prototype.forEach(callback)

Qué es: Itera sobre cada elemento, sin devolver nada.

Ejemplo:

[1, 2, 3].forEach(n => console.log(n * 2));
// 2, 4, 6

Array.prototype.includes(valor)

Qué es: Verifica si un array contiene el valor.

Ejemplo:

console.log([1, 2, 3].includes(2)); // true

Array.prototype.indexOf(valor)

Qué es: Devuelve el índice de la primera aparición, o -1.

Ejemplo:

console.log([1, 2, 3, 2].indexOf(2)); // 1

Array.prototype.join(separador)

Qué es: Une los elementos en un string.

Ejemplo:

console.log(['a', 'b', 'c'].join('-')); // "a-b-c"

Array.prototype.keys()

Qué es: Devuelve un iterador con los índices.

Ejemplo:

const arr = ['a', 'b'];
for (const key of arr.keys()) {
  console.log(key); // 0, 1
}

Array.prototype.lastIndexOf(valor)

Qué es: Devuelve el índice de la última coincidencia.

Ejemplo:

console.log([1, 2, 3, 2].lastIndexOf(2)); // 3

Array.prototype.map(callback)

Qué es: Crea un nuevo array transformando cada elemento.

Ejemplo:

console.log([1, 2, 3].map(n => n * 2)); // [2, 4, 6]

Array.prototype.pop()

Qué es: Quita y devuelve el último elemento.

Ejemplo:

const arr = [1, 2, 3];
console.log(arr.pop()); // 3
console.log(arr);       // [1, 2]

Array.prototype.push(valor)

Qué es: Agrega elementos al final.

Ejemplo:

const arr = [1, 2];
arr.push(3);
console.log(arr); // [1, 2, 3]

Array.prototype.reduce(callback, inicial)

Qué es: Reduce el array a un solo valor acumulando.

Ejemplo:

const sum = [1, 2, 3].reduce((acc, n) => acc + n, 0);
console.log(sum); // 6

Array.prototype.reduceRight(callback, inicial)

Qué es: Igual que reduce, pero de derecha a izquierda.

Ejemplo:

const arr = [[0, 1], [2, 3], [4, 5]];
const result = arr.reduceRight((acc, val) => acc.concat(val), []);
console.log(result); // [4, 5, 2, 3, 0, 1]

Array.prototype.reverse()

Qué es: Invierte el array en su lugar.

Ejemplo:

const arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]

Array.prototype.shift()

Qué es: Quita y devuelve el primer elemento.

Ejemplo:

const arr = [1, 2, 3];
console.log(arr.shift()); // 1
console.log(arr); // [2, 3]

Array.prototype.slice(inicio, fin)

Qué es: Devuelve una copia parcial.

Ejemplo:

console.log([1, 2, 3, 4].slice(1, 3)); // [2, 3]

Array.prototype.some(callback)

Qué es: Devuelve true si al menos uno cumple.

Ejemplo:

console.log([1, 3, 5].some(n => n % 2 === 0)); // false

Array.prototype.sort(callback)

Qué es: Ordena los elementos (por defecto alfabéticamente).

Ejemplo:

const nums = [4, 1, 3];
nums.sort((a, b) => a - b);
console.log(nums); // [1, 3, 4]

Array.prototype.splice(inicio, cantidad, ...items)

Qué es: Añade, reemplaza o elimina elementos.

Ejemplo:

const arr = [1, 2, 3];
arr.splice(1, 1, 99);
console.log(arr); // [1, 99, 3]

Array.prototype.toLocaleString()

Qué es: Convierte el array a string usando la localización.

Ejemplo:

const arr = [123456.789];
console.log(arr.toLocaleString('de-DE')); // "123.456,789"

Array.prototype.toReversed()

Qué es: Devuelve una copia invertida, sin modificar el original.

Ejemplo:

const arr = [1, 2, 3];
console.log(arr.toReversed()); // [3, 2, 1]
console.log(arr); // [1, 2, 3]

Array.prototype.toSorted(callback)

Qué es: Devuelve una copia ordenada.

Ejemplo:

const arr = [3, 1, 2];
console.log(arr.toSorted()); // [1, 2, 3]
console.log(arr); // [3, 1, 2]

Array.prototype.toSpliced(inicio, cantidad, ...items)

Qué es: Igual que splice, pero devuelve una copia.

Ejemplo:

const arr = [1, 2, 3];
console.log(arr.toSpliced(1, 1, 99)); // [1, 99, 3]
console.log(arr); // [1, 2, 3]

Array.prototype.toString()

Qué es: Convierte el array en string.

Ejemplo:

console.log([1, 2, 3].toString()); // "1,2,3"

Array.prototype.unshift(valor)

Qué es: Agrega elementos al inicio.

Ejemplo:

const arr = [2, 3];
arr.unshift(1);
console.log(arr); // [1, 2, 3]

Array.prototype.values()

Qué es: Devuelve un iterador con los valores.

Ejemplo:

const arr = ['a', 'b'];
for (const val of arr.values()) {
  console.log(val); // 'a', 'b'
}

Array.prototype.with(index, valor)

Qué es: Devuelve una copia del array con el valor reemplazado en ese índice.

Ejemplo:

const arr = [1, 2, 3];
console.log(arr.with(1, 99)); // [1, 99, 3]

Array.prototype[@@iterator]()

Qué es: El iterador por defecto de los arrays (igual que values()).

Ejemplo:

const arr = [10, 20];
for (const val of arr[Symbol.iterator]()) {
  console.log(val); // 10, 20
}

 Propiedades de instancia
Array.prototype.length

Qué es: Devuelve o define la longitud del array.

Ejemplo:

const arr = [1, 2, 3];
console.log(arr.length); // 3
arr.length = 2;
console.log(arr); // [1, 2]

Array.prototype[@@unscopables]

Qué es: Controla qué métodos quedan excluidos del with.

No se usa casi nunca en código normal.