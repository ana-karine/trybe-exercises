/*
A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
a) Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
b) Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
c) Verifique se o array passado por parâmetro não sofreu alterações
d) Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

const myList = [5, 6, 7, 8]; // array passado por parâmetro
myRemove(myList, 5); // a função retorna uma cópia do array sem o elemento '5'
assert.deepStrictEqual(myList, [5, 6, 7, 8]); // o array passado por parâmetro não sofreu alterações

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
