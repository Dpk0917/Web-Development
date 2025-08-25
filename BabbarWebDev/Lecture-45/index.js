// sayMyName("haha");

const { a } = require("motion/react-client");

// function sayMyName(finalname){
//     console.log(finalname);

// }

// console.log(age);
// var age=25;
// console.log(age);


//let
// console.log(age);
// let age=25;
// console.log(25);


//const
// console.log(age);
// const age=25;
// console.log(age);


// class Human{

// }

// const object1 = new Human();

// let greet=function(){
//     console.log("Hello");
// }

// greet();


// function greetMe(greet,fullname){
//     console.log("Hello World",fullname);
//     greet();
// }

// function greet(){
//     console.log("Hello");
// }

// greetMe(greet,"John");


// function solve(number){
//     return function(number){
//         return number * 2;
//     }
// }

// let ans=solve(5);
// let finalAns=ans(10);
// console.log(finalAns); // Output: 20    


// const arr=[
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     },
//     function(a,b){
//         return a/b;
//     }
// ];

// let first = arr[3];
// let ans=first(5,10);  
// console.log(ans);


let obj={
    a: 5,
    b: 10,
    c: 15,
    greet: ()=>{
        console.log("Hello");
    }
};

console.log(obj.a); // Output: 5
obj.greet(); // Output: Hello