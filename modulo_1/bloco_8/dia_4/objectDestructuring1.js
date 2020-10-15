// ES6: Use Destructuring Assignment to Extract Values from Objects

// Consider the following ES5 code:
const user5 = { name5: 'John Doe', age5: 34 };

const extractName5 = user5.name5; // name = 'John Doe'
const extractAge5 = user5.age5; // age = 34

console.log(extractName5);
console.log(extractAge5);

// Here's an equivalent assignment statement using the ES6 destructuring syntax:
const user6 = { name6: 'John Doe', age6: 34 };

const { name6, age6 } = user6;

console.log(name6);
console.log(age6);


// Exercise: Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

const {today, tomorrow} = HIGH_TEMPERATURES;

// Only change code above this line

// console.log(yesterday); // should be not defined
console.log(today); // should be 77
console.log(tomorrow); // should be 80
