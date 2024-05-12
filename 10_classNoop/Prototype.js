let myName = "ritesh      "
let myChannel = "chai      "

//console.log(myName.truelength);

let myheros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function (params) {
        //console.log(`Spidey Power is ${this.spiderman}`);
    }
}

Object.prototype.ritesh = function () {
   // console.log(`Ritesh is present in all objects`);
}

Array.prototype.heyRitesh = function(){
  //  console.log(`hello ritesh`);
}

//heroPower.ritesh()
myheros.ritesh()
myheros.heyRitesh()
//heroPower.heyRitesh()

//inheritance
const User = {
    name: "chai"
}
const teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvaliable:false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true, 
    __proto__:TeachingSupport

}
teacher.__proto__= User

// modern syntax

Object.setPrototypeOf(TeachingSupport, teacher)

let anotherUserName = "ChaiAurCode   "

String.prototype.truelength = function (){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUserName.truelength()
"ritesh".truelength()
"iceTea".truelength()