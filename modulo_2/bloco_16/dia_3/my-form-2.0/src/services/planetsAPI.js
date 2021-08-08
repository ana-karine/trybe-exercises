const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

const planetsAPI = async () => {
  const request = await fetch(endpoint);
  const requestJson = await request.json();
  return requestJson;
};

export default planetsAPI;
