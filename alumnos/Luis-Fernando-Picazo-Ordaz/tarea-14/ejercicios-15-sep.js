// 📌 Variables 
// 1.	Escribe un programa que convierta un número en formato de moneda (ejemplo: 1234567 → $1,234,567.00).
function transformToMoneyFormat(number) {
    let arrayNumber = []
    let finalNumber = ''
    let counter = 0;
    number = number.toString().split('').reverse()

    for (let index = 0; index < number.length; index++) {
        if (!(counter === 3)) {
            arrayNumber.unshift(number[index])
            counter += 1
        } else {
            arrayNumber.unshift(',')
            arrayNumber.unshift(number[index])
            counter = 1
        }
    }
    finalNumber = `$${arrayNumber.join('')}.00`;
    return finalNumber
}

const number = 123456
console.log('\n--------------Ejercicio 1-------------');
console.log(transformToMoneyFormat(number));




// 	2.	Crea un programa que guarde en una variable un texto y cuente cuántas veces aparece cada letra (frecuencia de caracteres).
console.log('\n--------------Ejercicio 2-------------');
function countLettersOf(string) {
    string = string.toLowerCase().replaceAll(" ", "")
    let stringOfMatches = ''

    for (let i = 0; i < string.length; i++) { //ojos
        let matches = 1;
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] === string[j]) {
                matches += 1
            }

        }
        if (!(stringOfMatches.includes(string[i]))) {
            stringOfMatches += `${string[i]}:${matches} `
        }

    }
    return stringOfMatches
}

const string = 'Ojos'
console.log(countLettersOf(string));



// 	3.	Dado un string con fechas en formato "2025-09-15, 2023-02-10, 2024-06-25", conviértelo en un arreglo de objetos con {año, mes, día}.
console.log('\n--------------Ejercicio 3-------------');
function convertDateToObject(date) {
    const arrayDates = date.split(',');
    let newArrayDates = []
    let finalArray = []

    for (let index = 0; index < arrayDates.length; index++) {
        newArrayDates = arrayDates[index].split('-')
        finalArray.push({
            year: `${newArrayDates[0].trim()}`,
            month: `${newArrayDates[1].trim()}`,
            day: `${newArrayDates[2].trim()}`
        })
    }
    return finalArray
}

const date = '2025-09-15, 2023-02-10, 2024-06-25';
console.log(convertDateToObject(date));



// 	4.	Declara una variable con una lista de correos electrónicos en un solo string separados por ; y conviértela en un arreglo limpio y validado.
console.log('\n--------------Ejercicio 4-------------');
function emailsStringToArray(emailsString) {
    return emailsString.split(';')
}

const emails = 'luis@email.com;mario@email.com;laura@email.com';
console.log(emailsStringToArray(emails));



// 📌 Objetos
// 	5.	Modela un objeto que represente una playlist de música. Debe tener canciones (título, artista, duración) y métodos para:
// 	•	Agregar canciones
// 	•	Eliminar canciones
// 	•	Calcular la duración total de la playlist

console.log('\n--------------Ejercicio 5-------------');

const playlist = {
    title: 'Canciones Favoritas',
    songs: [
        {
            title: 'canción 1',
            artist: 'Juan',
            duration: 3
        },
        {
            title: 'canción 2',
            artist: 'Mario',
            duration: 7
        },
        {
            title: 'canción 3',
            artist: 'Karla',
            duration: 2
        },
    ],

    addSong: function (title, artist, duration) {
        playlist.songs.push({
            title: title,
            artist: artist,
            duration: duration
        })
    },
    deleteSong: function (songTitle) {
        playlist.songs.forEach((song, index) => {
            if (song.title === songTitle) {
                playlist.songs.splice(index, 1)
            }
        });
    },
    totalDuration: function () {
        let finalDuration = 0;
        playlist.songs.forEach(song => {
            finalDuration += song.duration
        });
        return finalDuration
    }
}
playlist.addSong('Nueva cancion', 'Armando', 8)
console.log(playlist.totalDuration() + ' minutos');
playlist.deleteSong('canción 1')
console.log(playlist);






// 	6.	Crea un objeto que represente una biblioteca con libros. Cada libro debe tener un estado (disponible o prestado). Agrega métodos para:
// 	•	Prestar un libro
// 	•	Devolverlo
// 	•	Mostrar la lista de libros disponibles
console.log('\n--------------Ejercicio 6-------------');

