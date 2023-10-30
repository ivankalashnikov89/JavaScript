//----------------MY JAVASCRIPT JOURNEY

//to print output
console.log("Hello");

//-----------VARIABLES--------------


let name = "Ivan";
var address = "New York";
/*The difference between let and var 
is in the scope of the variables they create: 
Variables declared by let are only available 
inside the block where they're defined. 
Variables declared by var are available 
throughout the function in which they're declared*/
const yearOfBirth = 1989;
/*This means that the variable can be used just as 
any other variable of its type, but its value cannot 
be changed.*/


//---------------FUNCTIONS----------------

//Function declaration
// EX1 Defining a function that returns a sum
function add(a, b) {
    return a + b;
  }
  
  // Calling the function and storing the result
  const result = add(3, 4);
  console.log(result); // Output: 7

  // EX2 Defining a function
function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  // Calling the function
  greet("John"); // Output: Hello, John!
  greet("Alice"); // Output: Hello, Alice!



  // Function expression
const greet = function(name) {
    console.log(`Hello, ${name}!`);
  };
  
  // Calling the function
  greet("John"); // Output: Hello, John!
  greet("Alice"); // Output: Hello, Alice!



  /*Arrow functions are a concise way to write 
  functions in JavaScript, introduced in 
  ECMAScript 6 (ES6). They offer a more compact 
  syntax compared to traditional function expressions, 
  making them particularly useful for short, simple 
  functions. Here's how you define an arrow function: */

  // Traditional function expression
const add = function(a, b) {
    return a + b;
  };
  
  // Arrow function
  const addArrow = (a, b) => a + b;

  // Arrow function with no parameters
const sayHello = () => console.log("Hello!");

// Arrow function with one parameter
const square = x => x * x;

// Arrow function with multiple statements
const greet = name => {
  const greeting = `Hello, ${name}!`;
  console.log(greeting);
};

sayHello(); // Output: Hello!
console.log(square(5)); // Output: 25
greet("Alice"); // Output: Hello, Alice!


//-------------------ARRAYS---------------------
/* Arrays are a fundamental data structure in JavaScript 
used to store and manipulate collections of values. 
They are ordered lists of elements that you can access, 
modify, and manipulate in various ways.*/

// Creating an empty array
const emptyArray = [];

// Creating an array with values
const fruits = ["apple", "banana", "cherry"];

//Accessing Elements:
console.log(fruits[0]); // Output: "apple"
console.log(fruits[1]); // Output: "banana"

//Modifying Elements:
fruits[2] = "strawberry";
console.log(fruits); // Output: ["apple", "banana", "strawberry"]


/*Array Methods:
JavaScript provides a wide range of array methods for manipulating arrays.
 Some commonly used methods include:
push(): Add elements to the end of an array.
pop(): Remove the last element from an array.
shift(): Remove the first element from an array.
unshift(): Add elements to the beginning of an array.
concat(): Combine two or more arrays.
slice(): Extract a portion of an array.
splice(): Add or remove elements from any position in an array.
forEach(): Iterate over each element in an array.
map(): Create a new array by applying a function to each element in an existing array.
filter(): Create a new array with elements that pass a certain condition.
reduce(): Reduce an array to a single value by applying a function cumulatively.
sort(): Sort the elements of an array.
indexOf(): Find the index of the first occurrence of an element.
includes(): Check if an array includes a specific element.
length: Property that returns the number of elements in an array.
javascript
 */


//----------------OBJECTS------------------------

/*Objects are collections of key-value pairs, where 
the keys are strings (or symbols) and the values can be 
of any data type, including other objects */

// Creating an empty object
const persons = {};

// Creating an object with properties
const personTwo = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

//Constructor Function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
const personThree = new Person("John", "Doe", 30);

//ES6 Class Syntax
class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  }
  
const person = new Person("John", "Doe", 30);
  
//Accessing Object Properties
console.log(person.firstName); // Output: "John"
console.log(person["lastName"]); // Output: "Doe"

