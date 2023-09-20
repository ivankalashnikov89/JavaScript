//My JavaScript Journey

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

  