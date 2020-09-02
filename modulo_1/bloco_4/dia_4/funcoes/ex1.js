// Função que recebe uma string e retorna  
// true se for um palíndromo, ou false, se não for.

function verificaPalindromo(palavra) {
    let arrayLetras = palavra.split('');    // o método split() divide um objeto string em um array de strings ao separar a string em substrings
    let palindromo = true;
    for (let i in arrayLetras) {
      if (arrayLetras[i] != palavra[(palavra.length - 1) - i]) {
        palindromo = false;
      }
    }
    return palindromo;
}
console.log(verificaPalindromo('arara')); 
console.log(verificaPalindromo('desenvolvimento'));


/*
// Solução alternativa:

function verificaPalindromo(palavra) {
    // o método reverse() inverte os itens de um array 
    // o join() retorna a matriz como uma string
    let palavraInvertiva = palavra.split("").reverse().join("");
    if (palavraInvertiva === palavra) {
      return true;
    } else {
      return false;
    }
  }
  console.log(verificaPalindromo('arara'));
  console.log(verificaPalindromo('desenvolvimento'));

  */