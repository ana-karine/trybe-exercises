// Função que recebe um número inteiro N e retorna
// o somatório de todos os números de 1 até N.

function somatorio(N) {
    let total = 0;
    for (let i = 1; i <= N; i++) {
      total = total + i;
    }
    return total;
  }
  console.log(somatorio(5));