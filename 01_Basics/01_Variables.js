const accountId = 144553
let accountEmail = "ritesh06gmail.com"
var accountpassword = "1234"
accountCity = "Jaipur"
let accountState;


//accountId = 2 //cant change as it is a const
accountEmail = "yeyey@gmaii.com"
accountpassword = "23232323"
accountCity = "Pune"
console.log(accountId);

/*
Prefer not to use 'var'
bcoz of issue in block scope andd functional scope
*/
console.table([accountEmail, accountId, accountpassword, accountCity, accountState])