/* Programa que retorna o maior de três números. 
Condição: defina três variáveis com os valores 
que serão comparados. */

let a = 6;
let b = 4;
let c = 2;

if (a > b && a > c) {
  console.log('O maior número é: ' + a + ' (opção: a)');
} else if (b > a && b > c) {
  console.log('O maior número é: ' + b + ' (opção: b)');
} else {
  console.log('O maior número é: ' + c + ' (opção: c)');
};