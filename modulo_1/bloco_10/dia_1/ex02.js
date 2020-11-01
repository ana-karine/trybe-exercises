/*
A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
a) Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
b) Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
c) Verifique se o array passado por parâmetro não sofreu alterações
d) Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// Solução do gabarito:
// const myRemove = (arr, item) => arr.filter((element) => element !== item)

module.exports = myRemove;
