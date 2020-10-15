// ES6: Use the Rest Parameter with Function Parameters

// The rest parameter eliminates the need to check the args array and 
// allows us to apply map(), filter() and reduce() on the parameters array.
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.


// Exercise: Modify the function sum using the rest parameter in such a way that 
// the function sum is able to take any number of arguments and return their sum.

// const sum = (x, y, z) => {
//   const args = [x, y, z];
//   return args.reduce((a, b) => a + b, 0);
// }
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6
