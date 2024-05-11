// singleton
//object.create //constructor => singleton


//object literals

const mySymbol = Symbol("key1")





const jsUser = {
   name : "ritesh",
   "full name" : "ritesh PAtil",
   age : 19,
   [mySymbol] : "myKey1",//
   email : "riteshpatil@gogo.com",
   isLoogedin : false,
   lastLoginDays : ["mon", "friday"]   
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);//

// jsUser.email = "riteshji@gogo.com"
// Object.freeze(jsUser)
// jsUser.email = "penguin@gogo.com"
// console.log(jsUser);


jsUser.greeting = function (){
    console.log("hello ji");
}

jsUser.greeting2 = function (){
    console.log(`hello ji, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());
