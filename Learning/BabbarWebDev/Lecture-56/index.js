// let firstPromise = new Promise((resolve, reject) => {
//     console.log("babbar");  
//     resolve(1);
// });

let firstPromise = new Promise((resolve, reject) => {
    setTimeout(function say() {
        console.log("deepak");
        resolve(1);
    }, 15000);
});

let secondPromise = firstPromise.then(() => {
    let success = true;
    if (success) {
        resolve("deepak babbar");
    } else {
        reject("Promise was not successful");
    }
});

secondPromise.then((message) => {
    console.log("then ka message: " + message);
}).catch((error) => {
    console.log("Error: " + error);


}).finally(() => {
    console.log("Promise is settled");
});
console.log("end of script");