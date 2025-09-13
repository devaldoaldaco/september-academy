Resumen de Métodos de Array en JavaScript
1. Acceso y búsqueda

at(index): Permite acceder a un elemento del array en la posición indicada. Si se usa un índice negativo, cuenta desde el final. Ejemplo: array.at(-1) devuelve el último elemento.

includes(valor, fromIndex?): Comprueba si un valor existe en el array. Devuelve true o false.

indexOf(valor, fromIndex?): Retorna el índice de la primera aparición de un valor. Si no lo encuentra, devuelve -1.

lastIndexOf(valor, fromIndex?): Similar a indexOf, pero busca desde el final hacia el inicio.

find(callback): Devuelve el primer elemento que cumpla con la condición definida en el callback. Si ninguno cumple, devuelve undefined.

findIndex(callback): Devuelve el índice del primer elemento que cumpla la condición. Si no encuentra ninguno, devuelve -1.

findLast(callback): Igual que find, pero busca desde el final.

findLastIndex(callback): Igual que findIndex, pero desde el final.

2. Métodos mutadores (modifican el array original)

copyWithin(target, start, end?): Copia una porción del array y la coloca en otra posición dentro del mismo array, sobrescribiendo valores existentes.

fill(value, start?, end?): Rellena el array con un valor estático entre los índices start y end.

pop(): Elimina el último elemento del array y lo devuelve. Modifica el array.

push(...values): Añade uno o más elementos al final del array y devuelve la nueva longitud.

reverse(): Invierte el orden de los elementos del array. Modifica el array original.

shift(): Elimina el primer elemento y lo devuelve. Modifica el array.

unshift(...values): Inserta uno o más elementos al inicio y devuelve la nueva longitud.

sort(compareFunction?): Ordena los elementos del array. Si no recibe función de comparación, ordena como cadenas de texto.

splice(start, deleteCount?, ...items): Añade, reemplaza o elimina elementos a partir de un índice específico. Devuelve los elementos eliminados.

3. Métodos no mutadores (no alteran el array original)

concat(...arraysOrValues): Crea un nuevo array que resulta de unir el array original con otros valores o arrays.

filter(callback): Crea un nuevo array con todos los elementos que cumplan la condición indicada.

map(callback): Devuelve un nuevo array con los resultados de aplicar una función a cada elemento.

slice(start?, end?): Devuelve una porción del array sin modificar el original.

flat(depth?): Devuelve un nuevo array con los sub-arrays aplanados hasta la profundidad indicada.

flatMap(callback): Aplica una función a cada elemento y luego aplana el resultado en un nuevo array.

4. Iteración y evaluación

every(callback): Devuelve true si todos los elementos cumplen la condición, de lo contrario false.

some(callback): Devuelve true si al menos un elemento cumple la condición.

forEach(callback): Ejecuta una función para cada elemento del array. No devuelve nada, se usa para efectos secundarios (ej. imprimir en consola).

reduce(callback, initialValue?): Aplica una función acumuladora de izquierda a derecha, reduciendo el array a un solo valor. Ejemplo: sumar todos los elementos.

reduceRight(callback, initialValue?): Igual que reduce, pero de derecha a izquierda.

5. Iteradores

entries(): Devuelve un iterador con pares [índice, valor] para recorrer el array.

keys(): Devuelve un iterador con los índices de los elementos.

values(): Devuelve un iterador con los valores de los elementos.

6. Conversión a string

join(separator?): Devuelve una cadena de texto con los elementos unidos por el separador indicado.

toString(): Convierte el array en una cadena de texto con elementos separados por comas.

toLocaleString(locale?, options?): Convierte el array en una cadena representando los elementos con formato local (ej. números con separadores o fechas en el idioma configurado).