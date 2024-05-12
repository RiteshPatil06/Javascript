class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }


}

const chai = new Teacher("chai", "chai@gogo.com", "123")

chai.addCourse()

const masalaChai = new user("masalaChai")

masalaChai.logMe()

console.log(chai instanceof user);