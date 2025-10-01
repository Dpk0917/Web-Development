// const user={
//     username:"Deepak",
//     price: 8455,
//     welcomeMessage : function(){
//         console.log(`${this.username}, Welcome to website`); 

//     }
// }

// user.welcomeMessage();
// user.username="Smriti";

// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username="Deepak";
//     console.log(this.username);
// }

// chai();

// const chai= function() {
//         let username="Deepak";
//         console.log(this.username);
// }

// chai();


const chai = () => {
        let username="Deepak";
        console.log(this.username);
}

// chai();


// const addTwo = (num1,num2) => {
//     return num1+num2;
// }


// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1,num2) => ({username : "deepak"});

console.log(addTwo(8,9));