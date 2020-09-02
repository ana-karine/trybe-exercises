// Pirâmide com n asteriscos de base.
/*
Exemplo: n = 5

     
  *  
 *** 
*****

*/

let n = 5;
let simbolo = '*';
let linha = '';     // string vazia
let centro = (n + 1) / 2;   // posição central da pirâmide
let esquerda = centro;
let direita = centro;

for (i = 0; i <= centro; i += 1) {
  for (j = 1; j <= n; j += 1) {
    if (j > direita && j < esquerda) {    // se j estiver entre os limites (direito/esquerdo), a linha recebe '*' 
      linha = linha + simbolo;
    } else {
      linha = linha + ' ';
    }
  }
  console.log(linha);
  linha = '';
  direita -= 1;
  esquerda += 1;
};