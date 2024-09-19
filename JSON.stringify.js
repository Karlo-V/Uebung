// 1. JSON.stringify()
// Die Methode JSON.stringify() wird verwendet,
// um ein JavaScript-Objekt oder -Array in eine JSON-Zeichenkette zu konvertieren.
// Dies ist nützlich, wenn du Daten in einem Format speichern oder senden musst, das nur Text unterstützt (z.B. beim Senden von Daten an einen Server).
//
// Beispiel:


const user = {
    name: 'Alice',
    age: 25,
    isStudent: false,
    courses: ['Math', 'Science'],
    address: {
        city: 'Berlin',
        postalCode: '10115'
    }
};

const jsonString = JSON.stringify(user);
console.log(jsonString);

// Ausgabe:
// {"name":"Alice","age":25,"isStudent":false,"courses":["Math","Science"],"address":{"city":"Berlin","postalCode":"10115"}}


// a) Optionaler zweiter und dritter Parameter
// Zweiter Parameter (Replacer): Ein Array oder eine Funktion, die bestimmt, welche Eigenschaften in der JSON-Zeichenkette enthalten sein sollen.
// Dritter Parameter (Space): Eine Zahl oder Zeichenkette, die angibt, wie die Ausgabe formatiert werden soll (z.B. für Einrückungen).
// Beispiel mit Replacer und Space:

const jsonStringFormatted = JSON.stringify(user, ['name', 'age', 'address'], 2);
console.log(jsonStringFormatted);

// Ausgabe:
// {
//   "name": "Alice",
//   "age": 25,
//   "address": {
//     "city": "Berlin",
//     "postalCode": "10115"
//   }
// }


// 2. JSON.parse()
// Die Methode JSON.parse() wird verwendet, um eine JSON-Zeichenkette in ein JavaScript-Objekt oder -Array zu konvertieren.
// Dies ist nützlich, wenn du JSON-Daten empfängst (z.B. von einem Server) und diese in einem JavaScript-Programm weiterverarbeiten möchtest.
//
//     Beispiel:

const jsonString1 = '{"name":"Alice","age":25,"isStudent":false,"courses":["Math","Science"],"address":{"city":"Berlin","postalCode":"10115"}}';

const userObject = JSON.parse(jsonString1);
console.log(userObject);

// Ausgabe:
// {
//   name: 'Alice',
//   age: 25,
//   isStudent: false,
//   courses: [ 'Math', 'Science' ],
//   address: { city: 'Berlin', postalCode: '10115' }
// }


// a) Optionaler zweiter Parameter (Reviver)
// Der optionale zweite Parameter für JSON.parse() ist eine Funktion,
// die jedes Schlüssel-Wert-Paar in der Zeichenkette durchläuft und eine Anpassung der Daten ermöglicht.
//
//     Beispiel mit Reviver:


const userObjectWithReviver = JSON.parse(jsonString, (key, value) => {
    if (key === 'age') {
        return value + 1; // Alter um 1 erhöhen
    }
    return value;
});

console.log(userObjectWithReviver);

// Ausgabe:
// {
//   name: 'Alice',
//   age: 26, // Das Alter wurde um 1 erhöht
//   isStudent: false,
//   courses: [ 'Math', 'Science' ],
//   address: { city: 'Berlin', postalCode: '10115' }
// }


// 3. JSON und Fehlerbehandlung
// Beim Arbeiten mit JSON.parse() ist es wichtig, auf Fehler zu achten, da das Parsen fehlschlägt, wenn die Zeichenkette nicht korrekt formatiert ist.
//
//     Beispiel:


try {
    const invalidJsonString = '{"name": "Alice", "age": 25,}'; // Ungültige JSON-Zeichenkette
    const userObject = JSON.parse(invalidJsonString);
} catch (error) {
    console.error('Parsing error:', error);
}



// Zusammenfassung
// JSON.stringify(): Konvertiert ein JavaScript-Objekt oder -Array in eine JSON-Zeichenkette.
// Optional kannst du bestimmte Eigenschaften auswählen und die Ausgabe formatieren.

// JSON.parse(): Konvertiert eine JSON-Zeichenkette in ein JavaScript-Objekt oder -Array.
// Optional kannst du eine Funktion angeben, die jede Eigenschaft während des Parsing-Prozesses anpasst.

//  Beide Methoden sind unerlässlich, wenn du Daten zwischen einem Server und einem Client austauschen oder in einer JSON-Datei speichern möchtest.

//  Fehlerbehandlung ist besonders wichtig beim Parsen von JSON-Zeichenketten.