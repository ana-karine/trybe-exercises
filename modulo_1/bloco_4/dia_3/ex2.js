// Programa que imprime um triângulo retângulo 
// com 5 asteriscos de base. 
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

for (i = 0; i < n; i += 1) {
    linha = linha + simbolo;
    console.log(linha);
};