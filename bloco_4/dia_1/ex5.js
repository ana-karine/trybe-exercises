/* Programa que define três variáveis que representam ângulos. 
Condição: retornar true se os ângulos caracterizam os ângulos 
internos de um triângulo e false, caso contrário. */

let anguloA = 65;
let anguloB = 100;
let anguloC = 15;

let somaDosAngulos = anguloA + anguloB + anguloC;

if (somaDosAngulos === 180) {
  console.log('true!');
} else {
  console.log('false!');
};