const library = {
    books: [
        {
            id: 1,
            title: 'libro 1',
            _status: 'disponible'
        },
        {
            id: 2,
            title: 'libro 2',
            _status: 'prestado'
        },
        {
            id: 3,
            title: 'libro 3',
            _status: 'disponible'
        },
    ],
    getBook: function (bookId) {
        library.books.forEach((book) => {
            if (book.id === bookId) {
                book._status = 'prestado'
            }
        });
    },
    returnBook: function (bookId) {
        library.books.forEach((book) => {
            if (book.id === bookId) {
                book._status = 'disponible'
            }
        });
    },
    showBooks: function () {
        const availableBooks = library.books.filter((book) => book._status === 'disponible')
        console.log('Libros disponibles: ');
        availableBooks.forEach(book => {
            console.log(book.title);
        });

    }
}

library.getBook(1)
library.returnBook(1)
library.showBooks()



// 	7.	Genera un objeto que represente un carrito de compras. Además de calcular el total, debe aplicar descuentos si el total supera cierto monto.

console.log('\n--------------Ejercicio 7-------------');

const cart = {
    products: [
        {
            _name: 'producto 1',
            price: 500,
        },
        {
            _name: 'producto 2',
            price: 200,
        },
        {
            _name: 'producto 3',
            price: 100,
        },
        {
            _name: 'producto 4',
            price: 70,
        }
    ],
    getTotalPrice: function () {
        let result = 0;
        let finalPrice;
        cart.products.forEach((product) => {
            result += product.price
        })
        finalPrice = this.makeDiscount(result)
        console.log(`El costo total es de: $${finalPrice}`);
        return
    },
    makeDiscount: function (totalPrice) {
        const discount = 0.15
        let finalPrice = 0
        if (totalPrice > 500) {
            finalPrice = totalPrice - (totalPrice * discount)
            return finalPrice
        }
        return totalPrice
    }
}

cart.getTotalPrice()



// 	8.	Crea un objeto que represente un sistema bancario simple con usuarios y cuentas. Debe tener métodos para:
// 	•	Depositar
// 	•	Retirar
// 	•	Transferir dinero entre cuentas

console.log('\n--------------Ejercicio 8-------------');


const bankSystem = {
    users: {
        '10101': {
            _name: 'Karla',
            money: 10
        },
        '20201': {
            _name: 'Luis',
            money: 250
        },
        '30301': {
            _name: 'Ernesto',
            money: 1000
        },
        '40401': {
            _name: 'Pedro',
            money: 37
        },
    },
    makeDeposit: function (account, money) {
        if (!this.findAccount(account)) {
            return false
        }
        bankSystem.users[account].money += money
        console.log('Deposito exitoso');

        return true
    },
    takeMoney: function (account, money) {
        if (!this.findAccount(account)) {
            return false
        }
        const currentMoney = bankSystem.users[account].money
        if (currentMoney < money) {
            console.log('No se puede retirar más dinero del que tienes en la cuenta');
            return false
        }
        bankSystem.users[account].money -= money
        console.log('retiro exitoso');
        return true
    },
    sendMoney: function (account, accountToSend, money) {
        const takeMoney = this.takeMoney(account, money);
        if (!takeMoney) {
            return
        }
        const makeDeposit = this.makeDeposit(accountToSend, money);
        if (!makeDeposit) {
            bankSystem.users[account].money += money
            return
        }
        console.log('Transferencia realizada con éxito');
        return
    },
    findAccount: function (account) {
        const keys = Object.keys(bankSystem.users)
        if (keys.includes(account)) {
            return true
        }
        console.log('Cuenta no encontrada');
        return false
    },
}
console.log(bankSystem.users);

// bankSystem.makeDeposit('20201', 5)
// bankSystem.takeMoney('30301', 150)
bankSystem.sendMoney('30301', '10101', 500)

console.log(bankSystem.users);



// 📌 Funciones
// 	9.	Crea una función que reciba un arreglo de números y devuelva un objeto con estadísticas: {max, min, promedio, suma}.

console.log('\n--------------Ejercicio 9-------------');

function stadisticsOf(numbersArray) {
    let stadisticsObject = {}
    const max = Math.max(...numbersArray)
    const min = Math.min(...numbersArray)
    const add = numbersArray.reduce((acc, number) => acc + number, 0)
    const average = add / numbersArray.length

    stadisticsObject.max = max
    stadisticsObject.min = min
    stadisticsObject.add = add
    stadisticsObject.average = average
    return stadisticsObject
}
const numbers = [1, 2, 3, 4, 5]
console.log(stadisticsOf(numbers));


// 	10.	Escribe una función que valide si una cadena es un palíndromo (ignorando mayúsculas, espacios y acentos).
console.log('\n--------------Ejercicio 10-------------');

