/* Programa que define três números em variáveis 
e retorna true se pelo menos um dos três for ímpar. 
Caso contrário, deve retornar false. */

let a = 1;
let b = 3;
let c = 5;

let existeImpar = false;

if ((a % 2 != 0 || b % 2 != 0 || c % 2 != 0)) {
  existeImpar = true;
};
console.log(existeImpar);