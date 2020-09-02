// Agora, inverta o triângulo retângulo 
// do exercício anterior. 
/* 
Exemplo: n = 5

     *
    **
   ***
  ****
 *****

*/

let n = 5;
let simbolo = '*';
let linha = '';     // string vazia
let posicao = n;

for (i = 0; i < n; i += 1) {
  for (j = 0; j <= n; j += 1) {
    if (j < posicao) {    // ex.: quando posicao=2 teremos:'  ****'
      linha = linha + ' ';
    } else {
      linha = linha + simbolo;
    }
  }
  console.log(linha);
  linha = '';
  posicao = posicao - 1;
};
