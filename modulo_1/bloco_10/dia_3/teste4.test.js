// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta.
// A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings
// e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela
// deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última
// letra de uma string. A terceira deve receber três strings e concatená-las.

const funcao2 = require("./funcao2");
jest.mock("./funcao2");

describe("testando implementações", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    funcao2.firstFunction.mockImplementation(a => a.toLowerCase());

    expect(funcao2.firstFunction("UPPERCASE")).toBe("uppercase");
    expect(funcao2.firstFunction).toHaveBeenCalled();
    expect(funcao2.firstFunction).toHaveBeenCalledTimes(1);
    expect(funcao2.firstFunction).toHaveBeenCalledWith("UPPERCASE");
  });

  test("mockando função que recebe um parâmetro e retorna a última letra", () => {
    funcao2.secondFunction.mockImplementation(a => a.charAt(a.length - 1));

    expect(funcao2.secondFunction("letter")).toBe("r");
    expect(funcao2.secondFunction).toHaveBeenCalled();
    expect(funcao2.secondFunction).toHaveBeenCalledTimes(1);
    expect(funcao2.secondFunction).toHaveBeenCalledWith("letter");
  });

  test("mockando função que recebe 3 parâmetros e os concatena", () => {
    funcao2.thirdFunction.mockImplementation((a, b, c) => a.concat(b, c));

    expect(funcao2.thirdFunction("tr", "y", "be")).toBe("trybe");
    expect(funcao2.thirdFunction).toHaveBeenCalled();
    expect(funcao2.thirdFunction).toHaveBeenCalledTimes(1);
    expect(funcao2.thirdFunction).toHaveBeenCalledWith("tr", "y", "be");
  });
});
