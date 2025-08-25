// let obj = {
//     name: "Deepak",
//     age: 18,
//     weight: 70,
//     height: "6ft",

//     greet: function () {
//         console.log("Hello, my name is Deepak.");
//     }
// };

// console.log(obj);
// obj.greet();

// console.log(typeof obj);

// // construct a Array
// // let arr = [1, 2, 3, 4, 5];
// // console.log(arr);
// // console.log(arr[0]);
// // let arr2 = [1, 2, 3, 4, 5, "Deepak", true, null];
// // // console.log(arr2);
// // console.log(arr2[5]);
// // using Array constructor
// let arr3 = new Array(1, 2, 3, 4, 5);
// console.log(arr3[0]);

// // console.log(arr3.push(6)); // adds 6 to the end of the array
// // console.log(arr3); // [1, 2, 3, 4, 5, 6]
// // console.log(arr3.pop()); // removes the last element (6) from the array
// // console.log(arr3); // [1, 2, 3, 4, 5]

// console.log(arr3.unshift(0)); // adds 0 to the beginning of the array
// console.log(arr3); // [0, 1, 2, 3, 4, 5]
// console.log(arr3.shift()); // removes the first element (0) from the array  
// console.log(arr3); // [1, 2, 3, 4, 5]

// console.log("Length " + arr3.length); // 5

// // console.log(arr3.slice(1, 3)); // [2, 3] - extracts elements from index 1 to index 3 (not including index 3)
// console.log(arr3.splice(2,3,'Sim'));
// console.log(arr3);



// console.log(arr3[5]); // 6
// console.log(arr3[5]); // undefined
// console.log(arr3);

// console.log(typeof arr2);
// console.log(typeof arr3);


let arr = [10,20,'Deepak', true, null];

// let ansArray=arr.map((number) => {
//     return number * number;
// })

// arr.map((number, index) => {
//     console.log(number);    
//     console.log(index);
// })

let evenArray=arr.filter((number) => {
    return number % 2 === 0;
})
    // if(number%2 === 0) {
    //     return true;
    // }else{
    //     return false;
    // }
// })
console.log(evenArray); // [10, 20]
// console.log(ansArray); // [100, 400, 900]

let ans=arr.filter((value) => {
    if(typeof(value) === 'string') {
        return true;
    }else{
        return false;
    }
})

console.log(ans); // ['Deepak']

let arr2 = [1, 2, 3, 4, 5];
let ans2 = arr2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);  

console.log(ans2); // 15


let numbers = [5, 12, 8, 130, 44];

let found = numbers.find(num => num > 10);

console.log(found); // 12 (first number greater than 10)
let foundIndex = numbers.findIndex(num => num > 10);
console.log(foundIndex); // 1 (index of the first number greater than 10)

arr.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
});


let objects = [
    { name: 'Deepak', age: 18 },
    { name: 'John', age: 25 },
    { name: 'Jane', age: 22 }
];

for(let key in objects) {
    console.log(key," ",objects[key]);
}   

for(let obj of objects) {
    console.log(obj.name, obj.age);
}