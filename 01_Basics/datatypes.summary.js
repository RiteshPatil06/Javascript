// Primitive datatypes
// 7 types: string, number, boolean, null, undefined, symbol, bigint


const score = 100
const scoreValue = 100.4

const isLoogedIn = false
const outsideTemp = null
let userEmail;


const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id === anotherId);

// non-primitive or refrence datatype
// array, objects, functions

const heros = ["thor", "captain", "wanda"]
let myObject = {
    name: "ritesh",
    age: 19
}

const myFunction = function(){
 console.log("hello");
}

////////////////////////////////////////////////////

// stack (Primitive) & heap memory (Non-Primitive)

let myname = "ritesh"

let anothername = myname
anothername = "god"

console.log(myname);
console.log(anothername);