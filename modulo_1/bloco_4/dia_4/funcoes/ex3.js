// Função que recebe um array de inteiros e retorna o índice do menor valor.

function indiceDoMenor(numeros) {
    let j = 0;
    for (let i in numeros) {
      if (numeros[j] > numeros[i]) {
        j = i;
      }
    }
    return j;
  }
  
  console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3])); // 6