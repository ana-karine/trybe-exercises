// ES6: Use the Spread Operator to Evaluate Arrays In-Place

// The ES5 code below uses apply() to compute the maximum value in an array:
var arr5 = [6, 89, 3, 45];
var maximus5 = Math.max.apply(null, arr5); // returns 89
console.log(maximus5);

// The spread operator makes this syntax much better to read and maintain.
const arr6 = [6, 89, 3, 45];
const maximus6 = Math.max(...arr6); // returns 89
console.log(maximus6);


// Exercise: Copy all contents of arr1 into another array arr2 using the spread operator.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = [...arr1];  // Change this line

console.log(arr2);
