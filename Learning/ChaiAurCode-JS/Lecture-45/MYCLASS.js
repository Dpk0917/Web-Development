// // ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`;
//     }

//     changeUserName(newUsername) {
//         this.username = newUsername;
//         return `Username has been changed to ${this.username.toUpperCase()}`;
//     }
// }

// // Create an object
// const userOne = new User("Deepak", "deepak@gmail.com", "123456");

// console.log(userOne.encryptPassword());   // Output: 123456abc
// console.log(userOne.changeUserName("dpk")); // Output: Username has been changed to DPK


//behind the scenes
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`;
};

User.prototype.changeUserName = function(newUsername) {
    this.username = newUsername.toUpperCase();
    return `Username has been changed to ${this.username}`;
};


const tea= new User("tea", "tea@gmail.com", "password123");
console.log(tea.encryptPassword());   // Output: password123abc
console.log(tea.changeUserName("TEA")); // Output: Username has been changed to TEA

