const accountId = 11642   //the const is a keyword and it cannot be changed the value will remain same 
let accountEmail = "sakshi9674@gmail.com"
var accountPassword = "12341234"
accountCity = "LosAngelas" // there are possibility that 

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "sakshirajput25106@gmail.com"
accountPassword = "1164200"
accountCity = "Jammu"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]) //Easy method 
