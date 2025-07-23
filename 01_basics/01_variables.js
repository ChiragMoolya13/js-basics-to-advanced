const UserID = 123456; // const is used for the data which needs to be constent througout the code
let accountName = "Chirag"; // let the the largly used variable type
var accountMail = "chiragmoolya@google.com"; // outdated variable type prefer not to use it
accountLocation = "Mumbai"; // javascript is loosly typed language it dosenot need variable declaration but this is not a good practics to write code
let accountState; // we can also declare a variable without assiging any value to it so javascript considers as "undefined"


console.log(UserID); // this is used to print the value of the variabe.
console.table([UserID,accountName,accountMail,accountLocation,accountState]); // thsi is used to print all the variable in a tabular form


/*
Going forward stop using var as a variable type as it is outdated and has some issues with block scope and functional scope.
*/

/*
Conceptual Questions
1. What are the key differences between let, const, and var in terms of:
    -Reassignability
    -Scope
    -Hoisting
2. What would happen if you declare the same variable name twice using var vs let?
3. Can a const variable hold an object or array? If yes, can you modify its contents?
 
*/

/*
Practice Questions for the topic:
1. Declare a const variable PI with the value 3.14. Try to reassign it. What happens?
2. Declare a let variable score with value 10. Reassign it to 20. Print both values.
3. Write a block of code with an if statement where you declare a var inside it. Try to access that variable outside the block. Does it work?
4. Repeat question 3 but use let instead of var. Does it work now?
5. Declare a const object person = { name: "Alex" }. Change the name to "Sam". Does it work? Why?
6. Try declaring the same variable x twice using var. Then do the same using let. Observe the error. 
*/

/*
Mini Challenge
Problem:
Write a function createCounter() that uses let to maintain a count variable inside. Every time the function is called, it should increment and print the counter. Try doing the same with var and observe what changes.
*/