// const person = {
//   age: 25,
//   location: {
//     city: 'West Palm',
//     temp: 100
//   }
// };
//
// const {name: firstName = "Anon", age, location} = person
//
// console.log(`${firstName} is ${age}`);
//
// const {city, temp: temperature} = person.location;
//
// console.log(`In ${city} it is ${temperature}`);

const book = {
  title: "Ego is the enemy",
  author: "RYan Holiday",
  publisher: {
    name: "Penguin",
  }
}
const {name: publisherName = "Self-published"} = book.publisher;

console.log(`${publisherName}`); // default is self published
