// ES6: Use Destructuring Assignment to Assign Variables from Objects

// Using the same object from the last example, here's how you can give new variable names in the assignment:
const user = { name: 'John Doe', age: 34 };

const { name: userName, age: userAge } = user;

console.log(userName, userAge); // userName = 'John Doe', userAge = 34


// Exercise: Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// Only change code above this line

console.log(highToday); // should be 77
console.log(highTomorrow); // should be 80
