// singleton
//Object.create



// object litrals 

const mySym = Symbol("key1")

const JsUser = {
    name: "Chirag",
    "full name": "Chirag Moolya",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "chirag@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "chirag@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Chirag@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");
    
}
JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
