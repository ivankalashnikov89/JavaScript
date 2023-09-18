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