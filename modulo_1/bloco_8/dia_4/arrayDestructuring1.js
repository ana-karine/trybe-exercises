// ES6: Use Destructuring Assignment to Assign Variables from Arrays

// Destructuring an array lets us do exactly that:
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

// The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
const [x, y,,, z] = [1, 2, 3, 4, 5, 6];
console.log(x, y, z); // 1, 2, 5


// Exercise: Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
let m = 8, n = 6;
// Only change code below this line
[m, n] = [n, m];

console.log(m); // 6
console.log(n); // 8
