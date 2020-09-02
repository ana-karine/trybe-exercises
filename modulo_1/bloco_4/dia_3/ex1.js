// Programa que, dado um valor n > 1, imprime na
// tela um quadrado feito de asteriscos (n x n). 
/* 
Exemplo: n = 5

*****
*****
*****
*****
*****

*/

let n = 5;
let simbolo = '*';
let linha = '';     // string vazia

for (i = 0; i < n; i += 1) {
    linha = linha + simbolo;
};

for (i = 0; i < n; i += 1) {
    console.log(linha);
};