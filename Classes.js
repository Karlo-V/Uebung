// 1. Einführung in Klassen
// Eine Klasse ist ein Bauplan für Objekte. Sie definiert, welche Eigenschaften und Methoden die Objekte haben sollen. Objekte, die von einer Klasse erstellt werden, nennt man Instanzen dieser Klasse.
//
//     Beispiel einer einfachen Klasse:

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }

const alice = new Person('Alice', 25);
alice.greet(); // Ausgabe: "Hello, my name is Alice and I am 25 years old."


// 2. Erstellen von Instanzen
// Mit dem new-Schlüsselwort kannst du Instanzen einer Klasse erstellen.
//
//     Beispiel:

const bob = new Person('Bob', 30);
bob.greet(); // Ausgabe: "Hello, my name is Bob and I am 30 years old."


// 3. Vererbung
// In JavaScript können Klassen von anderen Klassen erben, was es ermöglicht, wiederverwendbaren Code zu schreiben und Spezialisierungen zu erstellen.

class Student extends Person {
    constructor(name, age, course) {
        super(name, age); // Ruft den Konstruktor der übergeordneten Klasse auf
        this.course = course;
    }

    study() {
        console.log(`${this.name} is studying ${this.course}.`);
    }
}

const studentAlice = new Student('Alice', 25, 'Mathematics');
studentAlice.greet(); // Ausgabe: "Hello, my name is Alice and I am 25 years old."
studentAlice.study(); // Ausgabe: "Alice is studying Mathematics."



// 4. Getters und Setters
// Klassen können spezielle Methoden haben, die wie Eigenschaften verwendet werden. Das sind sogenannte Getter und Setter.
// Sie ermöglichen den Zugriff auf und die Anpassung von Eigenschaftswerten auf kontrollierte Weise.
//
//     Beispiel für Getter und Setter:

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    set area(value) {
        this.width = Math.sqrt(value);
        this.height = Math.sqrt(value);
    }
}

const rect = new Rectangle(4, 5);
console.log(rect.area); // Ausgabe: 20

rect.area = 36;
console.log(rect.width); // Ausgabe: 6
console.log(rect.height); // Ausgabe: 6


// 5. Statische Methoden
// Statische Methoden sind Methoden, die auf der Klasse selbst definiert sind und nicht auf den Instanzen der Klasse.
// Sie werden oft für Hilfsfunktionen verwendet, die nicht spezifisch für eine Instanz sind.

class MathHelper {
    static square(x) {
        return x * x;
    }
}

console.log(MathHelper.square(5)); // Ausgabe: 25


// 6. Private Eigenschaften und Methoden
// In JavaScript können Eigenschaften und Methoden mit # als privat markiert werden. Das bedeutet,
// dass sie nur innerhalb der Klasse zugänglich sind und nicht von außen oder von abgeleiteten Klassen aus zugegriffen werden kann.

class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log('Insufficient funds.');
        } else {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}, New Balance: ${this.#balance}`);
        }
    }
}

const account = new BankAccount();
account.deposit(100); // Ausgabe: Deposited: 100, New Balance: 100
account.withdraw(50); // Ausgabe: Withdrew: 50, New Balance: 50
// console.log(account.#balance); // Fehler: Private field '#balance' must be declared in an enclosing class


// 7. Abstrakte Klassen und Methoden
// JavaScript unterstützt keine abstrakten Klassen oder Methoden wie in anderen Programmiersprachen, aber du kannst dies dennoch simulieren, indem du Methoden definierst, die in abgeleiteten Klassen implementiert werden müssen.
//
// Beispiel (Simulierung):


class Animal {
    constructor(name) {
        if (new.target === Animal) {
            throw new Error('Cannot instantiate an abstract class');
        }
        this.name = name;
    }

    speak() {
        throw new Error('Method "speak()" must be implemented');
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Rex');
dog.speak(); // Ausgabe: Rex barks.
// const animal = new Animal('Generic'); // Fehler: Cannot instantiate an abstract class


// Zusammenfassung
// Klassen bieten eine saubere und einfache Syntax zur Erstellung von Objekten und zum Arbeiten mit objektorientierter Programmierung in JavaScript.
//     Mit Vererbung kannst du Klassen von anderen Klassen ableiten und deren Funktionalität erweitern.
//     Getter und Setter ermöglichen es, den Zugriff auf Eigenschaften zu kontrollieren und anzupassen.
//     Statische Methoden sind nützlich für Funktionen, die nicht an Instanzen gebunden sind.
//     Private Eigenschaften und Methoden bieten Kapselung und verhindern den Zugriff von außen.
//     Du kannst abstrakte Klassen und Methoden simulieren, um bestimmte Methoden in abgeleiteten Klassen zu erzwingen.
