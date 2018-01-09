const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('this is my resolved data');
    reject('something went wrong')
  }, 1500)

});

console.log('before');

promise.then((data => {
  console.log(data);
})).catch((data) => {
  console.log(data);
});


console.log('after');