//Modifying Object Properties
person.age = 35;
person["firstName"] = "Alice";

//Adding and Deleting Object Properties
person.city = "New York"; // Adding a new property
delete person.age; // Deleting the "age" property

//Object Destructuring
const { firstName, lastName } = person;
console.log(firstName); // Output: "John"
console.log(lastName); // Output: "Doe"


//Object Methods
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  console.log(person.fullName()); // Output: "John Doe"



  
//-----------------DOM--------------

/*The Document Object Model (DOM) is a programming 
interface for web documents. It represents the 
structure of an HTML or XML document as a tree-like 
data structure in which each node represents a part 
of the document, such as elements, attributes, and text.
The DOM provides a way for programmers to interact 
with and manipulate web pages using JavaScript.*/

//Accessing DOM Elements
// Get an element by its ID
const element = document.getElementById("myElement");

// Get elements by class name
const elementsByClass = document.getElementsByClassName("myClass");

// Get elements by tag name
const elementsByTag = document.getElementsByTagName("div");


//Modifying Elements
element.textContent = "New text content";

//Creating and Appending Elements
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";

document.body.appendChild(newParagraph);


//Evant Handling
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
  alert("Button clicked!");
});

//Manipulating CSS
element.style.color = "red";
element.classList.add("highlight");


//Manipulating Attributes
const link = document.getElementById("myLink");
const hrefValue = link.getAttribute("href");
link.setAttribute("href", "https://example.com");

//Removing Elements
const parent = document.getElementById("parentElement");
const child = document.getElementById("childElement");
parent.removeChild(child);


//-----------------ES6---------------------------

//1.Arrow Functions: 
/*Arrow functions provide a concise syntax for defining 
functions, especially for one-liners. They also have 
a lexically scoped this, making them useful for certain 
callback scenarios.*/
const add = (a, b) => a + b;

//2.Block-Scoped Variables: 
/*let and const allow for block-scoped variable 
declarations, addressing issues with var. const is 
used for constants, and let for mutable variables.*/
let x = 10;
const PII = 3.14;

//3.Template Literals: 
/*Template literals enable string interpolation and 
multiline strings using backticks (`).*/
const yourName = "Alice";
const greeting = `Hello, ${name}!`;

//4.Destructuring: 
/*Destructuring enables you to extract values from 
objects and arrays into distinct variables.*/
const { yourFirstName, yourLastName } = person;
const [first, second] = numbers;

//5.Spread and Rest Operators: 
/*Spread (...) can be used to spread elements in an 
array or properties of an object. The rest parameter 
allows you to collect multiple arguments into an array.*/
const arr = [1, 2, 3];
const copy = [...arr];
function sum(...args) { /* ... */ }

//6.Default Parameters: 
/*You can set default values for function parameters.*/
function greet(name = "Guest") { /* ... */ }

//7.Classes: 
/*ES6 introduced a class syntax that simplifies 
object-oriented programming in JavaScript.*/
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
//8.Modules: 
/*ES6 introduced native support for modules, allowing 
you to encapsulate and organize your code into reusable 
units.*/
// Exporting in a module
export function add(a, b) { /* ... */ }

// Importing in another module
import { add } from "./math";

//9.Promises: 
/*Promises provide a better way to work with asynchronous 
code, improving callback hell and making it easier to 
handle errors.*/
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

//10.Symbol: 
/*Symbols are a new primitive data type used for creating 
unique property keys in objects.*/
const uniqueKey = Symbol("unique");



//--------------CLOSURES AND SCOPES---------------

/*Closures and scopes are fundamental concepts 
in JavaScript that play a crucial role in how 
variables are accessed and maintained in your code. */

//Scopes

/*A scope in JavaScript refers to the context in which 
variables and functions are declared and accessed. 
JavaScript has two main types of scope */

//Global Scope
/*Variables and functions declared outside of any 
function or block have global scope. They can be 
accessed from anywhere in your code */
const globalVar = "I'm global";

