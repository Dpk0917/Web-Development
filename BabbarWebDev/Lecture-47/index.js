// class Human{
//     //properties
//     age; //public
//     #weight=60; //private
//     #height=150; //private

//     constructor(newAge,newHeight){
//         this.age = newAge;      
//         this.#height = newHeight;   
//     }
//     //behavior
//     speak(){
//         console.log("Hello");
//     }

//     walking(){
//         console.log("Walking",this.#height);
//     }

//     eating(){
//         console.log("Eating");
//     }

//     get fetchWeight(){
//         return this.#weight;
//     }

//     set setWeight(val){
//         this.#weight = val;
//     }  
// }

// // let obj = new Human();
// let obj = new Human(25, 180);   
// console.log(obj.age);
// console.log(obj.fetchWeight);

// obj.speak();
// obj.walking();

// function sayName(myname="Prabhu Deva"){
//     console.log("My name is", myname);
// }   

// sayName("DPK");

function sayName(fName="Dpk",lname=fName.toUpperCase()){
    console.log("My name is", fName, lname);
}   

sayName("Love");