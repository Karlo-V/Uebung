// 5. Higher-Order Functions
// Eine Higher-Order Function ist eine Funktion, die eine andere Funktion als Argument nimmt oder eine Funktion zurückgibt.


let numbers = [1, 2, 3, 4, 5];

// `map` ist eine Higher-Order Function
let doubled = numbers.map(x => x * 2);

console.log(doubled); // Ausgabe: [2, 4, 6, 8, 10]



// 2 te Variante

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