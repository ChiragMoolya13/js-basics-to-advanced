let score = "33abc"

console.log(typeof (score));
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "Chirag"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// " " => false
// "Chirag" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ***************************** Operations ********************************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2); //addition
console.log(2-2); //subtraction
console.log(2*2); //multiplication
console.log(2**3); // 2 to the power 3
console.log(2/3); //divition
console.log(2%3); //modulo (reminder)

let str1 = "hello"
let str2 = " Chirag"
let str3 = str1 + str2
console.log(str3); // even strings can be attached to each other by adding two varialbe value and storing it in a new varable

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log((3+4)*5%3);

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

console.log(num1);

let gameCounter = 100
++gameCounter;
console.log(gameCounter);


// postfix incrementation
let x = 3;
const y = x++;
console.log(x , y);// in postfix previous value will be assigned and then it is increamented

//prefix incrementation

let a = 3;
const b = ++a; 
console.log(a, b); // in prefix the value will first be increamented the it will assigne the value in other variable

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
