// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação,
// que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa
// implementação deve ocorrer uma única vez. Faça os testes necessários.

const funcao1 = require('./funcao1');

test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
  funcao1.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(funcao1.randomNumber(10, 2)).toBe(5);
  expect(funcao1.randomNumber).toHaveBeenCalled();
  expect(funcao1.randomNumber).toHaveBeenCalledTimes(1);
  expect(funcao1.randomNumber).toHaveBeenCalledWith(10, 2);
});
