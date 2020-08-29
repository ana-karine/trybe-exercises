/* Programa que define três números em variáveis 
e retorna true se pelo menos um dos três for par. 
Caso contrário, deve retornar false. */

let a = 1;
let b = 3;
let c = 5;

let existePar = false;

if ((a % 2 == 0 || b % 2 == 0 || c % 2 == 0)) {
    existePar = true;
};
console.log(existePar);