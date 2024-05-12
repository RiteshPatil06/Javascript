const promiseOne = new Promise(function(resolve, reject) {
    // do an asynv task
    //db calls, cryptography, network
setTimeout(() => {
    console.log('Async task is complete');
    resolve()
}, 1000);
})

promiseOne.then(function(){
    console.log('Promise Consumed');
})

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve()
  }, 1000);
}).then(() => {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise( (resolve, reject) => {
    setTimeout(() => {
    resolve({username: 'ritesh', email:"riteshexample.com"})    
    }, 1000);
})

promiseThree.then((user) => {
   console.log(user);
})

const promiseFour = new Promise ((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "ritesh", password: 132})
        }else{
            reject('ERROR: something went wrong')
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("the Promise is either resolved or rejected"))



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "java", password: 132})
        }else{
            reject('ERROR: java went wrong')
        }
    }, 1000);
});

async function consumePromiseFive (){
 try {
    const reponse = await promiseFive
    console.log(reponse);
 } catch (error) {
    console.log(error);
 }
}
consumePromiseFive()

// async function getAllUsers () {

//   try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log("E", error);
//   }
// }

//getAllUsers()

fetch ('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
