// ES6: Use Destructuring Assignment to Assign Variables from Nested Objects

// Using an object similar to previous examples:
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

// Here's how to extract the values of object properties and assign them to variables with the same name:
const { johnDoe: { age, email }} = user;

console.log(age);
console.log(email);

// And here's how you can assign an object properties' values to variables with different names:
const { johnDoe: { age: userAge, email: userEmail }} = user;

console.log(userAge);
console.log(userEmail);


// Exercise: Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

// Only change code above this line
console.log(lowToday);
console.log(highToday);
