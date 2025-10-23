console.log(Math.PI);
Math.PI = 15;
console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(descripter);

const chai={
    name: "Deepak",
    age: 19,
    isAvailable: true,

}

console.log(Object.getOwnPropertyDescriptor(chai, "age"));

Object.defineProperty(chai, "age", {
    writable: false,
    enumerable: false,
    value: 20
});

console.log(Object.getOwnPropertyDescriptor(chai, "age"));
