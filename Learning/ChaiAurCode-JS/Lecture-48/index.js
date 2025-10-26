class user {
    constructor(email, password ) {
        this.email=email;
        this.password=password; 

    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(newEmail){
        return this._email=newEmail;
    }

    get password(){
        return this._password.toUpperCase();
    }
    set password(newPassword){
        this._password=newPassword.toUpperCase();   
    }
}

const user1 = new user('john@example.com', '152');
console.log(user1.email);