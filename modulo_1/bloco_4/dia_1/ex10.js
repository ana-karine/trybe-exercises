/* Programa iniciado com dois valores em duas variáveis diferentes: 
o custo de um produto e seu valor de venda. E, a partir desses valores, 
calcula o lucro (= valor de venda - custo do produto) ao vender 1000 
unidades desses produtos.

Observações: 
- sobre o custo do produto, incide um imposto de 20%;
- o programa deve emitir uma mensagem de erro e encerrar, 
caso algum dos seus valores de entrada seja menor que zero;

valorCustoTotal = valorCusto + impostoSobreCusto
lucro = (valorVenda - valorCustoTotal) */

let valorCusto = 1;
let valorVenda = 3;

if (valorCusto >= 0 && valorVenda >= 0) {
  let valorCustoTotal = valorCusto * 1.2;
  let lucro = (valorVenda - valorCustoTotal) * 1000;
  console.log(lucro);
} else {
  console.log('Error, os valores não podem ser negativos');
};