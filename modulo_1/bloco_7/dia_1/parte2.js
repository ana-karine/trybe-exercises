// https://app.betrybe.com/course/fundamentals/javascript-es6/javascript-es6-part-1


// Exercício 1: Crie uma função que receba um número e retorne seu fatorial.
const factorial = number => {
  let result = 1
  for (let i = 2; i <= number; i += 1) {
      result *= i
  }
  return result
}
console.log(factorial(5)) // 120

// (Bônus) Tente fazer o Exercício 1 de forma recursiva.
const factorial2 = number => number > 1 ? number * factorial2(number - 1) : 1
console.log(factorial2(5)) // 120



// Exercício 2: Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = text => {
  let wordArray = text.split(' ')
  let maxLength = 0
  let result = ''
  for (const word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word.length
      result = word
    }
  }
  return result
}
console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu")) // aconteceu

// (Bônus) Longestword com sort em uma linha.
const longestWord2 = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]
console.log(longestWord2("Antonio foi no banheiro e não sabemos o que aconteceu")) // aconteceu



// Exercício 4: Crie um código JavaScript com as seguintes especificações:

// Contenha um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.
const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

// Função 1: função que irá receber uma string como parâmetro. A função deverá procurar pela letra x na string que você determinar, substituir pela string passada como parâmetro e retornar essa nova string.
// Função 2: essa função deve concatenar as skills do array global à string da Função 1 passada via parâmetro. 

function buildSkillsPhrase (paramOne) {
  const fun1 = paramInner => (
    `Tryber ${paramInner} aqui!
    Tudo bem?`
  )
  let result = `${fun1(paramOne)}

  Minhas cinco principais habilidades são:`

  array.forEach((skill, index) =>
  result = `${result}
  - ${skill}`)
  result = `
  ${result}

  #goTrybe
  `
  return result
}
console.log(buildSkillsPhrase("Lucas"))
