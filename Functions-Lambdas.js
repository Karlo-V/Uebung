// 1. Funktionen in JavaScript
// Eine Funktion ist ein Block von Code, der ausgeführt wird, wenn er aufgerufen wird. Funktionen können Parameter empfangen und einen Rückgabewert haben.
//
// a) Funktionsdeklaration
// Eine Funktionsdeklaration definiert eine Funktion mit einem Namen.

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Ausgabe: "Hello, Alice!"


// b) Funktionsausdruck
// Ein Funktionsausdruck speichert eine Funktion in einer Variablen. Diese Funktionen sind anonym, d.h., sie haben keinen Namen.

let greet1 = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet1("Bob")); // Ausgabe: "Hello, Bob!"


// 2. Arrow Functions (Lambdas)
// Arrow Functions (oder Lambdas) sind eine kürzere Syntax für Funktionsausdrücke.
// Sie verwenden den =>-Operator und haben einige Besonderheiten, wie zum Beispiel kein eigenes this-Kontext.
//
// a) Grundlagen der Arrow Functions
// Eine einfache Arrow Function sieht so aus:

let greet2 = (name) => {
    return `Hello, ${name}!`;
};

console.log(greet2("Charlie")); // Ausgabe: "Hello, Charlie!"



// b) Kürzere Syntax
// Wenn eine Arrow Function nur einen Parameter hat, können die Klammern weggelassen werden.
// Wenn der Funktionskörper nur eine Zeile umfasst, können die geschweiften Klammern und das return ebenfalls weggelassen werden.

let greet4 = name => `Hello, ${name}!`;

console.log(greet4("Dave")); // Ausgabe: "Hello, Dave!"


// c) Arrow Functions ohne Parameter
// Wenn keine Parameter vorhanden sind, werden leere Klammern verwendet.

let sayHello = () => "Hello, world!";

console.log(sayHello()); // Ausgabe: "Hello, world!"




// 3. Unterschiede zwischen normalen Funktionen und Arrow Functions
// Arrow Functions unterscheiden sich in einigen wichtigen Aspekten von normalen Funktionen:
//
//  a) this Kontext
// Eine der größten Besonderheiten von Arrow Functions ist, dass sie kein eigenes this haben.
// Sie übernehmen das this aus dem umgebenden Kontext, was in bestimmten Situationen (z.B. bei Event-Handlern oder Callbacks) sehr nützlich sein kann.

function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++; // `this` bezieht sich hier auf das `Person` Objekt
        console.log(this.age);
    }, 1000);
}

let p = new Person();
// Gibt 1, 2, 3, ... in 1-Sekunden-Intervallen aus



// b) Kein arguments Objekt
// Arrow Functions haben kein arguments Objekt, das normalerweise alle Argumente enthält,
// die an eine Funktion übergeben wurden. Falls benötigt, kannst du Rest Parameter verwenden.

let sum = (...numbers) => {
    return numbers.reduce((total, number) => total + number, 0);
};

console.log(sum(1, 2, 3, 4)); // Ausgabe: 10


// 4. Funktionen als Werte
// In JavaScript sind Funktionen "First-Class Citizens", was bedeutet,
// dass sie wie jede andere Variable behandelt werden können. Du kannst Funktionen als Argumente übergeben,
// in Arrays oder Objekten speichern und als Rückgabewert von anderen Funktionen verwenden.
//
//     a) Funktionen als Argumente

function doSomething(action, value) {
    return action(value);
}

let double = x => x * 2;
console.log(doSomething(double, 5)); // Ausgabe: 10


// b) Funktionen zurückgeben

function createMultiplier(multiplier) {
    return number => number * multiplier;
}

let double1 = createMultiplier(2);
console.log(double1(5)); // Ausgabe: 10


// 5. Higher-Order Functions
// Eine Higher-Order Function ist eine Funktion, die eine andere Funktion als Argument nimmt oder eine Funktion zurückgibt.

let numbers = [1, 2, 3, 4, 5];

// `map` ist eine Higher-Order Function
let doubled = numbers.map(x => x * 2);

console.log(doubled); // Ausgabe: [2, 4, 6, 8, 10]



// Diese Funktion ist eine höhere Ordnung Funktion
function map(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

// Beispiel für eine Callback-Funktion
function double(x) {
    return x * 2;
}

// Nutzung der `map` Funktion mit der `double` Callback-Funktion
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = map(numbers, double);

console.log(doubledNumbers); // Ausgabe: [2, 4, 6, 8, 10]


// Zusammenfassung
// Funktionen sind die grundlegenden Bausteine in JavaScript, die modularen, wiederverwendbaren Code ermöglichen.
// Arrow Functions bieten eine kürzere Syntax und haben besondere Eigenschaften wie die Übernahme des this-Kontexts aus dem umgebenden Bereich.
// Higher-Order Functions und die Fähigkeit, Funktionen als Werte zu behandeln, ermöglichen es, leistungsfähige und flexible Programme zu schreiben.

