function saymyname() {
    console.log("r");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

//saymyname()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3,4)
//console.log("Result:", result);

function loginUserMessage(username = "sam"){
    // if(username === undefined){
        if(!username){
        console.log("please enter a user name");
        return
    }
    return`${username} just logged in`
}
//console.log(loginUserMessage("ritesh"));
//console.log(loginUserMessage());

function calculateCartPrice(...num1){ /// ... => rest
   return num1
}

//console.log(calculateCartPrice(200,400,600,900));

const user = {
    userName: "ritesh",
    price: 999
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 199
})

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getarray){
    return getarray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400]));
console.log("hello");


