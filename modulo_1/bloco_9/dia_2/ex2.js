// Passo a passo de uma Promise:
// Primeiramente, instancie uma Promise. Dentro dela, você deve produzir um array com dez números aleatórios
// de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise
// deve ser resolvida. Caso contrário, ela deve ser rejeitada.

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(number => number * number)
                       .reduce((number, acc) => number + acc, 0);

    (sum < 8000) ? resolve() : reject();
  });

  myPromise
    .then(() => console.log('Deu bom'))
    .catch(() => console.log('Deu ruim'));
};

fetchPromise();
