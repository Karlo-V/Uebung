// 1. Einführung in Objekte
// Ein Objekt in JavaScript ist eine Sammlung von Eigenschaften, wobei jede Eigenschaft ein Schlüssel
// -Wert-Paar ist. Der Schlüssel ist eine Zeichenkette (oder ein Symbol), und der Wert kann jedes
// beliebige Datenelement sein, wie eine Zahl, eine Zeichenkette, ein Array oder sogar eine Funktion.

// a) Erstellen eines Objekts
// Objekte können auf verschiedene Arten erstellt werden:

// Mit geschweiften Klammern (Objekt-Literal)
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true
};

// Mit dem Object-Konstruktor
let car = new Object();
car.make = "Toyota";
car.model = "Corolla";
car.year = 2020;


// 2. Zugriff auf Objekteigenschaften
// Es gibt zwei gängige Möglichkeiten, auf die Eigenschaften eines Objekts zuzugreifen: Punktnotation und eckige Klammern.
//
// a) Punktnotation
// Die Punktnotation ist die gebräuchlichste Methode, um auf Eigenschaften eines Objekts zuzugreifen.

let person1 = {
    firstName: "John",
    lastName: "Doe"
};

console.log(person1.firstName); // Ausgabe: "John"
console.log(person1.lastName);  // Ausgabe: "Doe"


// b) Klammernotation
// Die Klammernotation ist nützlich, wenn der Schlüsselname dynamisch ist oder Sonderzeichen enthält.

let person2 = {
    "first-name": "John",
    "last-name": "Doe"
};

console.log(person2["first-name"]); // Ausgabe: "John"

// Dynamischer Zugriff
let key = "last-name";
console.log(person2[key]); // Ausgabe: "Doe"


// 3. Eigenschaften hinzufügen, ändern und entfernen
// a) Hinzufügen von Eigenschaften
// Du kannst einem bestehenden Objekt jederzeit neue Eigenschaften hinzufügen.

let person3 = {
    firstName: "John"
};

person3.lastName = "Doe";
person3.age = 30;

console.log(person3);
// Ausgabe: { firstName: "John", lastName: "Doe", age: 30 }


// b) Ändern von Eigenschaften
// Du kannst den Wert einer Eigenschaft ändern, indem du ihn einfach neu zuweist.

let person4 = {
    firstName: "John",
    age: 30
};

person4.age = 31;
console.log(person4.age); // Ausgabe: 31

// c) Entfernen von Eigenschaften
// Mit dem delete-Operator kannst du eine Eigenschaft aus einem Objekt entfernen.

let person5 = {
    firstName: "John",
    age: 30
};

delete person5.age;
console.log(person5);
// Ausgabe: { firstName: "John" }



// 4. Nützliche Methoden und Eigenschaften für Objekte
// a) Object.keys()
// Gibt ein Array zurück, das alle Schlüssel (Eigenschaftsnamen) des Objekts enthält.

let person6 = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

let keys = Object.keys(person6);
console.log(keys); // Ausgabe: ["firstName", "lastName", "age"]

// b) Object.values()
// Gibt ein Array zurück, das alle Werte der Eigenschaften des Objekts enthält.

let person7 = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

let values = Object.values(person7);
console.log(values); // Ausgabe: ["John", "Doe", 30]

// c) Object.entries()
// Gibt ein Array von [key, value]-Paaren zurück, das alle Eigenschaften des Objekts enthält.

let person8 = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

let entries = Object.entries(person8);
console.log(entries);
// Ausgabe: [["firstName", "John"], ["lastName", "Doe"], ["age", 30]]


// d) Object.assign()
// Diese Methode kopiert die Eigenschaften eines oder mehrerer Quellobjekte in ein Zielobjekt. Dies ist nützlich, um Objekte zu kombinieren oder zu klonen.

let person9 = { firstName: "John" };
let details = { age: 30, isEmployed: true };

let merged = Object.assign({}, person9, details);
console.log(merged);
// Ausgabe: { firstName: "John", age: 30, isEmployed: true }


// e) hasOwnProperty()
// Diese Methode prüft, ob das Objekt eine bestimmte Eigenschaft besitzt (und nicht von der Prototyp-Kette geerbt hat).

let person10 = {
    firstName: "John",
    age: 30
};

console.log(person10.hasOwnProperty("age"));  // Ausgabe: true
console.log(person10.hasOwnProperty("salary")); // Ausgabe: false