function globalFunction() {
  console.log(globalVar); // Accessible
}

//Local(Function) Scope
/*Variables declared inside a function have local scope. 
They can only be accessed within that function. */
function localFunction() {
    const localVar = "I'm local";
    console.log(localVar); // Accessible
  }

/*Scopes are hierarchical, meaning that an inner scope 
has access to variables in outer scopes, but not vice 
versa. This concept is known as "lexical scoping." */
const outerVar = "I'm outer";

function outerFunction() {
    const innerVar = "I'm inner";
  
    console.log(outerVar); // Accessible
    console.log(innerVar); // Accessible
  }
  
console.log(outerVar); // Accessible
console.log(innerVar); // Not accessible (ReferenceError)
  
//Closures

/*A closure is a function that "encloses" its own lexical
scope, including the variables and functions declared in 
that scope, even after the outer function has finished 
executing. In other words, a closure allows a function 
to maintain access to its parent's scope, even when 
the parent function is no longer in the call stack. */
function outerFunction() {
    const outerVar = "I'm from outer";
  
    function innerFunction() {
      console.log(outerVar); // Accesses outerVar from the parent's scope
    }
  
    return innerFunction; // Return the inner function
  }
  
const closure = outerFunction(); // Store the inner function (closure)
closure(); // Calls the inner function, which still has access to outerVar

  


//-----------------RROMISES---------------------

/*Promises in JavaScript are a powerful tool for 
managing asynchronous operations. They help simplify 
and handle asynchronous code in a more organized and 
readable manner. Promises represent a value that might 
not be available yet but will be at some point in the f
uture, allowing you to work with asynchronous operations 
like network requests, file handling, and timeouts */

/*Promise States:
Promises have three states:

PENDING: The initial state when a promise is created, 
and the asynchronous operation is in progress.
FULLFILLED: The state when the asynchronous operation is 
completed successfully, and the promise has a resolved 
value.
REJECTED: The state when an error occurs during 
the asynchronous operation, and the promise has 
a reason for failure (an error message or an exception). */

//Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Operation succeeded");
      } else {
        reject("Operation failed");
      }
    }, 1000);
  });

//Consuming a Promise
/*Once you have a promise, you can use the then and 
catch methods to handle its resolution or rejection: */

//THEN:Used for handling the resolved value.
myPromise.then(result => {
    console.log("Success:", result);
  });

//CATCH:Used for handling errors.
myPromise.catch(error => {
    console.error("Error:", error);
  });
  
//Chaining Promises
/*Promises can be chained together to perform a sequence 
of asynchronous operations. You can return a new promise 
inside a then block to create a chain. */
const firstPromise = fetch("https://api.example.com/data");

firstPromise
  .then(response => response.json())
  .then(data => {
    console.log("Data fetched:", data);
    return fetch(data.nextUrl);
  })
  .then(response => response.json())
  .then(nextData => {
    console.log("Next data fetched:", nextData);
  })
  .catch(error => {
    console.error("Error:", error);
  });


/*Promises are a vital part of modern JavaScript for 
handling asynchronous code in a more structured and 
manageable way. They provide a cleaner alternative 
to callback functions and help improve code readability 
and maintainability. */


//-------------------ASYNC/AWAIT----------------
/*async/await is a powerful feature in JavaScript 
introduced with ES2017 (ES8) that simplifies 
asynchronous code and makes it more readable and easier 
to work with. async/await is built on top of Promises 
and provides a more natural way to write asynchronous 
code that appears synchronous. */

//ASYNC Function
/*The async keyword is used to declare a function as 
asynchronous. An async function always returns a Promise,
which can resolve to a value or reject with an error. 
Inside an async function, you can use the await keyword 
to pause the execution until a Promise is resolved. */
async function fetchData() {
    // Asynchronously fetch data
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
  }

//AWAIT keyword
/*The await keyword is used inside an async function 
to pause the execution of that function until a Promise 
is settled (either resolved or rejected). It allows you 
to work with Promises in a more linear and 
synchronous-looking manner. */

