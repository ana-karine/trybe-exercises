/*
'Kata' ou 'Code Kata' são exercícios de programação que ajudam a aprimorar as habilidades através da prática e da repetição.
Kata 'Verificador de senhas' (https://github.com/CodeYourFuture/js-exercises-tdd/tree/master/III.tdd-katas/password-verifier): Crie uma função verify() que retorne 'false' para os casos listados no repositório e 'true' caso contrário.


Crie uma classe de verificação de senha chamada “password” e adicione as seguintes verificações a uma função mestre chamada “verify()”:
a) a senha deve ter mais de 8 caracteres
b) a senha não deve ser nula
c) a senha deve ter pelo menos uma letra maiúscula
d) a senha deve ter pelo menos uma letra minúscula
e) a senha deve ter pelo menos um número

Cada um deles deve lançar uma exceção com uma mensagem diferente a sua escolha.
*/


// Cada passo abaixo é composto por um novo grupo de testes de um passo do TDD seguido do código que os resolve.

/* Passo 1
// teste
const assert = require('assert');
assert.strictEqual(typeof verify, 'function');

// código
function verify(password) {}
module.exports = verify;
*/


/* Passo 2
// teste
const assert = require('assert');
assert.strictEqual(typeof verify, 'function');
// Password should be larger than 8 chars
assert(!verify('12345678'));

// código
function verify(password) {
  if (password.length <= 8) return false;
  return true;
}
module.exports = verify;
*/


/* Passo 3
// teste
const assert = require('assert');
assert.strictEqual(typeof verify, 'function');
// Password should be larger than 8 chars
assert(!verify('12345678'));
// Password should not be null
assert(!verify(null));

// código
function verify(password) {
  if (password == null) return false;
  else if (password.length <= 8) return false;
  return true;
}
module.exports = verify;
*/


/* Passo 4
// teste
const assert = require('assert');
assert.strictEqual(typeof verify, 'function');
// Password should be larger than 8 chars
assert(!verify('12345678'));
// Password should not be null
assert(!verify(null));
// Password should have one uppercase letter at least
assert(!verify('gandalfthegray'));

// código
function verify(password) {
  if (password == null) return false;
  else if (password.length <= 8) return false;
  else if (!/[A-Z0-9]/.test(password)) return false;
  return true;
}
module.exports = verify;
*/


/* Passo 5
// teste
const assert = require('assert');
assert.strictEqual(typeof verify, 'function');
// Password should be larger than 8 chars
assert(!verify('12345678'));
// Password should not be null
assert(!verify(null));
// Password should have one uppercase letter at least
assert(!verify('gandalfthegray'));
// Password should have one lowercase letter at least
assert(!verify('YOUSHALLNOTPASS'));

// código
function verify(password) {
  if (password == null) return false;
  else if (password.length <= 8) return false;
  else if (!/[A-Z0-9]/.test(password)) return false;
  else if (!/[a-z0-9]/.test(password)) return false;
  return true;
}
module.exports = verify;
*/


// Passo 6
// teste
const assert = require('assert');
assert.strictEqual(typeof verify, 'function');
// Password should be larger than 8 chars
assert(!verify('12345678'));
// Password should not be null
assert(!verify(null));
// Password should have one uppercase letter at least
assert(!verify('gandalfthegray'));
// Password should have one lowercase letter at least
assert(!verify('YOUSHALLNOTPASS'));
// Password should have one number at least
assert(!verify('GandalfTheWhite'));
// Correct password
assert(verify('G4nd4lfTh3Wh1t3'));

// código
function verify(password) {
  if (password == null) return false;
  else if (password.length <= 8) return false;
  else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password))
    return false;
  return true;
}
module.exports = verify;
