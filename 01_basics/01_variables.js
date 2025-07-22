const UserID = 123456; // const is used for the data which needs to be constent througout the code
let accountName = "Chirag"; // let the the largly used variable type
var accountMail = "chiragmoolya@google.com"; // outdated variable type prefer not to use it
accountLocation = "Mumbai"; // javascript is loosly typed language it dosenot need variable declaration but this is not a good practics to write code
let accountState; // we can also declare a variable without assiging any value to it so javascript considers as "undefined"


console.log(UserID); // this is used to print the value of the variabe.
console.table([UserID,accountName,accountMail,accountLocation,accountState]); // thsi is used to print all the variable in a tabular form


/*
Going forwand stop using var as a variable type as it is outdated and has some issues with block scope and functional scope.
*/