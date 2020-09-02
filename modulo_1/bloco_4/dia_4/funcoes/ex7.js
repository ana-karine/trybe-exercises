// Função que recebe uma string 'word' e uma string 'ending',
// e verifica se a string 'ending' é o final da string 'word'. 
// Condição: a string 'ending' sempre será menor que a 'word'.

function verificaFimPalavra(palavra, fimPalavra) {
    let inversoPalavra = palavra.split('').reverse().join('');
    let inversoFimPalavra = fimPalavra.split('').reverse().join('');
  
    for (let i = 0; i < inversoFimPalavra.length; i += 1) {
      if (inversoPalavra[i] != inversoFimPalavra[i]) {
        return false;
      } else {
        return true;
      }
    }
  }
  
  console.log(verificaFimPalavra("trybe", "be")); //true
  console.log(verificaFimPalavra("joaofernando", "fernan")); //false



/*
// Outra solução:

function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split("");
    fimPalavra = fimPalavra.split("");
    controle = true;
    for (let i = 0; i < fimPalavra.length; i++) {
      if (palavra[palavra.length-fimPalavra.length+i] != fimPalavra[i]) {
        controle = false;
      }
    }
    return controle;
  }

  console.log(verificaFimPalavra("trybe", "be")); //true
  console.log(verificaFimPalavra("joaofernando", "fernan")); //false

*/