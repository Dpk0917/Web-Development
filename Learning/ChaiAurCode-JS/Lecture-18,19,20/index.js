function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("K");
}

// sayMyName();

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }


function addTwoNumber(number1,number2){
    // let add=number1+number2;
    // return add;

    return number1+number2;
}


const  result=addTwoNumber(5,null);

// console.log(" Result : ",result);


function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage("deepak"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){
    return num1;
}

// console.log(calculateCartPrice(200,400,500,600));

const user={
    username: "Deepak",
    age:19
}

function handleObject(anyobject){
    console.log(`The name of the object is ${anyobject.username} and the age of the product is ${age}`);
}

handleObject(user);