//Error Handling
/*You can use try/catch blocks to handle errors in async 
functions. If an error occurs during the execution of 
an await expression, it will reject the Promise, and you 
can catch and handle the error using catch. */
async function fetchData() {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  
//Using async/await with Promises:
/*async/await can be used with existing Promises. 
If you have a function that returns a Promise, 
you can await that Promise inside an async function.*/
async function someAsyncFunction() {
    const result = await somePromiseFunction();
    // ...
  }

//Sequential and Parallel Execution
/*async/await makes it easy to perform asynchronous 
operations sequentially, where one operation depends 
on the result of the previous one. It also simplifies 
parallel execution when multiple asynchronous operations 
can run concurrently. */
async function fetchDataSequentially() {
    const data1 = await fetchData1();
    const data2 = await fetchData2();
    return [data1, data2];
  }
  
async function fetchDataConcurrently() {
    const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
    return [data1, data2];
  }
  
  
//Benefits:
/*Improved readability: async/await makes asynchronous 
code look more like synchronous code, which can be 
easier to understand.
Error handling: It simplifies error handling with 
try/catch, making it easier to handle and propagate 
errors.
Sequential and parallel execution: It provides 
flexibility for both sequential and parallel 
asynchronous operations.
Works well with Promises: You can use async/await 
alongside existing Promise-based code.
async/await is a valuable addition to JavaScript 
that simplifies asynchronous programming and makes 
it more accessible to developers, reducing the 
complexity often associated with handling asynchronous 
tasks.*/


//---------------MODULES--------------


/*In JavaScript, modules are a way to organize and 
encapsulate code into reusable, self-contained units. 
Modules help manage code complexity, improve maintainability, 
and prevent naming conflicts. ES6 (ECMAScript 2015) introduced 
native support for modules in JavaScript. Here's an overview of J
avaScript modules:

Creating a Module:
To create a module, you define a file with JavaScript code and use 
the export keyword to specify which variables, functions, or classes 
should be made available for other modules to import.*/

//module.js:
// Exporting variables, functions, or classes
export const PI = 3.14159265359;

export function square(x) {
  return x * x;
}

export class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return PI * this.radius * this.radius;
  }
}

//Importing a Module:
/*To use the code from a module in another file, 
you use the import statement to bring in the exported 
members (variables, functions, or classes) into your 
current scope.*/

//app.js:
// Importing from the module
import { PI, square, Circle } from './module';

console.log(PI); // Output: 3.14159265359
console.log(square(4)); // Output: 16
const myCircle = new Circle(3);
console.log(myCircle.area()); // Output: 28.274333882308138


//Exporting Default:
/*You can export a default value from a module. This is 
useful when you want to export a single value, such as a 
configuration object or a function, as the default export.*/

//module.js:
// Exporting a default value
const defaultExport = {
  key1: 'value1',
  key2: 'value2'
};

export default defaultExport;

//app.js:
// Importing the default export
import myDefaultExport from './module';

console.log(myDefaultExport.key1); // Output: "value1"


//Module Types:
//There are two types of modules in JavaScript:

/*ESM (ECMAScript Modules): These are the native 
JavaScript modules introduced in ES6 and are commonly 
used in modern web development. You can use ESM in both 
browser and Node.js environments by using the .mjs file 
extension for module files.
CommonJS Modules: CommonJS is an older module system 
used in Node.js. You can use require() to import CommonJS 
modules, and they typically use the .js file extension. 
However, they are not supported natively in browsers.


Module Bundlers:
In complex web applications, you often use module bundlers 
like Webpack, Rollup, or Parcel to bundle multiple modules 
into a single file for production. These bundlers also 
handle transpilation (e.g., converting ES6 code to ES5) 
and other optimizations.

Modules are a fundamental part of modern JavaScript development, 
allowing you to structure your code in a more organized and 
maintainable way while preventing global scope pollution. They 
make it easier to manage dependencies and promote code reusability.*/