// ES6: Write Concise Object Literal Declarations Using Object Property Shorthand

// Consider the following code:
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
console.log(getMousePosition());

// Here is the same function from above rewritten to use this new syntax:
const getMousePosition2 = (z, w) => ({ z, w });
console.log(getMousePosition2());


// Exercise: Use object property shorthand with object literals to create and return an object with name, age and gender properties.
const createPerson = (name, age, gender) => {
  "use strict";
  // Only change code below this line
  return {
    // name: name,
    // age: age,
    // gender: gender
    name,
    age,
    gender
  };
  // Only change code above this line
};
console.log(createPerson());
