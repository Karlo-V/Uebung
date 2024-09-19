// 1. Spread Operator (...)
// Der Spread Operator erlaubt es, Elemente eines Arrays oder Objekts "aufzubreiten",
// d.h., sie in einem neuen Kontext einzeln darzustellen. Er wird mit drei Punkten ... geschrieben.

// a) Verwendung mit Arrays
// Der Spread Operator kann verwendet werden, um ein Array in seine einzelnen Elemente zu "zerlegen".

let fruits = ["Apple", "Banana", "Cherry"];
let moreFruits = ["Mango", ...fruits, "Pineapple"];

console.log(moreFruits);
// Ausgabe: ["Mango", "Apple", "Banana", "Cherry", "Pineapple"]


// b) Verwendung mit Objekten
// Der Spread Operator kann auch verwendet werden, um die Eigenschaften eines Objekts zu kopieren.

let person = { name: "John", age: 30 };
let updatedPerson = { ...person, age: 31, city: "New York" };

console.log(updatedPerson);
// Ausgabe: { name: "John", age: 31, city: "New York" }



// c) Verwendung in Funktionsaufrufen
// Der Spread Operator kann verwendet werden, um ein Array als Liste von Argumenten an eine Funktion zu übergeben.

function add(a, b, c) {
    return a + b + c;
}

let numbers = [1, 2, 3];
console.log(add(...numbers)); // Ausgabe: 6



// 2. Rest Parameter (...)
// Der Rest Parameter sieht aus wie der Spread Operator,
// aber er wird in Funktionsdefinitionen verwendet, um eine variable Anzahl von Argumenten als Array zu sammeln.

function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3));       // Ausgabe: 6
console.log(sum(1, 2, 3, 4, 5)); // Ausgabe: 15



// 3. Destructuring
// Destructuring ermöglicht es dir, Werte aus Arrays oder Objekten einfach zu extrahieren und ihnen Variablen zuzuweisen.
//
// a) Array Destructuring
// Mit Array Destructuring kannst du Elemente eines Arrays direkt auf Variablen verteilen.

let fruits1 = ["Apple", "Banana", "Cherry"];
let [first, second, third] = fruits1;

console.log(first);  // Ausgabe: "Apple"
console.log(second); // Ausgabe: "Banana"
console.log(third);  // Ausgabe: "Cherry"

// b) Objekt Destructuring
// Mit Objekt Destructuring kannst du Eigenschaften eines Objekts direkt auf Variablen verteilen.

let person1 = { name: "John", age: 30, city: "New York" };
let { name, age, city } = person1;

console.log(name); // Ausgabe: "John"
console.log(age);  // Ausgabe: 30
console.log(city); // Ausgabe: "New York"


// c) Destructuring mit Standardwerten
// Du kannst auch Standardwerte angeben, die verwendet werden, wenn eine Eigenschaft oder ein Array-Element nicht vorhanden ist.

let fruits2 = ["Apple"];
let [first1, second1 = "Banana"] = fruits2;

console.log(first1);  // Ausgabe: "Apple"
console.log(second1); // Ausgabe: "Banana"

let person2 = { name1: "John" };
let { name1, age1 = 25 } = person2;

console.log(name1); // Ausgabe: "John"
console.log(age1);  // Ausgabe: 25


// d) Verschachteltes Destructuring
// Destructuring kann auch auf verschachtelte Arrays oder Objekte angewendet werden.

let person3 = {
    name2: "John",
    address: {
        city1: "New York",
        zip: "10001"
    }
};

let { name2, address: { city1, zip } } = person3;

console.log(name2); // Ausgabe: "New York"
console.log(city1); // Ausgabe: "New York"
console.log(zip);  // Ausgabe: "10001"



// Zusammenfassung
// Der Spread Operator (...) wird verwendet, um Arrays oder Objekte "aufzubreiten" oder um Arrays in Funktionsaufrufen als separate Argumente zu verwenden.
// Der Rest Parameter (...) sammelt eine variable Anzahl von Funktionsargumenten in einem Array.
// Destructuring erlaubt es dir, Elemente aus Arrays oder Eigenschaften aus Objekten einfach zu extrahieren und Variablen zuzuweisen.