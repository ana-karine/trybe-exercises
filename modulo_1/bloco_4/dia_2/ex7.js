let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// O valor da variável smallestNumber poderia ser qualquer um, 
// desde que fosse maior que o maior número do array numbers. 
// Caso atribuíssemos o valor 1 para a variável, nosso algoritmo 
// nunca acharia um número menor que 1 no array.
let smallestNumber = 1000;

// verifica o menor valor contido no array
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < smallestNumber) {
    smallestNumber = numbers[i];
  }
}

console.log(smallestNumber);