// ES6: Set Default Parameters for Your Functions

// The default parameter kicks in when the argument is not specified (it is undefined).
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous


// Exercise: Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
