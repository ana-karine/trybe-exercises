// Crie uma função que faça requisição para a api dog pictures. Mocke a requisição e crie dois testes.
// O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess".
// O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os
// testes que achar necessário.

const funcao3 = require("./funcao3");
describe("testando a requisição", () => {
  funcao3.fetchDog = jest.fn();
  afterEach(funcao3.fetchDog.mockReset);

  test("testando requisição caso a promisse resolva", async () => {
    funcao3.fetchDog.mockResolvedValue("request sucess");

    funcao3.fetchDog();
    expect(funcao3.fetchDog).toHaveBeenCalled();
    expect(funcao3.fetchDog).toHaveBeenCalledTimes(1);
    expect(funcao3.fetchDog()).resolves.toBe("request sucess");
    expect(funcao3.fetchDog).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promisse seja rejeitada", async () => {
    funcao3.fetchDog.mockRejectedValue("request failed");

    expect(funcao3.fetchDog).toHaveBeenCalledTimes(0);
    expect(funcao3.fetchDog()).rejects.toMatch("request failed");
    expect(funcao3.fetchDog).toHaveBeenCalledTimes(1);
  });
});
