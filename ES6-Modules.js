// 1. Was sind ES6-Module?
// Ein Modul ist eine JavaScript-Datei, die Code
// (z.B. Funktionen, Klassen oder Variablen) enthält, der in anderen Dateien verwendet werden kann. Es gibt zwei Hauptbestandteile bei der Arbeit mit Modulen:
//
// Exportieren: Elemente aus einem Modul öffentlich machen.
// Importieren: Elemente in ein anderes Modul laden.

// 2. Exportieren in ES6-Modulen
// Du kannst mit dem export-Schlüsselwort Funktionen, Variablen, Klassen, Objekte usw.
// aus einem Modul exportieren. Es gibt zwei Hauptarten von Exporten: Named Exports und Default Exports.
//
// a) Named Exports
// Mit Named Exports kannst du mehrere Elemente aus einem Modul exportieren. Diese müssen dann beim Importieren benannt werden.

// file: math.js

export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export class Calculator {
    subtract(a, b) {
        return a - b;
    }
}

// b) Default Exports
// Mit einem Default Export kannst du ein einzelnes Element aus einem Modul exportieren, das beim Importieren keinen spezifischen Namen benötigt.


// file: greeting.js

export default function greet(name) {
    return `Hello, ${name}!`;
}


// 3. Importieren in ES6-Modulen
// Du kannst Elemente, die in einem Modul exportiert wurden, in ein anderes Modul importieren.
// Je nachdem, ob es sich um Named Exports oder Default Exports handelt, unterscheidet sich die Syntax.
//
// a) Importieren von Named Exports
// Beim Importieren von Named Exports musst du genau die Namen verwenden, mit denen die Elemente exportiert wurden.


// file: main.js

import { PI, add, Calculator } from './math.js';

console.log(PI); // Ausgabe: 3.14159
console.log(add(2, 3)); // Ausgabe: 5

const calc = new Calculator();
console.log(calc.subtract(5, 2)); // Ausgabe: 3


// b) Importieren von Default Exports
// Bei einem Default Export kannst du den Namen frei wählen, da es nur ein Default Export pro Modul gibt.

// file: main.js

import greet from './greeting.js';

console.log(greet('Alice')); // Ausgabe: "Hello, Alice!"


// c) Kombinierter Import
// Du kannst auch Named Exports und Default Exports zusammen importieren:

// file: math.js

export { add as sum, PI as circleConstant };

// file: main.js

import { sum, circleConstant } from './math.js';

console.log(sum(4, 5)); // Ausgabe: 9
console.log(circleConstant); // Ausgabe: 3.14159



// 4. Dynamische Importe
// Du kannst Module auch dynamisch importieren. Das bedeutet, dass das Modul erst geladen wird,
// wenn es wirklich benötigt wird. Das geschieht asynchron und gibt ein Promise zurück.

// file: main.js

function loadMathModule() {
    import('./math.js')
        .then(math => {
            console.log(math.add(2, 3)); // Ausgabe: 5
        })
        .catch(err => {
            console.error('Failed to load module:', err);
        });
}

loadMathModule();


// 5. Arbeiten mit Modulen im Browser
// Um ES6-Module direkt im Browser zu verwenden, musst du das type="module"-Attribut im <script>-Tag hinzufügen.


// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>ES6 Modules</title>
// </head>
// <body>
// <script type="module" src="main.js"></script>
// </body>
// </html>



// Zusammenfassung
// ES6-Module bieten eine native Möglichkeit, JavaScript-Code modular und wiederverwendbar zu gestalten.
// export wird verwendet, um Funktionen, Variablen oder Klassen aus einem Modul