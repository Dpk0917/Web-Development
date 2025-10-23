class User{
    constructor(username){
        this.username=username;
        
    }

    logMe(){
        console.log(`Hello, ${this.username}!`);

    }
}

class Teacher extends User{
    constructor(username, subject){
        super(username);
        this.subject=subject;
        
    }
    logMe(){
        super.logMe();  // Call the parent class method
        console.log(`I teach ${this.subject}.`);
    }
}

const deepak=new Teacher("Deepak","Mathematics");
deepak.logMe();

const chai=new User("Chai");
chai.logMe();

console.log(chai === deepak);  // Output: false