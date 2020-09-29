// ES6: Compare Scopes of the var and let Keywords
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/compare-scopes-of-the-var-and-let-keywords

// Exemplo 1:
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // returns [0, 1, 2]
console.log(i); // returns 3 (quando i++ é executado, a variável global é atualizada)


// Exemplo 2:
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); // returns 3 (Imprime 3 e não 2. Isso ocorre porque o valor atribuído a i foi atualizado
                            // e printNumTwo() retorna o i global e não o valor de i quando a função foi criada.)


// Exemplo 3:
'use strict';
let printNumberTwo;
for (let j = 0; j < 3; j++) {
  if (j === 2) {
    printNumberTwo = function() {
      return j;
    };
  }
}
console.log(printNumberTwo()); // returns 2
console.log(j); // returns "j is not defined" (j não está definido porque não foi declarado no escopo global. 
                // Ele só é declarado na instrução de loop for.)


// Exercício 1:
function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i); // Block scope i is:  block scope
  }
  console.log('Function scope i is: ', i); // Function scope i is:  function scope
  return i;
}
checkScope();



// ES6: Mutate an Array Declared with const
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/mutate-an-array-declared-with-const

// Exemplo 1:
'use strict';
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const (como const foi usado, não podemos usar o identificador 
               // s para apontar para um array diferente usando o operador de atribuição)
s[2] = 45; // works just as it would with an array declared with var or let (os elementos do array em s são mutáveis)
console.log(s); // returns [5, 6, 45]


// Exercício 1:
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  console.log(s);
}
editInPlace();
