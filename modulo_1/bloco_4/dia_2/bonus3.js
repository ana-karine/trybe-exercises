let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

// Cada valor do novo array deverá ser igual ao valor correspondente 
// do array anterior multiplicado pelo próximo. 
// Caso não haja próximo valor, a multiplicação deverá ser feita por 2. 
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i + 1]) {
    newArray.push(numbers[i] * numbers[i + 1]);
  } else {
    newArray.push(numbers[i] * 2);
  }
}

console.log(newArray);