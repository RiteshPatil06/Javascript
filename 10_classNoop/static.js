class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    createId(){
        return `123`
    }
}

const ritesh = new user("ritesh")
console.log(ritesh.createId());

class Teacher extends user {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher ("iphone", "iphone.com")
iphone.logMe();