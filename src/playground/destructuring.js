// Object destructuring:

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

// const book = {
//   title: "Ego is the enemy",
//   author: "RYan Holiday",
//   publisher: {
//     name: "Penguin",
//   }
// }
// const {name: publisherName = "Self-published"} = book.publisher;
//
// console.log(`${publisherName}`); // default is self published


// Array destructuring:

// const address = ['123 Michael Road', 'Oakdale', 'New York', '11769']
//
// const [, city, state = "New State"] = address;
//
// console.log(`You are in ${city} ${state}.`);


const item = ['coffee (hot)', '$2.00', "$2.50", "$2.75"];
const [itemName, , mediumPrice] = item

console.log(`A medium ${itemName} costs ${mediumPrice}`);
