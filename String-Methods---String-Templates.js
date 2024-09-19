//String-Methoden sind Funktionen,
//die es ermöglichen, Zeichenketten zu manipulieren oder Informationen über sie zu erhalten. Hier sind einige der gängigsten String-Methoden:


// a) length
// gibt die Länge der Zeichenkette zurück.

let text1 = "Hello, World!";
console.log(text1.length); // Ausgabe: 13

// b) toUpperCase() und toLowerCase()
// Diese Methoden konvertieren die Zeichenkette in Groß- bzw. Kleinbuchstaben.

let text2 = "Hello, World!";
console.log(text2.toUpperCase()); // Ausgabe: "HELLO, WORLD!"
console.log(text2.toLowerCase()); // Ausgabe: "hello, world!"

// c) indexOf() und lastIndexOf()
// Sucht nach einer Teilzeichenkette und gibt den Index des ersten bzw. letzten Vorkommens zurück.

let text3 = "Hello, World!";
console.log(text3.indexOf("World")); // Ausgabe: 7
console.log(text3.lastIndexOf("o")); // Ausgabe: 8

// d) slice(), substring() und substr()
// Extrahiert einen Teil der Zeichenkette.

let text4 = "Hello, World!";
console.log(text4.slice(7, 12)); // Ausgabe: "World"
console.log(text4.substring(7, 12)); // Ausgabe: "World"
console.log(text4.substr(7, 5)); // Ausgabe: "World"

// e) replace()
// Ersetzt einen Teil der Zeichenkette durch eine andere.

let text5 = "Hello, World!";
let newText = text5.replace("World", "JavaScript");
console.log(newText); // Ausgabe: "Hello, JavaScript!"

// f) trim()
// Entfernt Leerzeichen am Anfang und Ende der Zeichenkette.

let text6 = "   Hello, World!   ";
console.log(text6.trim()); // Ausgabe: "Hello, World!"

// g) split()
// Teilt eine Zeichenkette in ein Array auf.

let text7 = "Hello, World!";
let words = text7.split(", ");
console.log(words); // Ausgabe: ["Hello", "World!"]






// String-Templates (Template Literals)
// String-Templates (auch Template Literals genannt)
// sind eine bequeme Möglichkeit, Zeichenketten zu erstellen, die Platzhalter enthalten. Sie verwenden Backticks (`) statt normalen Anführungszeichen.


// a) Einfache Einbindung von Variablen
// Du kannst Variablen direkt in einen String einfügen, indem du ${variable} verwendest.

let name = "John";
let message = `Hello, ${name}!`;
console.log(message); // Ausgabe: "Hello, John!"

// b) Mehrzeilige Strings
// Template Literals erlauben es dir, mehrzeilige Strings zu erstellen, ohne spezielle Zeichen wie \n verwenden zu müssen.

let text = `This is a 
multiline string.`;
console.log(text);
// Ausgabe:
// This is a
// multiline string.

// c) Einfügen von Ausdrücken
// Du kannst innerhalb der Platzhalter auch JavaScript-Ausdrücke verwenden.

let a = 10;
let b = 20;
let result = `The sum of a and b is ${a + b}.`;
console.log(result); // Ausgabe: "The sum of a and b is 30."

// d) Funktionen innerhalb von Templates
// Du kannst auch Funktionen direkt in den Template Literals verwenden.

function greet(name) {
    return `Hello, ${name}!`;
}

let message1 = `Greeting: ${greet("Alice")}`;
console.log(message1); // Ausgabe: "Greeting: Hello, Alice!"


// Zusammenfassung
// String-Methoden bieten dir eine Vielzahl von Möglichkeiten, Zeichenketten zu manipulieren.
// String-Templates (Template Literals) machen es einfach, Variablen und Ausdrücke in Strings einzubetten und
// bieten zusätzlichen Komfort wie die Unterstützung von mehrzeiligen Strings.