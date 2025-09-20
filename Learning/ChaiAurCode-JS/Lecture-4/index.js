const accountID=1443;
let accountEmail="deepak@example.com";
var accountPassword="12345";
accountCity="Delhi";
let accountState;

// accountID=5; // not allowed

accountEmail="hc@hc.com"; // allowed
accountPassword="67890"; // allowed
accountCity="Noida"; // allowed
console.log(accountID);

/*
Prefer not to use var
bcuz  of the issue of block scope and functional scope
*/
console.table([accountEmail,accountPassword,accountCity,accountState]);
