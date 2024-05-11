//const tinderUser = new Object() ///singelton object
const tinderUser = {} /// non-singelton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "someone@gogo.com",
    fullname : {
        userfullName : {
            firstname: "ritesh",
            lastName: "patil"
        }
    }
}

//console.log(regularUser.fullname.userfullName.lastName);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}

//const obj3 = Object.assign({}, obj1, obj2)
const obj3 ={...obj1, ...obj2}
//console.log(obj3);


const user = [
    {
        id: 1,
        email : "rit@gogo.com"    
    },
    {
        id: 2,
        email : "ritesh@gogo.com"    
    },

]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//destructing
const course = {
    name: "js",
    price: "999",

}
//course.price

const {price: p} = course
console.log(p);

// {
//     //json
//     coursenAME: "js"
//     price: "0"
// }

[
    {}
]

