// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes
// para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi
// chamada, qual seu retorno e quantas vezes foi chamada.

const funcao1 = require('./funcao1');

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  funcao1.randomNumber = jest.fn().mockReturnValue(10);

  expect(funcao1.randomNumber()).toBe(10);
  expect(funcao1.randomNumber).toHaveBeenCalled();
  expect(funcao1.randomNumber).toHaveBeenCalledTimes(1);
});
