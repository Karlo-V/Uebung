// 1. Schleifen über Arrays
// Es gibt mehrere Methoden, um über Arrays zu iterieren, jede mit ihren eigenen Vor- und Nachteilen.
//
//     a) for-Schleife
//     Die klassische for-Schleife ist eine der grundlegendsten Methoden, um über ein Array zu iterieren.

let fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Ausgabe:
// Apple
// Banana
// Cherry


// b) forEach()-Methode
// Die forEach()-Methode ist eine Array-Methode, die eine Funktion für jedes Element des Arrays aufruft.

let fruits1 = ["Apple", "Banana", "Cherry"];

fruits1.forEach(function(fruit, index) {
    console.log(`${index}: ${fruit}`);
});
// Ausgabe:
// 0: Apple
// 1: Banana
// 2: Cherry


// c) for...of-Schleife
// Die for...of-Schleife ist eine moderne und einfache Möglichkeit, über Array-Elemente zu iterieren.

let fruits2 = ["Apple", "Banana", "Cherry"];

for (let fruit of fruits2) {
    console.log(fruit);
}
// Ausgabe:
// Apple
// Banana
// Cherry


// d) map()-Methode
// Die map()-Methode erstellt ein neues Array, indem sie eine Funktion auf jedes Element des ursprünglichen Arrays anwendet.

let numbers = [1, 2, 3, 4];
let doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled); // Ausgabe: [2, 4, 6, 8]



// e) filter()-Methode
// Die filter()-Methode erstellt ein neues Array mit allen Elementen, die eine bestimmte Bedingung erfüllen.

let numbers1 = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers1.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // Ausgabe: [2, 4, 6]


// f) reduce()-Methode
// Die reduce()-Methode verarbeitet jedes Element im Array und führt eine Reduktion auf einen einzigen Wert durch.

let numbers2 = [1, 2, 3, 4];
let sum = numbers2.reduce(function(total, number) {
    return total + number;
}, 0);
console.log(sum); // Ausgabe: 10


// 2. Schleifen über Objekte
// Anders als Arrays haben Objekte keine direkte Reihenfolge, aber es gibt dennoch mehrere Möglichkeiten, über ihre Eigenschaften zu iterieren.
//
// a) for...in-Schleife
// Die for...in-Schleife iteriert über die Schlüssel (Eigenschaften) eines Objekts.


let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Ausgabe:
// firstName: John
// lastName: Doe
// age: 30



// b) Object.keys() mit einer forEach()-Schleife
// Object.keys() gibt ein Array der Schlüssel (Eigenschaften) eines Objekts zurück. Du kannst dann mit forEach() über dieses Array iterieren.

let person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

Object.keys(person1).forEach(function(key) {
    console.log(`${key}: ${person1[key]}`);
});
// Ausgabe:
// firstName: John
// lastName: Doe
// age: 30



// c) Object.values() mit einer forEach()-Schleife
// Object.values() gibt ein Array der Werte eines Objekts zurück, über die man iterieren kann.

let person3 = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

Object.values(person3).forEach(function(value) {
    console.log(value);
});
// Ausgabe:
// John
// Doe
// 30


// d) Object.entries() mit einer for...of-Schleife
// Object.entries() gibt ein Array von [key, value]-Paaren zurück, das du mit for...of durchlaufen kannst.

let person4 = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

for (let [key, value] of Object.entries(person4)) {
    console.log(`${key}: ${value}`);
}
// Ausgabe:
// firstName: John
// lastName: Doe
// age: 30



// 3. Verschachtelte Schleifen
// Wenn du ein Array von Objekten oder ein Objekt mit Arrays hast, kannst du verschachtelte Schleifen verwenden, um auf alle Ebenen der Struktur zuzugreifen.
//
// a) Array von Objekten

let people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 35 }
];

for (let person of people) {
    console.log(`${person.name} is ${person.age} years old.`);
}
// Ausgabe:
// John is 30 years old.
// Jane is 25 years old.
// Jim is 35 years old.


// b) Objekt mit Arrays

let teams = {
    teamA: ["Alice", "Bob"],
    teamB: ["Charlie", "Dave"]
};

for (let team in teams) {
    console.log(`Members of ${team}:`);
    for (let member of teams[team]) {
        console.log(member);
    }
}
// Ausgabe:
// Members of teamA:
// Alice
// Bob
// Members of teamB:
// Charlie
// Dave

// Zusammenfassung
// Arrays können mit for, forEach, for...of, map, filter, und reduce durchlaufen werden, jede Methode hat ihre eigene Stärke je nach Anwendungsfall.
// Objekte können mit for...in, Object.keys(), Object.values(), und Object.entries() durchlaufen werden, um sowohl über Schlüssel als auch Werte zu iterieren.
// Verschachtelte Schleifen sind nützlich, um komplexe Datenstrukturen wie Arrays von Objekten oder Objekte mit Arrays zu verarbeiten.