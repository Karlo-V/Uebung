// Q1. What is the difference between == and ===?

// == vergleicht nur die Werte und führt eine Typumwandlung durch.
// === vergleicht sowohl die Werte als auch die Datentypen.


// Q2. What is the difference between let, const and var?

// var: Function-scoped, can be redeclared and updated.
var aVar = 10;
var aVar = 20; // No error

// let: Block-scoped, can be updated but not redeclared in the same scope.
let aLet = 10;
aLet = 20; // Allowed
// let aLet = 30; // Error: can't redeclare in the same scope

// const: Block-scoped, cannot be updated or redeclared. Must be initialized.
const aConst = 10;
// aConst = 20; // Error: can't reassign a constant


// Q3. What does hoisting mean?

// Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their scope.

// Example with var:
console.log(hoistVar); // undefined (due to hoisting)
var hoistVar = 5;

// Example with let/const:
try {
    console.log(hoistLet); // This will throw an error because of TDZ
} catch (error) {
    console.error(error.message); // Catch the error and log the message
}

let hoistLet = 10; // Declaration and initialization



// Q4. What is the difference between null and undefined?

let exampleNull = null; // null: intentional absence of value
let exampleUndefined;   // undefined: variable declared but not assigned a value

console.log(exampleNull); // null
console.log(exampleUndefined); // undefined


// Q5. What is the output of console.log(null == undefined) and console.log(null === undefined)?

console.log(null == undefined);  // true (loosely equal)
console.log(null === undefined); // false (strictly not equal)


// Q6. What is the output of const x = undefined; if (x) { console.log('yes'); } else { console.log('no') }?

const undefinedVar = undefined;
if (undefinedVar) {
    console.log('yes'); // will not execute
} else {
    console.log('no');  // "no" because undefined is falsy
}


// Q7. What primitive types does JavaScript have?

let stringType = "hello";    // string
let numberType = 42;         // number
let booleanType = true;      // boolean
let nullType = null;         // null
let undefinedType;           // undefined
let symbolType = Symbol();   // symbol
let bigIntType = 123n;       // bigint


// Q8. What is the object type in JavaScript?

let exampleObject = {           // Object: collection of key-value pairs
    name: "Alice",
    age: 30
};
console.log(exampleObject);


// Q9. What are truthy and falsy values in JavaScript?

if ("non-empty") console.log("truthy"); // Non-empty string is truthy
if (0) console.log("falsy");            // 0 is falsy


// Q10. What does !!x do?

let nonEmptyValue = "text";
console.log(!!nonEmptyValue);   // true, converts to boolean (truthy value)
let emptyValue = "";
console.log(!!emptyValue);      // false, converts to boolean (falsy value)


// Q11. What is the difference between const x = 1, const x = Number(1), const x = new Number(1)?

const primitiveNumber = 1;              // A primitive number.
const boxedNumber = Number(1);         // Also a primitive number (same as primitiveNumber).
const numberObject = new Number(1);    // An object (Number object, not primitive).

console.log(primitiveNumber === boxedNumber); // true (both are primitive numbers)
console.log(primitiveNumber === numberObject); // false (numberObject is an object)


// Q12. What is the difference between parseInt('5x') and Number('5x')?

console.log(parseInt('5x')); // 5 (stops parsing at the first non-numeric character)
console.log(Number('5x'));   // NaN (fails completely because '5x' is not a valid number)


// Q13. const x = { a: 1 }; const y = { a: 1 }; console.log(x === y); What will be the output?

const object1 = { a: 1 };
const object2 = { a: 1 };
console.log(object1 === object2); // false (different objects in memory)


// Q14. const x = { a: 1 }; const y = x; console.log(x === y); What will be the output?

const sameObject1 = { a: 1 };
const sameObject2 = sameObject1;
console.log(sameObject1 === sameObject2); // true (same object reference)


// Q15. const arr = [1, 2, 3]; arr[0] = 4; console.log(arr); What will be the output?

const array = [1, 2, 3];
array[0] = 4;
console.log(array); // [4, 2, 3] (arrays are mutable even if declared with const)


// Q16. const obj = { a: 1, b: 2 }; obj.a = 3; console.log(obj); What will be the output?

const mutableObject = { a: 1, b: 2 };
mutableObject.a = 3;
console.log(mutableObject); // { a: 3, b: 2 } (object properties can be changed even with const)


// Q17. What is the output of console.log(1 + '2')?

console.log(1 + '2'); // "12" (number 1 is coerced to a string and concatenated)


// Q18. What is the string template Hello, my name is ${name} and I like ${hobby} doing?

let nameString = "John";
let hobbyString = "reading";
console.log(`Hello, my name is ${nameString} and I like ${hobbyString}`);
// Output: "Hello, my name is John and I like reading"


