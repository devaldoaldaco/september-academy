/*						
Ejercicios números
1. Declara dos variables numéricas y calcula la suma.

*/
function ejer1() {
	let a = document.querySelector('#ejer1-a').value;
	let b = document.querySelector('#ejer1-b').value;
	try {
		//console.log(a);
		//console.log(typeof(a));
		a = parseInt(a);
		b = parseInt(b);
		//console.log(typeof(b));

		let res = document.querySelector('#res1');

		res.textContent = (a + b);

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}
/*
	2.	Declara dos variables numéricas y calcula la resta.
	*/
function ejer2() {
	let a = document.querySelector('#ejer2-a').value;
	let b = document.querySelector('#ejer2-b').value;
	try {
		//console.log(a);
		//console.log(typeof(a));
		a = parseInt(a);
		b = parseInt(b);
		//console.log(typeof(b));

		let res = document.querySelector('#res2');

		res.textContent = (a - b);

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}

/*
	3.	Declara dos variables numéricas y calcula la multiplicación.

	*/
function ejer3() {
	let a = document.querySelector('#ejer3-a').value;
	let b = document.querySelector('#ejer3-b').value;
	try {
		//console.log(a);
		//console.log(typeof(a));
		a = parseInt(a);
		b = parseInt(b);
		//console.log(typeof(b));

		let res = document.querySelector('#res3');

		res.textContent = (a * b);

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}


/*
4.	Declara dos variables numéricas y calcula la división.

*/
function ejer4() {
	let a = document.querySelector('#ejer4-a').value;
	let b = document.querySelector('#ejer4-b').value;
	try {
		//console.log(a);
		//console.log(typeof(a));
		a = parseInt(a);
		b = parseInt(b);
		//console.log(typeof(b));

		let res = document.querySelector('#res4');

		res.textContent = (a / b);

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}

/*
5.	Declara dos variables numéricas y calcula el resto(módulo) de la división.

*/
function ejer5() {
	let a = document.querySelector('#ejer5-a').value;
	let b = document.querySelector('#ejer5-b').value;
	try {
		//console.log(a);
		//console.log(typeof(a));
		a = parseInt(a);
		b = parseInt(b);
		//console.log(typeof(b));

		let res = document.querySelector('#res5');

		res.textContent = (a % b);

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}
/*
6.	Declara una variable y calcula su cuadrado.

*/
function ejer6() {
	let a = document.querySelector('#ejer6-a').value;
	try {
		//console.log(a);
		//console.log(typeof(a));
		a = parseInt(a);

		let res = document.querySelector('#res6');

		res.textContent = (a * a);

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}
/*
7.	Calcula el área de un rectángulo con base y altura guardadas en variables.
*/
function ejer7() {
	let a = document.querySelector('#ejer7-a').value;
	let b = document.querySelector('#ejer7-b').value;
	try {
		//console.log(a);
		//console.log(typeof(a));
		a = parseInt(a);
		b = parseInt(b);
		//console.log(typeof(b));

		let res = document.querySelector('#res7');

		res.textContent = (a * b);

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}
/*
8.	Calcula el área de un círculo usando el radio guardado en una variable.

*/
function ejer8() {
	let a = document.querySelector('#ejer8-a').value;
	try {
		//console.log(a);
		//console.log(typeof(a));
		a = parseInt(a);

		let res = document.querySelector('#res8');

		res.textContent = (Math.PI * (a * a));

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}

/*
9.	Calcula el perímetro de un cuadrado usando una variable para el lado.

*/
function ejer9() {
	let a = document.querySelector('#ejer9-a').value;
	try {
		//console.log(a);

		a = parseInt(a);

		let res = document.querySelector('#res9');
		//console.log(res);
		res.textContent = (a + a + a + a);

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}


/*
10.	Convierte una temperatura en Celsius a Fahrenheit usando variables.

*/
function ejer10() {
	let a = document.querySelector('#ejer10-a').value;
	try {
		//console.log(a);

		a = parseInt(a);

		let res = document.querySelector('#res10');
		//console.log(res);
		res.textContent = ((a - 32) / 1.8);

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}

/*
11.	Convierte una distancia en kilómetros a millas usando variables.

*/
function ejer11() {
	let a = document.querySelector('#ejer11-a').value;
	try {
		//console.log(a);

		a = parseInt(a);

		let res = document.querySelector('#res11');
		//console.log(res);
		res.textContent = (a * 0.621371);

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}

/*
12.	Calcula el promedio de tres números guardados en variables.

*/

function ejer12() {
	let a = document.querySelector('#ejer12-a').value;
	let b = document.querySelector('#ejer12-b').value;
	let c = document.querySelector('#ejer12-c').value;
	try {
		//console.log(a);

		a = parseInt(a);
		b = parseInt(b);
		c = parseInt(c);

		let res = document.querySelector('#res12');
		//console.log(res);
		res.textContent = ((a + b + c) / 3);

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}


/*
13.	Declara una variable y calcula su doble.

*/
function ejer13() {
	let a = document.querySelector('#ejer13-a').value;
	try {
		//console.log(a);

		a = parseInt(a);

		let res = document.querySelector('#res13');
		//console.log(res);
		res.textContent = (a * 2);

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}

/*
14.	Declara una variable y calcula su triple.
*/
function ejer14() {
	let a = document.querySelector('#ejer14-a').value;
	try {
		//console.log(a);

		a = parseInt(a);

		let res = document.querySelector('#res14');
		//console.log(res);
		res.textContent = (a * 3);

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}

/*
15.	Declara una variable y calcula su cuadrado y cubo.
*/
function ejer15() {
	let a = document.querySelector('#ejer15-a').value;
	try {
		//console.log(a);

		a = parseInt(a);

		let res = document.querySelector('#res15');
		//console.log(res);
		res.textContent = 'cuadrado= ' + (a * a) + ' y cubo= ' + (a * a * a);

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}

/*
Ejercicios strings 
1.	Declara una variable con tu nombre y muestra un mensaje que diga: Hola, [nombre].
*/
function ejer16() {
	let a = document.querySelector('#ejer16-a').value;
	try {
		//console.log(a);

		let res = document.querySelector('#res16');
		//console.log(res);
		res.textContent = 'Hola , ' + (a);

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}
/*
	2.	Declara dos variables con tu nombre y apellido, y únelas en una sola cadena.
*/
function ejer17() {
	let a = document.querySelector('#ejer17-a').value;
	let b = document.querySelector('#ejer17-b').value;
	try {
		//console.log(a);

		let res = document.querySelector('#res17');
		//console.log(res);
		res.textContent = a + ' ' + b;

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}
/*
	3.	Declara una cadena y muestra cuántos caracteres tiene.

*/
function ejer18() {
	let a = document.querySelector('#ejer18-a').value;
	try {
		let res = document.querySelector('#res18');

		res.textContent = 'Su longitud de la cadena es de ' + a.length +
			' y sus caracteres son: ';
		console.log(res);

		for (let i = 0; i < a.length; i++) {
			res.textContent += a[i] + ' ,';
		}

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}
/*
	4.	Declara una cadena y conviértela a mayúsculas.

	*/
function ejer19() {
	let a = document.querySelector('#ejer19-a').value;
	try {
		let res = document.querySelector('#res19');

		res.textContent = a.toUpperCase();

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}

/*
5.	Declara una cadena y conviértela a minúsculas.

*/
function ejer20() {
	let a = document.querySelector('#ejer20-a').value;
	try {
		let res = document.querySelector('#res20');

		res.textContent = a.toLowerCase();

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}

/*
6.	Declara una cadena y muestra la primera letra.
*/
function ejer21() {
	let a = document.querySelector('#ejer21-a').value;
	try {
		let res = document.querySelector('#res21');

		res.textContent = 'Primer letra de la cadena --> ' + a[0];

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}
/*
7.	Declara una cadena y muestra la última letra.

*/
function ejer22() {
	let a = document.querySelector('#ejer22-a').value;
	try {
		let res = document.querySelector('#res22');
		let longitud = a.length;

		res.textContent = 'Ultima letra de la cadena --> ' + a[longitud - 1];

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}

/*
8.	Declara una cadena y extrae una parte usando substring o slice.

*/
function ejer23() {
	let a = document.querySelector('#ejer23-a').value;
	try {
		let res = document.querySelector('#res23');
		let longitud = a.length;

		res.textContent = 'La ultima mitad de la cadena --> ' + a.substring((longitud / 2), (longitud));

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}
/*
9.	Declara una cadena y reemplaza una palabra por otra.
*/
function ejer24() {
	let a = document.querySelector('#ejer24-a').textContent;
	let b = document.querySelector('#ejer24-b').value;
	try {

		//console.log(a, b);

		a = a.replace('motos', b);

		let res = document.querySelector('#res24');

		res.textContent = a;

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}

/*

10.	Declara una cadena y verifica si contiene cierta palabra.

*/

function ejer25() {

	try {

		let a = document.querySelector('#ejer25-a').textContent;
		let b = document.querySelector('#ejer25-b').value;
		//console.log(a, b);
		let res = document.querySelector('#res25');

		if(a.includes(b)){
			res.textContent = 'Si incluye la palabra '+b;

		}else{
			res.textContent = 'No incluye la palabra '+b;
		}

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}


/*
	11.	Declara una cadena y separa las palabras en un arreglo usando split.

	*/
function ejer26() {

	try {

		let a = document.querySelector('#ejer26-a').value;
		
		//console.log(a, b);
		let res = document.querySelector('#res26');

		let palabras= a.split(' ');

		for(let i=0;i<palabras.length;i++){
			res.textContent+= (i+1)+' --> '+palabras[i]+', ';
		}

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}
	/*
	12.	Declara una cadena y elimina los espacios al inicio y al final.

	*/
function ejer27() {

	try {

		let a = document.querySelector('#ejer27-a').value;
		
		//console.log(a, b);
		let res = document.querySelector('#res27');

		
		res.textContent= a.trim();
		

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}

	/*
	13.	Declara una cadena y repite el texto varias veces.

	*/
function ejer28() {

	try {

		let a = document.querySelector('#ejer28-a').value;
		
		//console.log(a, b);
		let res = document.querySelector('#res28');

		let i=0;
		while(i<3){
			res.textContent += a +' '; 
			i++;
		}
		

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}

	/*
	14.	Declara una cadena y convierte la primera letra en mayúscula.

	*/
function ejer29() {

	try {

		let a = document.querySelector('#ejer29-a').value;
		
		
		let res = document.querySelector('#res29');

		
		res.textContent =a.charAt(0).toUpperCase()+a.slice(1); 
		
		

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}
	/*
	15.	Declara una cadena con una frase y cuenta cuántas veces aparece una letra.
	*/
	function ejer30() {

	try {

		let a = document.querySelector('#ejer30-a').value;
		
		
		let res = document.querySelector('#res30');

		let x=0;

		for(let i=0;i<a.length;i++){
			if(a[i]==='a'){
				x++;
			}
		}
		res.textContent ='Aperece la letra a '+x+' veces'; 

		

	} catch (error) {
		alert('Ocurrio un error ', error)
	}
}