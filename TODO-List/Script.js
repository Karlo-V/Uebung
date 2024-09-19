let valuesArray = [];

// Funktion zum Hinzufügen eines Werts zum Arrayfalls das Eingabefeld nicht leer ist
function addToArray() {
    let inputValue = document.getElementById('inputText').value.trim();
    if (inputValue) { // schauen ob lerr
        valuesArray.push(inputValue);
        document.getElementById('inputText').value = '';
        displayArray();
    } else {
        alert("Bitte gib einen Wert ein.");
    }
}

// Funktion zur Anzeige des Arrays als Liste mit Checkboxen und Lösch-Buttons
function displayArray() {
    let arrayOutput = document.getElementById('arrayOutput'); // Holt das ulElement, in dem das Array angezeigt wird
    arrayOutput.innerHTML = ''; // Leert das ul Element vor dem Hinzufügen neuer Listeneinträge
    valuesArray.forEach((value, index) => {
        let li = document.createElement('li');

        // Setzt Checkbox, Text und Lösch-Button
        li.innerHTML = `<input type="checkbox"> ${value} 
                        <button onclick="deleteFromArray(${index})">Löschen</button>`;
        arrayOutput.appendChild(li);
    });
}

// Funktion zum Löschen eines Eintrags aus dem Array anhand des Indexes
function deleteFromArray(index) {
    valuesArray.splice(index, 1);
    displayArray(); // Aktualisiert die Anzeige des Arrays
}

// Funktion zur alphabetischen Sortierung des Arrays und zur Aktualisierung der Anzeige
function sortArray() {
    valuesArray.sort((a, b) => a.localeCompare(b));
    displayArray(); // Aktualisiert
}
