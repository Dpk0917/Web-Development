// primitive
// 7types of primitive
// number
// string
// boolean
// null
// undefined
// symbol
// bigint

// non-primitive
// object
// array
// function

// const id=Symbol("id");
// const id2=Symbol("id");

// console.log(id===id2);

// const bigNumber=1236547895412335789578909876545n;
// console.log(typeof bigNumber);

const person = ["chinmay", "doe"]; //array
let myobject = {
    name: "chinmay", //object
    age: 23
}

const myfunction= function(){ //function
    console.log("hello");

}

console.log(typeof myfunction);
myfunction();