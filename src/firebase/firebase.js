import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })
//
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })
//
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot
//     })
//   })
//   console.log(expenses);
// });

// database.ref('notes').push({
//   title: 'Todo',
//   body: 'go for a run'
// });

//setup expenses with three items (desc, note, amount, createdAt)

// database.ref('expenses').push({
//   description: 'First expense',
//   notes: '',
//   amount: 2000,
//   createdAt: 1
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   })
//   .catch(() => {
//
//   });

// Setup data subscription
// NAME is a JOB at COMPANY
// change data and make sure it reprints

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (error) => {
//   console.log('Error fetching data: ', e);
// });
//
// setTimeout(() => {
//   database.ref('job/title').set("HNIC");
// }, 3500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data:', e);
//   })

// database.ref().set({
//   name: 'Billy Jacoby',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Florida',
//     country: "USA"
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   name: "Mike Jones", // the first two lines of this object change data
//   age: 29,
//   job: 'Sales Account Manager',  // you can also add data
//   isPerson: null // and even remove data inside the same call
// });

// database.ref().update({
//   job: 'Manager',
//   'location/city': 'Boston' // the forward slash is necessary to change specific items and leave others untouched
// });

// change sressLevel to 9
// change company to amazon
// / change city to seattle

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data Deleted');
//   })
//   .catch((err) => {
//     console.log('Unable to delete data. Error: ', err);
//   })
