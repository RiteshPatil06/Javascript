const user = {
    username: "ritesh",
    loginCount: 8,
    signedIn: true,

    getuserDetails: function () {
       // console.log("done");
    }
}
//console.log(user.username);

const promise = new Promise() // new is a constructor
function user(username, loginCount, isLoggedIn)  {
  this.username = username
}