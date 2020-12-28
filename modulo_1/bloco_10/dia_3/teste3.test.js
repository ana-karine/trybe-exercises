// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação
// que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela,
// resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro.
// Faça os testes necessários.

const funcao1 = require('./funcao1');

describe("testando implementações", () => {
  test("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
    funcao1.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(funcao1.randomNumber(2, 3, 4)).toBe(24);
    expect(funcao1.randomNumber).toHaveBeenCalled();
    expect(funcao1.randomNumber).toHaveBeenCalledTimes(1);
    expect(funcao1.randomNumber).toHaveBeenCalledWith(2, 3, 4);
  });

  test("mockando função que recebe um parâmetro e retorna seu dobro", () => {
    funcao1.randomNumber.mockReset();
    expect(funcao1.randomNumber).toHaveBeenCalledTimes(0);

    funcao1.randomNumber.mockImplementation(a => a * 2);

    expect(funcao1.randomNumber(5)).toBe(10);
    expect(funcao1.randomNumber).toHaveBeenCalled();
    expect(funcao1.randomNumber).toHaveBeenCalledTimes(1);
    expect(funcao1.randomNumber).toHaveBeenCalledWith(5);
  });
});
