// Função que recebe um array de inteiros e retorne o índice do maior valor.

function indiceDoMaior(numeros) {
    let j = 0;
    for (let i in numeros) {
      if (numeros[j] < numeros[i]) {
        j = i;
      }
    }
    return j;
  }
  
  console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); // 4