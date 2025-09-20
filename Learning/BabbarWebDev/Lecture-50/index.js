// // compile time error

// //syntax error
// // console.log(1;

// // Runtime error
// // console.log(x);


// try{
//     console.log("try block starts here");
//     console.log(x);
//     console.log("try block ends here");

//     //a

//     // b

//     //c
// }
// catch(error){
//     // define krte history,error ke sath app kya krna chahte hai 
//     // retry logic
//     // fallback mechanism
//     // logging
//     // custom error handling

//     console.log("I am inside error handling");
//     console.log("error name is ", error);

// }
// finally{
//     console.log("I am inside finally block");
// }


// try{
//     console.log(x);

// }
// catch(error){
//     throw new Error("Error aagya dosto");
// }

let errorcode=100;
if(errorcode==100){
    throw new Error("100 error aagya");
}