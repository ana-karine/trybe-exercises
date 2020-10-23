/*
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
};

window.onload = () => fetchJoke();


A) Fazendo requisições a *API* usando `fetch`. Parâmetros:
   1. O endereço para o qual a requisição será feita, ou seja, a url do serviço.
   2. Um objeto contendo as especificações da requisição. Para essa *API*, atribuiremos 
      a esse objeto as chaves `method:` e `headers:`

const myObject = {
  method: 'GET', // define o tipo de request
  headers: { 'Accept': 'application/json' } // define o formato da resposta
};

fetch(API_URL, myObject);


B) A requisição fetch retorna um objeto Response. Utilizando .then, podemos verificar a 
   estrutura da resposta usando um console.log na response retornada pelo fetch.

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myObject)
    .then(response => console.log(response)); // verifica a estrutura da resposta na `response` retornada pelo `fetch`
};

window.onload = () => fetchJoke();


C) Usando o método `.json()` na resposta da *API*.

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myObject)
    .then(response => response.json()) // aplicação do método `.json()`
    .then(data => console.log(data)); // imprime os dados da requisição (recebemos um objeto)
};

window.onload = () => fetchJoke();
*/


// D) Fazendo o conteúdo ('a piada') aparecer no *DOM* da página.
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data =>
      document.getElementById('jokeContainer').innerText = data.joke
    );
}

window.onload = () => fetchJoke();
