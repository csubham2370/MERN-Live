// Define the result function
function result() {
  // This is just an example condition, returning true or false
  // Replace this with your actual logic
  return Math.random() > 0.5;  // 50% chance to return true or false
}

let promise = new Promise((resolve, reject) => {
  if (result()) {
    resolve('Success');  // Called when result() returns true
  } else {
    reject('Reject');  // Called when result() returns false
  }
});

// Handling the promise
promise
  .then((message) => {
    console.log(message);  // Logs 'Success' if resolved
  })
  .catch((error) => {
    console.log(error);  // Logs 'Reject' if rejected
  });
  promise.finally(() =>{
    console.log('Operation Completed...');
  });