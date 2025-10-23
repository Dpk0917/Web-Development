function setUsername(username) {
    //complex DB calls
    this.username = username;
    console.log(`Username has been called`);
}

function createUser(username, email, password) {
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
    
}

const user1 = new createUser("Deepak", "deepak@gmail.com", "password123");
console.log(user1);
