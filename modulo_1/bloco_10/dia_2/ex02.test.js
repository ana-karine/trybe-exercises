// **Código-base para os exercícios 2 e 3:**

// O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa
// busca é uma *Promise*, que é utilizada pelo método `getUserName`.

// Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName 
// para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não 
// é encontrado.
// Dica : Veja os dados falsos utilizados no banco de dados, disponíveis na variável users, para 
// saber quais IDs existem.

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

// Gabarito:
describe('getUserName - promise', () => {
  describe('when the user id exists', () => {
    it('returns the user name', () => {
      expect.assertions(1);
      return getUserName(4).then(data => expect(data).toEqual('Mark'));
    });
  });

  describe('when the user id does not exists', () => {
    it('returns an error', () => {
      expect.assertions(1);
      return getUserName(2).catch(error =>
        expect(error).toEqual({ error: 'User with 2 not found.' })
      );
    });
  });
});
