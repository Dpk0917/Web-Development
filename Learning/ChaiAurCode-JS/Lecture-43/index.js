const { use } = require("react");

function multiplyBy5(nums){
    return nums*5;
}

multiplyBy5.power=2;

console.log(multiplyBy5(2));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username=username;
    this.score=score;
}

createUser.prototype.incrementScore=function(){
    this.score++;
}

createUser.prototype.PrintingDetails=function(){
    console.log(`The price of user : ${this.score}`);
}

const user1= new createUser("chai" , 15);
const user2= new createUser("tea", 150);


user1.PrintingDetails();