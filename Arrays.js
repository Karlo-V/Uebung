// a) Array-Erstellung
// Arrays können auf verschiedene Weise erstellt werden:

// Mit eckigen Klammern (am gebräuchlichsten)
let fruits = ["Apple", "Banana", "Cherry"];

// Mit dem Array-Konstruktor
let numbers = new Array(1, 2, 3, 4);

// Leeres Array
let emptyArray = [];



// 2. Zugriff auf Array-Elemente
// Elemente in einem Array werden mit einem Null-basierten Index aufgerufen, d.h. das erste Element hat den Index 0.

let fruits1 = ["Apple", "Banana", "Cherry"];
console.log(fruits1[0]); // Ausgabe: "Apple"
console.log(fruits1[2]); // Ausgabe: "Cherry"


// 3. Wichtige Array-Methoden
// Arrays bieten viele eingebaute Methoden, um mit den enthaltenen Daten zu arbeiten. Hier sind einige der wichtigsten:
//
// a) push() und pop()
// push() fügt ein oder mehrere Elemente am Ende des Arrays hinzu.
// pop() entfernt das letzte Element aus dem Array und gibt es zurück.

let fruits2 = ["Apple", "Banana"];
fruits2.push("Cherry");
console.log(fruits2); // Ausgabe: ["Apple", "Banana", "Cherry"]

let lastFruit = fruits2.pop();
console.log(lastFruit); // Ausgabe: "Cherry"
console.log(fruits2);    // Ausgabe: ["Apple", "Banana"]


// b) shift() und unshift()
// shift() entfernt das erste Element aus dem Array und gibt es zurück.
// unshift() fügt ein oder mehrere Elemente am Anfang des Arrays hinzu

let fruits3 = ["Apple", "Banana"];
let firstFruit = fruits3.shift();
console.log(firstFruit); // Ausgabe: "Apple"
console.log(fruits3);     // Ausgabe: ["Banana"]

fruits3.unshift("Mango");
console.log(fruits3);     // Ausgabe: ["Mango", "Banana"]


// c) length
// gibt die Anzahl der Elemente im Array zurück.

let fruits4 = ["Apple", "Banana", "Cherry"];
console.log(fruits4.length); // Ausgabe: 3

// d) indexOf() und includes()
// indexOf() gibt den Index des ersten Vorkommens eines bestimmten Elements im Array zurück oder -1, wenn das Element nicht gefunden wird.
// includes() prüft, ob ein bestimmtes Element im Array vorhanden ist, und gibt true oder false zurück.

let fruits5 = ["Apple", "Banana", "Cherry"];
console.log(fruits5.indexOf("Banana")); // Ausgabe: 1
console.log(fruits5.includes("Mango")); // Ausgabe: false


// e) slice() und splice()
// slice() erstellt ein neues Array, das einen Teil des Original-Arrays enthält.
// splice() fügt Elemente hinzu oder entfernt Elemente aus dem Array.

let fruits6 = ["Apple", "Banana", "Cherry", "Date"];
let citrus = fruits6.slice(1, 3);
console.log(citrus); // Ausgabe: ["Banana", "Cherry"]

// Entfernen von 2 Elementen ab Index 1 und Einfügen von "Mango" und "Pineapple"
fruits6.splice(1, 2, "Mango", "Pineapple");
console.log(fruits6); // Ausgabe: ["Apple", "Mango", "Pineapple", "Date"]

// f) forEach()
// Die forEach()-Methode führt eine Funktion für jedes Element im Array aus.

let fruits7 = ["Apple", "Banana", "Cherry"];
fruits7.forEach(function(fruit) {
    console.log(fruit);
});
// Ausgabe:
// Apple
// Banana
// Cherry


// g) map()
// Die map()-Methode erstellt ein neues Array, indem sie eine Funktion auf jedes Element des ursprünglichen Arrays anwendet.

let numbers = [1, 2, 3, 4];
let doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled); // Ausgabe: [2, 4, 6, 8]


// h) filter()
// Die filter()-Methode erstellt ein neues Array, das nur die Elemente enthält, die eine bestimmte Bedingung erfüllen.

let numbers1 = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers1.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // Ausgabe: [2, 4, 6]

// i) reduce()
// Die reduce()-Methode verarbeitet jedes Element im Array und führt eine Reduktion auf einen einzigen Wert durch.

let numbers2 = [1, 2, 3, 4];
let sum = numbers2.reduce(function(total, number) {
    return total + number;
}, 0);
console.log(sum); // Ausgabe: 10



// 4. Mehrdimensionale Arrays
// Arrays können auch andere Arrays als Elemente enthalten, was als mehrdimensionale Arrays bezeichnet wird.

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]); // Ausgabe: 6


// Zusammenfassung
// Arrays sind geordnete Sammlungen von Werten, die durch ihren Index aufgerufen werden können.
// Es gibt eine Vielzahl von Array-Methoden, um Elemente hinzuzufügen, zu entfernen, zu durchsuchen und zu manipulieren.
// Mehrdimensionale Arrays ermöglichen es dir, Arrays innerhalb von Arrays zu erstellen, was nützlich für die Arbeit mit Matrizen oder tabellarischen Daten ist.