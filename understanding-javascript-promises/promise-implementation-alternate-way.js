// Example shows a alternate way to define promises.

let fetchVehicles = new Promise(function (resolve, reject) {
  // This is executor function
  setTimeout(function () {
    resolve("alternative way to define promise");
  }, 1000);
});

let successHandler = (vehicles) => {
  console.log(vehicles);
};

let errorHandler = (error) => {
  console.log("fetching vehicles failed");
};

fetchVehicles.then(successHandler, errorHandler);