// 4. Object.fromEntries()
// Die Methode Object.fromEntries() ist das Gegenstück zu Object.entries(). Sie nimmt ein Array von Arrays (wie das, was Object.entries() zurückgibt) und wandelt es in ein Objekt um.
//
//     Beispiel:


const entries1 = [
    ['name', 'Alice'],
    ['age', 30],
    ['occupation', 'Engineer']
];

const person233 = Object.fromEntries(entries1);
console.log(person233);
// Ausgabe: { name: 'Alice', age: 30, occupation: 'Engineer' }



// 5. Verschachtelte Objekte
// Eigenschaften eines Objekts können ebenfalls Objekte sein, was zu verschachtelten Strukturen führt.

let person11 = {
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York"
    }
};

console.log(person11.name.firstName); // Ausgabe: "John"
console.log(person11.address.city);   // Ausgabe: "New York"



// 6. Methoden in Objekten
// Eine Methode ist eine Funktion, die als Eigenschaft eines Objekts definiert ist.
// Das Schlüsselwort this bezieht sich in einer Methode auf das Objekt, in dem die Methode aufgerufen wurde.

let person12 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person12.fullName()); // Ausgabe: "John Doe"


// 6. Object.freeze()
// Die Methode Object.freeze() friert ein Objekt ein, sodass keine neuen Eigenschaften hinzugefügt
// oder bestehende Eigenschaften verändert werden können. Das Objekt wird somit unveränderlich.
//
//     Beispiel:

const person22 = {
    name: 'Alice',
    age: 30
};

Object.freeze(person22);

person.age = 31; // Diese Änderung wird ignoriert
person.city = 'Berlin'; // Diese Eigenschaft wird nicht hinzugefügt

console.log(person22); // Ausgabe: { name: 'Alice', age: 30 }



// 7. Object.seal()
// Die Methode Object.seal() versiegelt ein Objekt, sodass keine neuen Eigenschaften hinzugefügt oder entfernt werden können.
// Bestehende Eigenschaften können jedoch noch verändert werden.
//
//     Beispiel:


const person23 = {
    name: 'Alice',
    age: 30
};

Object.seal(person23);

person23.age = 31; // Diese Änderung ist erlaubt
delete person23.name; // Diese Operation wird ignoriert

console.log(person23); // Ausgabe: { name: 'Alice', age: 31 }



// 8. Object.is()
// Die Methode Object.is() vergleicht zwei Werte und gibt true zurück, wenn sie strikt gleich sind,
// ähnlich wie der strikte Vergleichsoperator (===), aber mit einigen Unterschieden, insbesondere bei NaN und -0.
//
// Beispiel:

console.log(Object.is(25, 25)); // Ausgabe: true
console.log(Object.is('foo', 'foo')); // Ausgabe: true
console.log(Object.is(NaN, NaN)); // Ausgabe: true
console.log(Object.is(0, -0)); // Ausgabe: false



// Zusammenfassung
// Objekte in JavaScript bestehen aus Schlüssel-Wert-Paaren, die Eigenschaften genannt werden.
// Es gibt verschiedene Möglichkeiten, auf Eigenschaften zuzugreifen und sie zu manipulieren, entweder mit Punktnotation oder Klammernotation.
// JavaScript bietet viele nützliche Methoden wie Object.keys(), Object.values(), und Object.assign(), um mit Objekten effizient zu arbeiten.
// Verschachtelte Objekte ermöglichen komplexe Datenstrukturen, und Methoden innerhalb von Objekten nutzen this, um auf das eigene Objekt zuzugreifen.


// Zusammenfassung
// Object.keys(): Gibt ein Array der Schlüssel eines Objekts zurück.
// Object.values(): Gibt ein Array der Werte eines Objekts zurück.
// Object.entries(): Gibt ein Array von Schlüssel-Wert-Paaren eines Objekts zurück.
// Object.fromEntries(): Wandelt ein Array von Schlüssel-Wert-Paaren in ein Objekt um.
// Object.assign(): Kopiert Eigenschaften von einem oder mehreren Objekten in ein Zielobjekt.
// Object.freeze(): Macht ein Objekt unveränderlich.
// Object.seal(): Versiegelt ein Objekt, sodass keine neuen Eigenschaften hinzugefügt oder entfernt werden können, aber bestehende Eigenschaften verändert werden können.
// Object.is(): Vergleicht zwei Werte und gibt true zurück, wenn sie strikt gleich sind.