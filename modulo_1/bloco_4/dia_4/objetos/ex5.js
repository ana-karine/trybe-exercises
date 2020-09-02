let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
};

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
};

for (let chaves in info) {  // faz referência a todas as chaves do objeto "info"
    if (
      info[chaves] === info.recorrente &&   // valor da chave <n> === valor da chave recorrente ?
      info[chaves] === "Sim" &&             // valor da chave <n> === "Sim" ?
      info2[chaves] === "Sim"
    ) {
      console.log("Ambos recorrentes");
    } else {
      console.log(info[chaves] + " e " + info2[chaves]);
    }
}