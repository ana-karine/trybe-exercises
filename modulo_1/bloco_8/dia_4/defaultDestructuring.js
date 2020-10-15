const nationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`

const person = {
  firstName: "João",
  lastName: "Jr II",
  // nationality: "Brazilian" /* Add nationality para que a chamada de nationality(person) retorne 'João is Brazilian'. */
}

const otherPerson = {
  firstName: "Ivan",
  lastName: "Ivanovich",
  nationality: "Russian"
}

console.log(nationality(person)) // João is undefined
console.log(nationality(otherPerson)) // Ivan is Russian
