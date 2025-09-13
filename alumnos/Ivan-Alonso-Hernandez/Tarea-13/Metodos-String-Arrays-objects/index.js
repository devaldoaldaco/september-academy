//String.fromCharCode()

String.fromCharCode(65, 66, 67);

//String.fromCodePoint()
String.fromCodePoint(65, 90); // "AZ"

//string Raw
String.raw`Hi\n${2 + 3}!`;
// 'Hi\n5!', the character after 'Hi'
// is not a newline character,
// '\' and 'n' are two characters.


//at()
const sentence = "The quick brown fox jumps over the lazy dog.";

let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"


//charAt()
{
    const sentence = "The quick brown fox jumps over the lazy dog.";

    const index = 4;

    console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
    // Expected output: "The character at index 4 is q"
}

//concatena
const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2));
// Expected output: "Hello World"

console.log(str2.concat(", ", str1));
// Expected output: "World, Hello"


{
    //includes 
    const sentence = "The quick brown fox jumps over the lazy dog.";

    const word = "fox";

    console.log(`The word "${word}" ${sentence.includes(word) ? "is" : "is not"} in the sentence`,
    );
    // Expected output: "The word "fox" is in the sentence"
}


//indexof
const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

//lastIndexOf
{
    const paragraph = "I think Ruth's dog is cuter than your dog!";

    const searchTerm = "dog";

    console.log(
        `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
    );
    // Expected output: "Index of the last "dog" is 38"
}


//localCompare()

const a = "réservé"; // With accents, lowercase
const b = "RESERVE"; // No accents, uppercase

console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, "en", { sensitivity: "base" }));
// Expected output: 0


//repeat
const mood = "Happy! ";

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "


{
    //replace()
    const paragraph = "I think Ruth's dog is cuter than your dog!";

    console.log(paragraph.replace("Ruth's", "my"));
    // Expected output: "I think my dog is cuter than your dog!"
}


{
    //search()
    const paragraph = "I think Ruth's dog is cuter than your dog!";

    // Anything not a word character, whitespace or apostrophe
    const regex = /[^\w\s']/g;

    console.log(paragraph.search(regex));
    // Expected output: 41
}


//slice

const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"


{
    //split
    const str = "The quick brown fox jumps over the lazy dog.";

    const words = str.split(" ");
    console.log(words[3]);
    // Expected output: "fox"

}


{
    //substring
    const str = "Mozilla";

    console.log(str.substring(1, 3));
    // Expected output: "oz"

    console.log(str.substring(2));
    // Expected output: "zilla"
}


{
    //toLowerCase()

    const sentence = "The quick brown fox jumps over the lazy dog.";

    console.log(sentence.toLowerCase());
    // Expected output: "the quick brown fox jumps over the lazy dog."

}


{
    //toUpperCase()
    const sentence = "The quick brown fox jumps over the lazy dog.";

    console.log(sentence.toUpperCase());
    // Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

}


{
    //trim
    const greeting = "   Hello world!   ";

    console.log(greeting);
    // Expected output: "   Hello world!   ";

    console.log(greeting.trim());
    // Expected output: "Hello world!";

}


//////////////// Metodos de arrays ////////////////////////////////////////





//El método Array.from() crea una nueva instancia de Array a partir de un objeto iterable.


console.log(Array.from("foo"));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]



//El Array.isArray()método estático determina si el valor pasado es un Array.

console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray("[]"));
// Expected output: false


//El at()método de Arrayinstancias toma un valor entero y devuelve el elemento en ese índice, permitiendo enteros positivos y negativos.
{
    const array = [5, 12, 8, 130, 44];

    let index = 2;

    console.log(`An index of ${index} returns ${array.at(index)}`);
    // Expected output: "An index of 2 returns 8"
}

//El concat()método de Arrayinstancias se utiliza para fusionar dos o más matrices
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]


//filter()
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]



//find()

const array = [5, 12, 8, 130, 44];

const found = array.find((element) => element > 10);

console.log(found);
// Expected output: 12



{
    //findindex()
    const array = [5, 12, 8, 130, 44];

    const isLargeNumber = (element) => element > 13;

    console.log(array.findIndex(isLargeNumber));
    // Expected output: 3
}


{
    //findLast()

    const array = [5, 12, 50, 130, 44];

    const found = array.findLast((element) => element > 45);

    console.log(found);
    // Expected output: 130
}


//flat()
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

{
    //forEach()

    const array = ["a", "b", "c"];

    array.forEach((element) => console.log(element));

    // Expected output: "a"
    // Expected output: "b"
    // Expected output: "c"
}

{
    //include

    const array = [1, 2, 3];

    console.log(array.includes(2));
    // Expected output: true
}


//join()
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"



{
    //key
    const array = ["a", "b", "c"];
    const iterator = array.keys();

    for (const key of iterator) {
        console.log(key);
    }
}

{
    //map()
    const array = [1, 4, 9, 16];

    // Pass a function to map
    const mapped = array.map((x) => x * 2);

    console.log(mapped);
    // Expected output: Array [2, 8, 18, 32]
}

//pop()

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]


//push()

const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

{
    //reduce()
    const array = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );

    console.log(sumWithInitial);
    // Expected output: 10
}

{
    //reverse()
    const array = ["one", "two", "three"];
    console.log("array:", array);
    // Expected output: "array:" Array ["one", "two", "three"]

    const reversed = array.reverse();
    console.log("reversed:", reversed);
    // Expected output: "reversed:" Array ["three", "two", "one"]
}

{
    const array = [1, 2, 3];

    const firstElement = array.shift();

    console.log(array);
    // Expected output: Array [2, 3]
}

{
    //slice()

    const animals = ["ant", "bison", "camel", "duck", "elephant"];

    console.log(animals.slice(2));
    // Expected output: Array ["camel", "duck", "elephant"]
}

{
    //sort()

    const months = ["March", "Jan", "Feb", "Dec"];
    months.sort();
    console.log(months);
    // Expected output: Array ["Dec", "Feb", "Jan", "March"]
}

//splice()
{
    const months = ["Jan", "March", "April", "June"];
    months.splice(1, 0, "Feb");
    // Inserts at index 1
    console.log(months);
    // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

}

{
    //toString()
    const array = [1, 2, "a", "1a"];

    console.log(array.toString());
    // Expected output: "1,2,a,1a"

}

{
    //unShift()
    const array = [1, 2, 3];

    console.log(array.unshift(4, 5));
    // Expected output: 5

    console.log(array);
    // Expected output: Array [4, 5, 1, 2, 3]
}





//////////////////// Metodos objetos ////////////////////////////////////////////



//Object.assign()
{
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }
}



//Object.create()
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten


{
    //Object.entries()

    var obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]
}


{
    //Object.is()
Object.is("foo", "foo"); // true
Object.is(window, window); // true

Object.is("foo", "bar"); // false
Object.is([], []); // false
}



{
    //Object.keys()

    const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]

}



{
    //Object.values()
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]

}

