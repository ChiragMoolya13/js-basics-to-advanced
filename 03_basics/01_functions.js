function sayMyName() {
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("R");
    console.log("A");
    console.log("G");
}

//sayMyName()

// function addTwoNumb(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumb(num1, num2){
    let result = num1 + num2;
    return result;
}

const result = addTwoNumb(3,4)
// console.log(result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return       
    }
    return `${username} just logged in`
}

// const data = loginUserMessage()
// console.log(data);

// console.log(loginUserMessage("Chirag"));

function claculateCartPrice(...num1) {
    return num1
}

//console.log(claculateCartPrice(200,400,500,200));

const user = {
    username: "Chirag",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "Prayag",
    price:399
})


const myNewArray = [200,400, 100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,500,500,600]));


