class user {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return `${this._email} Ritesh`
    }
    set email(value){
        this._email = value
    }
    get password(){
          return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

const ritesh = new user("ritesh@.sa", "abcd")
console.log(ritesh.email);
console.log(ritesh.password);