// Q19. How to check if a variable is from a specific type?

let valueCheck = 42;
console.log(typeof valueCheck); // "number" (checks the type of the variable)
console.log(valueCheck instanceof Number); // false (checks if it's an instance of a specific constructor)


// Q20. What is the difference between for, for...in, for...of?

// for: Standard loop, typically used with numeric indices.
for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}

// for...in: Iterates over the keys (property names) of an object.
const objectInLoop = { a: 1, b: 2 };
for (let key in objectInLoop) {
    console.log(key); // "a", "b"
}

// for...of: Iterates over the values of an iterable object (like arrays).
const arrayOfLoop = [10, 20, 30];
for (let value of arrayOfLoop) {
    console.log(value); // 10, 20, 30
}


// Q21. What is the typeof operator in JavaScript?

// The `typeof` operator returns the data type of a variable as a string.
console.log(typeof 42);          // "number"
console.log(typeof 'hello');     // "string"
console.log(typeof undefined);   // "undefined"
console.log(typeof {});          // "object"


// Q22. What is type coercion in JavaScript?

// Type coercion is the automatic or implicit conversion of values from one type to another.
console.log('5' - 1); // 4 (string '5' is coerced to number)
console.log('5' + 1); // "51" (number 1 is coerced to a string)


// Q23. What is NaN? When does it occur? How to check if a value is NaN?

// NaN stands for "Not-a-Number". It occurs when a mathematical operation fails or results in an undefined value.
console.log(Math.sqrt(-1)); // NaN (square root of a negative number)
console.log(0 / 0);         // NaN

// To check if a value is NaN:
console.log(isNaN(NaN)); // true
console.log(Number.isNaN(NaN)); // true (a stricter check)


// Q24. What is the strict mode in JavaScript, and how to enable it? Is it still relevant?

// Strict mode is a way to enforce stricter parsing and error handling in your JavaScript code.
// It catches common coding mistakes and prevents certain unsafe actions.
"use strict"; // Enable strict mode by placing this at the top of a script or function.

function strictModeExample() {
    "use strict";
    // code here
}

// Yes, strict mode is still relevant as it helps in writing safer and more optimized JavaScript code.


// E1. Write a function isNumber that takes a parameter and returns true if the parameter is a number, otherwise false.

function isNumber(param) {
    return typeof param === 'number' && !isNaN(param); // Also ensures it's not NaN
}

console.log(isNumber(42));     // true
console.log(isNumber('42'));   // false
console.log(isNumber(NaN));    // false


// ------------------------------------------------------------------------------------------------------------------------


// Short Circuit Evaluation (&&), Ternary Operator (?:)


// Q1. What does this function do?

function renderOpenStatus(isOpen) {
    return isOpen ? `<p>Open</p>` : `<p>Close</p>`;
}

// This function returns a string "<p>Open</p>" if `isOpen` is true, otherwise "<p>Close</p>".


// # Q2. What does this function do?

    function renderFooter(isOpen) {
        return `<footer>${isOpen && `<p>Open</p>`}</footer>`;
    }

// This function returns a footer element. If `isOpen` is true, it returns "<footer><p>Open</p></footer>", otherwise "<footer></footer>" (empty).


// # Q3. In what scenarios is the && operator useful?

    // The `&&` operator is useful when you want to execute the second expression only if the first is true. It is often used for conditional rendering or checking multiple conditions.

    let isAuthenticated = true;
console.log(isAuthenticated && "Welcome!"); // Output: "Welcome!" (only executed if `isAuthenticated` is true)


// Q4. In what scenarios is the ?: operator useful?

// The `?:` (ternary) operator is useful for concise conditional expressions where you need to return one of two values based on a condition.

let ageCheck = 20;
let votingStatus = ageCheck >= 18 ? "You can vote" : "Too young";
console.log(votingStatus); // Output: "You can vote"


// E1. Write a function displayCart that takes a cart object { items: Array } and returns a footer displaying the total amount if there are items in the cart, otherwise "Your cart is empty."

function displayCart(cart) {
    return cart.items.length > 0
        ? `<footer>Total items: ${cart.items.length}</footer>`
        : "Your cart is empty.";
}

const cartWithItems = { items: [1, 2, 3] };
const emptyCart = { items: [] };

console.log(displayCart(cartWithItems)); // "<footer>Total items: 3</footer>"
console.log(displayCart(emptyCart)); // "Your cart is empty."


// ------------------------------------------------------------------------------------------------------------------------

// Optional chaining (?.), Nullish coalescing operator (??)


// Q1. How does the optional chaining operator ?. work?

