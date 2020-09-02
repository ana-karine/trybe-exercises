// Função que recebe um array de inteiros e retorna o inteiro que mais se repete.

  function maisRepetido(numeros) {
    let num = {};
  
    for (let i = 0; i < numeros.length; i += 1) {   // considerando i = 4
      let valor = numeros[i];                       // valor recebe '8' (numeros[4]=8)
      if (num[valor] === undefined) {               // '8' está indefinido em 'num'
        num[valor] = 1;                             // '8' é contabilizado
      } else {
        num[valor] = num[valor] + 1;
      }
    }
  
    let contRepetido = 0;
    let contNumero = 0;
  
    for (let j in num) {             // num: {2: 3, 3: 2, 5: 1, 8: 1}
      if (contRepetido < num[j]) {   // 0 < 3 (1o loop)
        contRepetido = num[j];       // contRepetido = 3 
        contNumero = j;              // contNumero = 2
      }
    }
    return contNumero;
  }
  
  console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); // 2

/*
// Outra solução:

  function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let i in numeros) {
      let verificaNumero = numeros[i];
      for (let j in numeros) {
        if (verificaNumero === numeros[j]) {
          contNumero++;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = i;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }

  console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); // 2

*/  