let user = {
    // properties
    firstName: "Ali",
    lastName: "Abdelrahman",
    adresses: {
        EG: "Giza",
        US: "NewYork",
    },
    // methods
    getFullName: () => {
        return `full name is ${user.firstName} ${user.lastName}`;
    },
    getMainAddress: () => `Main Adresses In Egypt In City Is ${user.adresses.EG}`,
};
console.log(user["adresses"]["US"]);
console.log(user.getMainAddress());
// Diffrent between dot Notation and Bracket notation

let myObj = "name";
let myLastObj = {
    name: "Ali",
};
console.log(myLastObj.name);
// console.log(myLastObj.myObj); => undefined
console.log(myLastObj[myObj]);

/* Definning object[
    1- object literal
    2- with new keyword
    3- with Object.create()
    4- with Object.assign()
] */

let NewUser = new Object();
NewUser.name = "Ali";
NewUser.age = 25;
NewUser.GetName = () =>
    `User name is ${NewUser.name} User age is ${NewUser.age}`;
console.log(NewUser.GetName());
// this keyword
let mainObj = {
        hasDiscount: true,
        showMsg: function() {
                return `you ${this.hasDiscount ? "" : "Don`t"} have discount`;
  },
};
console.log(mainObj.showMsg());
let newObj = Object.create(mainObj);
newObj.hasDiscount = false;
console.log(newObj.showMsg());

//4
let objOne = {
  propOne: "one",
};
let objTwo = {
  propTwo: "Two",
};
let target = {
  propThree: "three",
};
Object.assign(target, objOne, objTwo);
console.log(target);
let myObject = Object.assign({}, target);
console.log(myObject);

/* Delete operator */

let delUser = { name: "Ali" };
console.log(delUser);
delete delUser.name;
console.log("#".repeat(25));
console.log(delUser);
// object freeze
let freezedObject = Object.freeze({ age: 25 });
console.log(freezedObject);
console.log("#".repeat(25));
console.log(delete freezedObject.age);
// for loop

let UserThree = {
  name: "Ali",
  country: "Egypt",
  age: 25,
};
for (info in UserThree) {
  console.log(UserThree[info]);
}
// constructor Function
function Phone(serial, color, price) {
  this.serial = serial;
  this.color = color;
  this.price = price;
  this.updateColor = function (newName) {
    this.color = newName;
  };
}
let Phone1 = new Phone(1, "red", 5000);
console.log(Phone1);
console.log(Phone1.serial);
console.log(Phone1 instanceof Phone);
console.log(Phone1.color);
Phone1.updateColor("white");
console.log(Phone1.color);

/* prototypes */

const arr = [1, 2, 3, 4];
class User {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return console.log(`hello ${this.name}`);
  }
}
let user1 = new User("osama");
console.log(User.prototype);
console.log(user1);
console.log(String.prototype);
String.prototype.zFill = function (width) {
  let theResult = this;
  while (theResult.length < width) {
    theResult = `0 ${theResult}`;
  }
  return theResult.toString()
};
console.log("123".zFill(8))
String.prototype.sayHello = function(){
  return(` i love you ${this}`);
}
console.log("ali".sayHello("ali"));
/* Class Static Properties  & Method */
class User2{
   static counter = 0
  constructor (name , email){
    this.name = name;
    this.email = email;
    User2.counter++
  }
  static countObject = function(){
    return `${this.counter} Object Created`
  }
}
const Nuser1 = new User2("ali" , "ali@su.com")
const Nuser2 = new User2("ali" , "ali@su.com")
console.log(User2.countObject());
/* Inheritance */
class Admin extends User2{
  constructor (name , email){
    super(name , email)
  }
}
/*
 JS Accessors
 Getters & Setters 
 */