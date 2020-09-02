// Função que recebe um array de nomes e retorna
// o nome com a maior quantidade de caracteres.

function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for (let i in palavras) {
      if (maiorPalavra.length < palavras[i].length) {
        maiorPalavra = palavras[i];
      }
    }
    return maiorPalavra;
 }
  
console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); // Fernanda