// Recommended way to create Promise.

let promise = new Promise(function (resolve, reject) {
  // this is executor function
  setTimeout(function () {
    resolve("kudos");
  }, 3000);
});

promise
  .then(function (data) {
    // this is success handler
    console.log("promise resolved. " + data);
  })
  .catch(function (err) {
    // this is error handler
    console.log("promise rejected with error: " + err);
  });
