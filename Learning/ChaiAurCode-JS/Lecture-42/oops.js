const user={
    username:"deepak",
    loginCount:0,
    SignedIN: true,

    getUserDetails: function(){
        // console.log("Got the data from the database");
        console.log(this);
        console.log(`UserName: ${this.username}`);
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);

function User(username,loginCount,SignedIN){
    this.username=username;
    this.loginCount=loginCount;
    this.SignedIN=SignedIN;

    return this;
}

const userOne=new User("deepak", 5, true);

const userTwo=new User("dpk", 45, false);
console.log(userOne.constructor);
console.log(userTwo);