// The optional chaining operator (?.) allows you to safely access deeply nested properties without having to check each level for null or undefined.
const userObject = { name: 'Alice', address: { city: 'Wonderland' } };
console.log(userObject?.address?.city); // 'Wonderland' (safely accesses nested properties)

// If any part of the chain is null or undefined, it will short-circuit and return undefined without throwing an error.


// Q2. How does the nullish coalescing operator ?? work?

// The nullish coalescing operator (??) returns the right-hand side operand when the left-hand side operand is null or undefined.
const defaultValue = null;
console.log(defaultValue ?? 'default'); // 'default' (nullish value, so fallback is used)

const numberValue = 0;
console.log(numberValue ?? 42); // 0 (not null or undefined, so numberValue is used)


// Q3. What will be the output? Explain the lines.

// Beispielobjekt
const anotherUser = { name: 'Bob' }; // Kein `profile` in `anotherUser`

// Versuche, auf `profile.age` zuzugreifen
console.log(anotherUser.profile); // undefined (profile existiert nicht)

// Vermeidung von Fehlern bei Destrukturierung
const profile = anotherUser.profile || {}; // Falls `profile` undefined ist, setze es auf ein leeres Objekt
const { age } = profile; // Nun wird age von einem leeren Objekt destrukturiert

console.log(age); // undefined (weil `profile` leer ist)

// Optional Chaining und Nullish Coalescing Operator verwenden
console.log(anotherUser?.profile?.age);       // undefined (optional chaining gibt undefined zurück, weil profile undefiniert ist)
console.log(anotherUser?.profile?.age ?? 'Unknown'); // 'Unknown' (nullish coalescing liefert 'Unknown' bei undefined)

console.log(anotherUser?.address?.city);     // undefined (address existiert nicht, daher undefined)
console.log(anotherUser?.address?.city ?? 'Unknown'); // 'Unknown' (nullish coalescing liefert 'Unknown' bei undefined)
console.log(anotherUser?.address?.city ?? 'Vienna'); // 'Unknown' (address existiert nicht, daher 'Unknown')

// Zusätzliche Testfälle
console.log(anotherUser.address?.city ?? 'Vienna'); // 'Vienna' (address existiert nicht, daher 'Vienna')



// Q4. Explain the lines.

let someUser;
someUser.greet();        // Error: Cannot read property 'greet' of undefined (someUser is undefined)
someUser?.greet();       // No error, returns undefined (optional chaining skips the method call)

// someUser = "Lisa";      // someUser is a string, not an object with a greet method
// someUser.greet();      // Error: someUser.greet is not a function (string does not have greet method)

// The `?.` operator avoids errors when attempting to call methods or access properties on undefined or null values.


// Q5. What does this function do?

function getNumberOfProducts(shop) {
    return shop?.products?.length ?? 0; // Returns the length of products if exists, otherwise returns 0
}

const shopWithProducts = { products: [1, 2, 3] };
const shopWithoutProducts = { };

console.log(getNumberOfProducts(shopWithProducts)); // 3
console.log(getNumberOfProducts(shopWithoutProducts)); // 0


// Q6. What does this function do?

function getProducts(shop) {
    return shop?.products ?? []; // Returns the products array if it exists, otherwise returns an empty array
}

const shopWithProducts2 = { products: [1, 2, 3] };
const shopWithoutProducts2 = { };

console.log(getProducts(shopWithProducts2)); // [1, 2, 3]
console.log(getProducts(shopWithoutProducts2)); // []


// # Q7. When does the error Uncaught TypeError: xxx is undefined occur? Make an example.

// This error occurs when trying to access a property or call a method on an undefined value.
    let somePerson;
console.log(somePerson.name); // Error: Cannot read property 'name' of undefined

// Example: Accessing `name` property of `somePerson` when `somePerson` is undefined.


// Q8. When does the error Uncaught TypeError: xxx.yyy is not a function occur? Make an example.

// This error occurs when trying to call a method on something that is not a function.
let objWithFunc = { func: "not a function" };
objWithFunc.func(); // Error: objWithFunc.func is not a function

// Example: Calling `func` method on `objWithFunc` where `func` is a string, not a function.


// # E1. Write a function getCity that takes a user object { address: { city: String } } and returns the city if it exists, otherwise "Unknown".

    function getCity(userObject) {
    return userObject?.address?.city ?? 'Unknown'; // Uses optional chaining and nullish coalescing to provide default value
}

const userWithCity = { address: { city: 'New York' } };
const userWithoutCity = { address: {} };
const userNoAddress = {};

console.log(getCity(userWithCity)); // 'New York'
console.log(getCity(userWithoutCity)); // 'Unknown' (city does not exist)
console.log(getCity(userNoAddress)); // 'Unknown' (address does not exist)
