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
