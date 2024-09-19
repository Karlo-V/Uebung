// 1. Grundlagen der Fetch API
// Die Fetch API basiert auf Promises und wird verwendet, um HTTP-Anfragen durchzuführen.
// Sie unterstützt verschiedene HTTP-Methoden wie GET, POST, PUT, DELETE und andere.
//
// a) Eine einfache GET-Anfrage
// Mit der Fetch API kannst du ganz einfach Daten von einem Server abrufen:


fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Antwort wird in ein JavaScript-Objekt umgewandelt
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));

// Erklärung:
//
//     fetch() führt die HTTP-Anfrage aus und gibt ein Promise zurück.
//     response.ok überprüft, ob die Antwort erfolgreich war (Status 200-299).
// response.json() wandelt die Antwort in ein JavaScript-Objekt um.
// catch() fängt Fehler ab, die während der Anfrage aufgetreten sind.



// b) Eine POST-Anfrage
// Um Daten an einen Server zu senden, kannst du eine POST-Anfrage durchführen. Dabei kannst du im fetch-Aufruf zusätzliche Optionen angeben.

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));

// Erklärung:
//
//     method: 'POST' gibt die HTTP-Methode an.
//     headers enthält Informationen über die Art der Daten, die gesendet werden (hier JSON).
// body enthält die Daten, die gesendet werden, als JSON-String.


// c) Fehlerbehandlung
// Bei der Arbeit mit der Fetch API ist es wichtig, die Fehlerbehandlung nicht zu vergessen. Die Fetch API behandelt Netzwerkfehler und HTTP-Fehler unterschiedlich.


fetch('https://jsonplaceholder.typicode.com/invalid-endpoint')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));


// 2. Verwenden von Async/Await mit Fetch
// Du kannst die Fetch API auch mit Async/Await verwenden, um den Code noch lesbarer und verständlicher zu machen.

async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchData();



// 3. Weitere Fetch API Optionen
// Die Fetch API bietet verschiedene Optionen, um die Anfrage weiter anzupassen:
//
//     a) Abbrechen von Anfragen mit AbortController
// Mit AbortController kannst du eine Fetch-Anfrage abbrechen, bevor sie abgeschlossen ist.


const controller = new AbortController();
const signal = controller.signal;

fetch('https://jsonplaceholder.typicode.com/posts', { signal })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        if (error.name === 'AbortError') {
            console.log('Fetch aborted');
        } else {
            console.error('Fetch error:', error);
        }
    });

// Abbruch der Anfrage
controller.abort();


// b) Arbeiten mit FormData
// Wenn du ein Formular an den Server senden möchtest, kannst du das FormData-Objekt verwenden.

let formData = new FormData();
formData.append('username', 'JohnDoe');
formData.append('avatar', fileInput.files[0]); // Beispiel für eine Datei
fetch('https://example.com/profile', {
    method: 'POST',
    body: formData
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));


// 4. Cross-Origin Resource Sharing (CORS)
// Wenn du mit der Fetch API Anfragen an eine andere Domäne stellst, kann es zu CORS-Problemen kommen. Der Server muss CORS-Header setzen, um die Anfrage zuzulassen.

fetch('https://api.example.com/data', {
    mode: 'cors' // Stellt sicher, dass die Anfrage CORS-konform ist
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));


// Zusammenfassung
// Die Fetch API ist eine moderne, auf Promises basierende API für Netzwerkanfragen in JavaScript.
// Sie ist flexibel und kann mit verschiedenen HTTP-Methoden verwendet werden, um Daten abzurufen oder zu senden.
// Fehlerbehandlung ist wichtig und kann sowohl über then/catch als auch über async/await erfolgen.
// Es gibt erweiterte Optionen wie AbortController, um Anfragen abzubrechen, oder FormData, um Formulare zu senden.
// Beachte CORS, wenn du Anfragen an andere Domänen stellst.