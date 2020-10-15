// ES6: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

// In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.
// The result is similar to Array.prototype.slice(), as shown below:

const [x, y, ...z] = [1, 2, 3, 4, 5, 7];
console.log(x, y); // 1, 2
console.log(z); // [3, 4, 5, 7]


// Exercise: Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // Only change code below this line
  const [a, b, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
