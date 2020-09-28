// JavaScript básico: acessando propriedades de objetos com variáveis
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-variables


// Exemplo 1:
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"


// Exemplo 2:
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp agora contém o valor 'propName'
console.log(someObj[someProp]); // "John"


// Exercício 1:
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player); // Montana



// JavaScript básico: atualizando propriedades do objeto
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/updating-object-properties


// Exemplo 1:
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
ourDog["name"] = "Happy Camper";
console.log(ourDog); // { name: 'Happy Camper', legs: 4, tails: 1, friends: [ 'everything!' ] }


// Exercício 1:
var myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
console.log(myDog);
/*
{
  name: 'Happy Coder',
  legs: 4,
  tails: 1,
  friends: [ 'freeCodeCamp Campers' ]
}
*/
