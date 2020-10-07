// Dada uma matriz de matrizes, transforme em uma única matriz.

const assert = require('assert');

const arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc, curr)=> acc.concat(curr), []); // O método concat() combina o texto de duas ou mais strings e retorna uma nova string (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/concat).
}
console.table(flatten());

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
