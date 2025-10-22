// fetch('https://something.com/api/data')
//   .then(response => response.json())
//   .catch(error => console.error('Error:', error))
//   .finally(() => console.log('Fetch attempt finished'));

const { use } = require("react");

// const promiseOne=new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls,cryptogrphy, network
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve();
//
//     },1000)
// });

// promiseOne.then(function(){
//     console.log('Promise is resolved');
// })

new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls,cryptogrphy, network
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
    // reject();
  }, 1000);
}).then(function () {
  console.log("promise is resolved");
});

const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2 is comleted");
    resolve({ username: "Deepak", email: "deepak@example.com" });
  }, 1000);
}).then(function (user) {
  console.log(user);
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "deepak", email: "hahaha@example.com" });
    } else {
      reject("Error: something went wrong");
    }
  }, 1000);
});

const username = promiseThree
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  }).finally(function(){
    console.log('Promise is either resolved or rejected, finally executed');
  });


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function () {
        let error = true;
        if (!error) {
        resolve({ username: "deepak", email: "hahaha@example.com" });
        } else {
        reject("Error: JS went wrong");
        }
    }, 1000);
});


async function consumePromiseFour(){
    try{
        const response=await promiseFour
    console.log(response);
    }catch(error){
        console.log("Error:",error);
    }
}

consumePromiseFour();

async function getAIusers(){
  try{
const response=await fetch('https://jsonplaceholder.typicode.com/users');
    const users=await response.json();
    console.log(users);
  }catch(error){
    console.log("Error:",error);
  }
    
}

getAIusers();