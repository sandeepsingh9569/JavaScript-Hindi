const accountId = 123456
let accountEmail = "abc@gmail.com"
var accountPassword = "123456"
accountCity = "Noida"
let accountState;

// accountId = 2  not allowed

accountEmail = "ab@ab.com"
accountPassword = "654321"
accountCity = "Delhi"


console.log(accountId);

/*prefer not to use var
because of issue in block scope and functional scop*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
