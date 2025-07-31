// Primitive
// 7 types: String , Number , Boolean, Null, undefined, Symbol, bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID)   //false

const bigNumber = 335363737429874298374527632987231984178793624982142897429874687892173487n
console.log(bigNumber);

// Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    firstName:"chirag",
    age:30,
    address:"Mumbai"
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof id);

// https://262.ecma-international.org/5.1/#sec-11.4.3