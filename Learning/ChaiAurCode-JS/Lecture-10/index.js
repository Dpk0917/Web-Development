 //stack (primitive)
 //heap (non-primitive) 

let myYoutuber="ChaiAurCode"; //primitive
let anotherYoutuber=myYoutuber; //primitive
anotherYoutuber="CodeWithHarry";

console.log(myYoutuber);
console.log(anotherYoutuber);

let myYoutuberObject={
    name:"ChaiAurCode", //non-primitive
    age:23
}

let anotherYoutuberObject=myYoutuberObject; //non-primitive
anotherYoutuberObject.name="CodeWithHarry";
console.log(myYoutuberObject);
console.log(anotherYoutuberObject);