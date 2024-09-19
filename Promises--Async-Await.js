// 1. Promises
// Ein Promise ist ein Objekt, das einen Wert darstellt, der jetzt, später oder möglicherweise nie verfügbar sein wird.
// Es dient dazu, asynchronen Code zu handhaben und eine Alternative zu Callbacks zu bieten.
//
// a) Grundstruktur eines Promises
// Ein Promise kann sich in einem von drei Zuständen befinden:
//
//     Pending: Das Promise wurde erstellt, die asynchrone Operation ist aber noch nicht abgeschlossen.
//     Fulfilled: Die asynchrone Operation wurde erfolgreich abgeschlossen, und das Promise hat einen Wert.
//     Rejected: Die asynchrone Operation ist fehlgeschlagen, und das Promise hat einen Grund für das Scheitern.
//     Hier ist ein einfaches Beispiel für ein Promise:

let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("The operation was successful!");
    } else {
        reject("The operation failed.");
    }
});

promise
    .then(result => {
        console.log(result); // Ausgabe: "The operation was successful!"
    })
    .catch(error => {
        console.log(error); // Wird im Falle eines Fehlers ausgeführt
    });



// b) Verwenden von then und catch
// Ein Promise wird typischerweise mit den Methoden then und catch verwendet:
//
//     then: Wird aufgerufen, wenn das Promise erfolgreich aufgelöst wird (resolved). Du kannst eine Funktion bereitstellen, die das Ergebnis verarbeitet.
//     catch: Wird aufgerufen, wenn das Promise abgelehnt wird (rejected). Hier kannst du den Fehler verarbeiten.


let fetchData = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
        if (success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Failed to fetch data.");
        }
    }, 2000);
});

fetchData
    .then(data => {
        console.log(data); // Ausgabe nach 2 Sekunden: "Data fetched successfully!"
    })
    .catch(error => {
        console.log(error); // Wird im Falle eines Fehlers ausgeführt
    });


// c) finally
// Die finally-Methode wird immer ausgeführt, unabhängig davon, ob das Promise aufgelöst oder abgelehnt wurde.

fetchData
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => console.log("Operation completed."));
// Ausgabe: "Operation completed." wird immer ausgeführt




// 2. Async/Await
// Async/Await ist eine moderne Art, mit Promises zu arbeiten. Es ermöglicht dir,
// asynchronen Code zu schreiben, der sich wie synchroner Code liest, was ihn lesbarer und einfacher zu handhaben macht.
//
// a) Grundlagen von Async/Await
// Um await verwenden zu können, muss eine Funktion mit dem Schlüsselwort async deklariert werden. Der await-Operator "wartet" auf die Auflösung eines Promises.


async function fetchData1() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched!"), 2000);
    });

    let result = await promise; // Wartet, bis das Promise aufgelöst wird
    console.log(result); // Ausgabe nach 2 Sekunden: "Data fetched!"
}

fetchData1();


// b) Error-Handling mit Async/Await
// Error-Handling mit async/await erfolgt typischerweise durch try...catch Blöcke:


async function fetchData2() {
    try {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => reject("Failed to fetch data."), 2000);
        });

        let result = await promise;
        console.log(result);
    } catch (error) {
        console.log(error); // Ausgabe nach 2 Sekunden: "Failed to fetch data."
    }
}

fetchData2();



// c) Warten auf mehrere Promises mit Promise.all
// Mit Promise.all kannst du auf mehrere Promises gleichzeitig warten und sicherstellen, dass alle abgeschlossen sind, bevor du weitergehst.


async function fetchMultipleData() {
    let promise1 = new Promise(resolve => setTimeout(() => resolve("Data 1"), 1000));
    let promise2 = new Promise(resolve => setTimeout(() => resolve("Data 2"), 2000));

    let results = await Promise.all([promise1, promise2]);
    console.log(results); // Ausgabe nach 2 Sekunden: ["Data 1", "Data 2"]
}

fetchMultipleData();


// d) Warten auf das erste Promise mit Promise.race
// Promise.race gibt das erste Promise zurück, das abgeschlossen wird, egal ob es aufgelöst oder abgelehnt wird.

async function racePromises() {
    let promise1 = new Promise(resolve => setTimeout(() => resolve("Data 1"), 3000));
    let promise2 = new Promise(resolve => setTimeout(() => resolve("Data 2"), 1000));

    let result = await Promise.race([promise1, promise2]);
    console.log(result); // Ausgabe nach 1 Sekunde: "Data 2"
}

racePromises();

// Zusammenfassung
// Promises sind eine Möglichkeit, asynchronen Code zu handhaben, ohne auf Callback-Hölle zurückzugreifen. Sie haben drei Zustände: pending, fulfilled und rejected.
// Async/Await ist eine modernere und einfachere Syntax für die Arbeit mit Promises, die den Code lesbarer macht, da er wie synchroner Code aussieht.
// try...catch wird in Kombination mit Async/Await verwendet, um Fehler zu behandeln.
// Promise.all und Promise.race sind Methoden, um auf mehrere Promises gleichzeitig zu warten.