function isPalindrome(string) {
    let reverseString = string.toLowerCase().replaceAll(" ", "").split('').reverse().join('')
    if (string.toLowerCase().replaceAll(" ", "") === reverseString) {
        console.log(`"${string}" es un palindromo`);
    } else {
        console.log(`"${string}" NO es un palinidromo`);
    }
    return
}
const string1 = 'Ojo ojo'
isPalindrome(string1)


// 	11.	Escribe una función que reciba una lista de personas ({nombre, edad}) y devuelva la persona de mayor edad.
console.log('\n--------------Ejercicio 11-------------');

function getOlderPerson(personsList) {
    let ageArray = []
    for (const element of personsList) {
        ageArray.push(element.age)
    }
    return Math.max(...ageArray)
}

const personsList = [
    {
        _name: 'Luis',
        age: 24
    },
    {
        _name: 'María',
        age: 48
    },
    {
        _name: 'Lorena',
        age: 19
    },
    {
        _name: 'Raul',
        age: 34
    },
]

console.log(getOlderPerson(personsList));


// 	12.	Implementa una función que convierta números romanos a enteros ("XIV" → 14). 

console.log('\n--------------Ejercicio 12-------------');
// Lo intenté pero no pude resolverlo :C
function romanNumbersToDecimal(number) {
    let value = 0
    const romanNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    for (const element of number) {
        for (let i = 0; i < Object.keys(romanNumbers).length; i++) {
            if (element === Object.keys(romanNumbers)[i]) {
                value += romanNumbers[element]
            }

        }
    }
    return value

}
console.log(romanNumbersToDecimal('XX'));




// 	14.	Implementa una función que procese una lista de números en 3 pasos:

// 	•	Filtrar (callback)
// 	•	Transformar (callback)
// 	•	Reducir a un valor final (callback)

console.log('\n--------------Ejercicio 14-------------');


function processNumbers(numbersList, filterCallback, transformCallback, reduceCallback) {
    let numbersFilteredList = []
    for (const number of numbersList) {
        if (filterCallback(number)) {
            numbersFilteredList.push(number)
        }
    }
    console.log(`Numeros filtrados: ${numbersFilteredList}`);
    let numbersTransformedList = []
    let resultTransform = 0
    for (const number of numbersFilteredList) {
        resultTransform = transformCallback(number)
        numbersTransformedList.push(resultTransform)
    }
    console.log(`Numeros transformados: ${numbersTransformedList}`);
    let acc = numbersTransformedList[0]
    let = 0
    for (let i = 1; i < numbersTransformedList.length; i++) {
        acc = reduceCallback(acc, numbersTransformedList[i])
    }
    console.log(`Reducción: ${acc}`);

}
const numbersList = [8, 3, 2, 5, 7, 10, 15]
processNumbers(numbersList, (number) => number > 5, (number) => number * 2, (acc, number) => acc + number)

// 📌 Callbacks
// 	13.	Crea una función que simule una operación asíncrona (como consultar una base de datos) usando setTimeout. La función debe recibir un callback que maneje éxito y error.



function requestData(callback, success = true) {
    const data = {
        numbers: [1, 2, 3, 4, 5],
        strings: ['abc', 'def', 'fgh'],
        days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
    }

    setTimeout(() => {
        console.log('\n--------------Ejercicio 13-------------');

        return callback(data, success)
    }, 5000);
}

requestData((data, success) => {
    if (success === false) {
        console.log('Error al consultar los datos');
        return
    }
    for (const day of data.days) {
        console.log(day);
    }
    return
})

// 	15.	Escribe una función que simule un sistema de login: recibe usuario y contraseña y usa un callback para responder si la validación fue exitosa o fallida.
console.log('\n--------------Ejercicio 15-------------');


function login(user, password, callback) {
    if (user !== 'luis' || password !== 1234) {
        return callback({
            message: 'Error, usuario o contraseña incorrecta'
        })
    }

    return callback({
        message: 'Login realizado con éxito'
    })
}

login('luis', 1234, (response) => {
    console.log(response.message);

})


// 	16.	Crea una función que lea un arreglo de tareas (strings) y las ejecute una por una con setTimeout, usando un callback cuando todas hayan terminado.
console.log('\n--------------Ejercicio 16-------------');

function executeTasks(tasksArray, callback) {
    let completedTasks = 0
    for (let i = 0; i < tasksArray.length; i++) {
        setTimeout(() => {
            console.log(`Haciendo ${tasksArray[i]}...`);
            completedTasks++
            if (completedTasks === tasksArray.length) {
                callback()
            }
        }, i * 1000);
    }
}

const tasksArray = ['Barrer', 'Trapear', 'Cocinar', 'Cenar', 'Dormir']
executeTasks(tasksArray, () => {
    console.log('tareas terminadas');
})
