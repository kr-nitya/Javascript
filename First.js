//All basic concepts
console.log("Hello World");

//Functions
function demo(p1, p2) {
  return p1 * p2;
}
let mul = demo(3, 5);
console.log(mul);
//Object
const person = {
  firstName: "Nitya",
  lastName: "Makwana",
  age: 21,
  fullName: function () {
    return this.firstName + this.lastName;
  },
};
console.log(person.fullName());
console.log(person["age"]);
let text = `The quick
brown fox
jumps over
the lazy dog`;
console.log(text);
// x is a string
let x = "Nitya";

// y is an object
let y = new String("Nitya");

console.log("Type of X:" + typeof x);
console.log("Type of Y:" + typeof y);
console.log("x:" + x + "  y:" + y);
console.log("x==y", x == y);
console.log("x===y", x === y);
console.log("Length of X:", x.length);
console.log("charAt(0):", x.charAt(0));
console.log("charCodeAt(0):", x.charCodeAt(0));
console.log("at(0):", x.at(1));
console.log("at(-4):", x.at(-5));
console.log("slice(2,5):", x.slice(2, 5));
console.log("subString(2,5):", x.substring(2, 5));

let text1 = "5";
text1 = text1.padStart(4, "0");
console.log(text1);
console.log("x.repeat(3):" + x.repeat(3));
let sp = "a,b,c,d,e,f";
const myArray = sp.split(",");
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
console.log("x.indexOf(Ni):", x.indexOf("Ni"));
let text2 = "Hello world, welcome to the universe.";
console.log("Text2:", text2);
console.log("Is text2 include 'world' :", text2.includes("world"));
console.log("Is text2 start with  'Hello' :", text2.startsWith("Hello"));
console.log(
  "Is 'world' at the position and start from 5:",
  text2.startsWith("world", 6)
);
//Template Strings
let firstName = "Nitya";
let lastName = "Makwana";

let fullName = `Welcome ${firstName}, ${lastName}!`;
console.log(fullName);

//Real use of string templating
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("demo").innerHTML = html;

//Numbers
let num1 = 10,
  num2 = 5;
console.log("num1+num2=", num1 + num2);
console.log("num1-num2=", num1 - num2);
console.log("num1*num2=", num1 * num2);
console.log("num1/num2=", num1 / num2);
console.log("100 / 'ABC'", 100 / "ABC");
console.log("Check is NaN = 100 / 'ABC' : ", isNaN(100 / "ABC"));
console.log("Type of Nan :", typeof NaN);
//Infinie
let myNumber = 2;
let txt = "";
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
  txt = txt + myNumber + "\n";
}
console.log(txt);
//Division by zero generates Infinity;
console.log("Division by zero generates Infinity 123/0:", 123 / 0);
console.log("Type of Infinity:", typeof Infinity);
let myNumber2 = 32;
console.log(myNumber2.toString(32));
let normalnum = 9999999999999999;
console.log("Normal Number : 9999999999999999 = " + normalnum);
let bignum = BigInt("9999999999999999");
console.log("Big Number : 9999999999999999 = " + bignum);

console.log("Max Number = ", Number.MAX_SAFE_INTEGER);
console.log("Min Number = ", Number.MIN_SAFE_INTEGER);
console.log("Number.isInteger(10) = ", Number.isInteger(10));
console.log("Number.isInteger(10.5) = ", Number.isInteger(10.5));
console.log("Number.isSafeInteger(10) = ", Number.isSafeInteger(10));
console.log(
  "Number.isSafeInteger(12345678901234567890) = ",
  Number.isSafeInteger(12345678901234567890)
);

//Number Method
console.log("(123).toString() = ", (123).toString());
console.log("(100 + 23).toString() = ", (100 + 23).toString());
// toFixed() returns a string, with the number written with a specified number of decimals:
x = 9.656;
console.log("X = ", x);
console.log("x.toFixed(0) = ", x.toFixed(0));
console.log("x.toFixed(4) = ", x.toFixed(4));
// toPrecision() returns a string, with a number written with a specified length
console.log("x.toPrecision(0) = ", x.toPrecision(3));
console.log("x.toPrecision(4) = ", x.toPrecision(4));
console.log("(123).valueOf() = ", (123).valueOf());

console.log("Number(true) =", Number(true));
console.log("Number(false) =", Number(false));
console.log("Number('10') =", Number("10"));
console.log("Number('  10') =", Number("  10"));
console.log("Number('10  ') =", Number("10  "));
console.log("Number(' 10  ') =", Number(" 10  "));
console.log("Number('10.33') =", Number("10.33"));
console.log("Number('10,33') =", Number("10,33"));
console.log("Number('10 33') =", Number("10 33"));
console.log("Number('John') =", Number("John"));

console.log("parseInt('-10') =", parseInt("-10"));
console.log("parseInt('-10.33') =", parseInt("-10.33"));
console.log("parseInt('10') =", parseInt("10"));
console.log("parseInt('10.33') =", parseInt("10.33"));
console.log("parseInt('10 20 30') =", parseInt("10 20 30"));
console.log("parseInt('10 years') =", parseInt("10 years"));
console.log("parseInt('years 10') =", parseInt("years 10"));

console.log("parseFloat('10') =", parseFloat("10"));
console.log("parseFloat('10.33') =", parseFloat("10.33"));
console.log("parseFloat('10 20 30') =", parseFloat("10 20 30"));
console.log("parseFloat('10 years') =", parseFloat("10 years"));
console.log("parseFloat('years 10') =", parseFloat("years 10"));

//Arrays
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
console.log("Length of the array : ", fruits.length);
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
fruits[fruits.length] = "Lemon";
//Iterate array using forEach()
console.log("Iterate array using forEach()");
fruits.forEach(myFunction);
function myFunction(value) {
  console.log(value);
}
console.log("Fruit instanceof array : ", fruits instanceof Array);
console.log("fruits.toString() = ", fruits.toString());
console.log("fruits.at(2) : ", fruits.at(2));
//The join() method also joins all array elements into a string.

//It behaves just like toString(), but in addition you can specify the separator:

console.log("fruits.join('*') : ", fruits.join(" * "));
let popele = fruits.pop();
console.log("Pop element = ", popele);
fruits.push("Kiwi");
console.log("Push new element", fruits);
//The shift() method removes the first array element and "shifts" all other elements to a lower index.
let shiftelement = fruits.shift();
console.log("After Shifing = ", shiftelement);
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
fruits.unshift("Lemon");
console.log("Aftter Unshifing = ", fruits);
console.log("");
//Flat reducing the dimensionality
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(myArr);
console.log(newArr);
//Splice
console.log(
  "fruits.splice(2, 0, 'Lemon', 'Kiwi') = ",
  fruits.splice(2, 0, "Lemon", "Kiwi"),
  fruits
);
/*The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
The splice() method returns an array with the deleted items: 
*/
console.log(
  "fruits.splice(2, 2, 'Lemon', 'Kiwi) = ",
  fruits.splice(2, 2, "Lemon", "Kiwi")
);
let sliceEle = fruits.slice(1);
console.log(fruits);
console.log("fruits.slice(1) = " + sliceEle);

console.log("fruits.indexOf('Apple') = ", fruits.indexOf("Apple"));
console.log("fruits.includes('Mango') = ", fruits.includes("Mango"));
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
console.log(numbers);
console.log("First number over 18 is " + first);
console.log("First number over 18 has index " + numbers.findIndex(myFunction));

//Sorting
console.log(fruits);
console.log(fruits.sort());
console.log(fruits.reverse());

//Array Iteration
// forEach:
// Purpose: Iterates over each element in the array and performs a specified operation on each element.
// Return Value: undefined. It does not create a new array but is used for performing side effects on each element.
// map:
// Purpose: Creates a new array by applying a specified function to each element in the original array.
// Return Value: A new array with the same length as the original, containing the results of applying the provided function to each element.
// filter:
// Purpose: Creates a new array containing only the elements that pass a specified condition.
// Return Value: A new array containing the elements that meet the specified condition.
console.log("Using forEach");
const numbers1 = [45, 4, 9, 16, 25];
numbers1.forEach(myFun);
function myFun(value) {
  console.log(value);
}
console.log("Using Map");
const numbers12 = [45, 4, 9, 16, 25];
const numbers2 = numbers12.map(myFunction);

function myFunction(value) {
  console.log(value);
}
//Filter Method
const age = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);
console.log(over18);
function myFunction(value) {
  return value > 18;
}

//Reduce
let sum = numbers.reduce(myFunction);
console.log("Reduce = ", sum);
function myFunction(total, value, index, array) {
  return total + value;
}
//The every() method checks if all array values pass a test.
let allOver18 = numbers.every(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
console.log("Every = ", allOver18);
//The some() method checks if some array values pass a test.
let someOver18 = numbers.some(myFunction);
console.log("Some = ", someOver18);
function myFunction(value, index, array) {
  return value > 18;
}
//From
const arrFrom = Array.from("ABC5355DEFG");
console.log("Array.from('ABC5355DEFG') = ", Array.from("ABC5355DEFG"));
//With
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(months);
console.log("months.with(2, 'March') = ", months.with(2, "March"));

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);
console.log(
  "------------------------------Date-----------------------------------"
);
//Dates
const d = new Date();
console.log("Date : ", d);
const birthDay = new Date(2003, 3, 23, 4, 32, 0);
console.log("BirthDay : ", birthDay);
console.log("d.toDateString() : ", d.toDateString());

// Creating a new Date object (current date and time)
const currentDate = new Date();
console.log("Current Date:", currentDate);

// Getting date components
const year1 = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();
const dayOfWeek = currentDate.getDay();

console.log("Year:", year1);
console.log("Month:", month);
console.log("Day of the Month:", day);
console.log("Day of the Week:", dayOfWeek);

// Setting date components
currentDate.setFullYear(2025);
currentDate.setMonth(6); // July (0-based index)
currentDate.setDate(15);
currentDate.setHours(12, 30, 0);

console.log("Updated Date:", currentDate);
console.log("Updated Year:", currentDate.getFullYear());
console.log("Updated Month:", currentDate.getMonth());
console.log("Updated Day of the Month:", currentDate.getDate());
console.log("Updated Hour:", currentDate.getHours());
console.log("Updated Minutes:", currentDate.getMinutes());
console.log(
  "-----------------------------------------------Maths---------------------------------------"
);
// Math operations on a single variable

let number = -5.5;

// Constants
console.log("PI:", Math.PI);
console.log("Euler's number (e):", Math.E);

console.log("Number:", number);
console.log("Absolute value:", Math.abs(number));
console.log("Ceiling (round up):", Math.ceil(number));
console.log("Floor (round down):", Math.floor(number));
console.log("Rounded value:", Math.round(number));

// Exponents and logarithms
console.log("Power (2^3):", Math.pow(2, 3));
console.log("Square root:", Math.sqrt(Math.abs(number))); // Ensure a non-negative value for sqrt
console.log("Natural logarithm:", Math.log(Math.E)); // ln(e) = 1

// Trigonometric functions (angles in radians)
console.log("Sine of 90 degrees:", Math.sin(Math.PI / 2));
console.log("Cosine of 0 degrees:", Math.cos(0));
console.log("Tangent of 45 degrees:", Math.tan(Math.PI / 4));

// Finding the maximum and minimum of a set of values
console.log("Maximum of 5, 10, and 3:", Math.max(5, 10, 3));
console.log("Minimum of 5, 10, and 3:", Math.min(5, 10, 3));

console.log(
  "------------------------------Random Number------------------------------------"
);
// Returns a random integer from 0 to 10:
console.log("Random Number 0 to 10 = ", Math.floor(Math.random() * 11));
// Returns a random integer from 1 to 10
console.log("Random Number = ", Math.floor(Math.random() * 10) + 1);

// Case 	    Value 	Reason
// 2 < 12 	    true
// 2 < "12" 	true    String converted in number
// 2 < "John" 	false
// 2 > "John" 	false
// 2 == "John"  false
// "2" < "12" 	false   In term of String compare first character
// "2" > "12" 	true    In term of String compare first character
// "2" == "12"  false

// For in loop for objects
console.log("----------Loops------------");
const person1 = { fname: "John", lname: "Doe", age: 25 };
console.log("For In loop");
for (let x in person1) {
  console.log(person1[x]); //here x return index
}
//For of loop It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more
const cars = ["BMW", "Volvo", "Mini"];

console.log("For of loop");
for (let x of cars) {
  console.log(x); //here x return value
}

//Set data structure only unique values
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
console.log("Set");
for (x of letters) {
  console.log(x);
}

//Map = key value pair

const fruits1 = new Map();

fruits1.set("apples", 500);
fruits1.set("bananas", 300);
fruits1.set("oranges", 200);

//Using forEach - use this for indivisual key val pair
fruits1.forEach(function (key, val) {
  console.log("Key : ", key, " Value", val);
});

//Using for of - use this for get Array as output
console.log("Using for of");

for (const x of fruits1.entries()) {
  console.log(x);
}
let newtext = "Hello How are you?";
let res = newtext.search("are");
console.log("Search=", res);
res = newtext.replace("Hello", "Hi");
console.log("Replace=", res);
//Eval Function

let x1 = 10;
let y1 = 20000;
let code = "console.log(x1 + y1);";
console.log("Eval = ");
eval(code);

console.log("-------------------Error Handling--------------------------");
// let in1 = prompt("Enter Number Between 1 to 5");
// if(in1>5)
// {
//     throw "Enter valid Number less than 5";
// }
// else{
//     console.log("Good");
// }

let x3 = 5;
try {
  console.log("inside try");
  x3 = y4 + 1; // y cannot be used (referenced)
} catch (err) {
  console.log(err);
}
//JavaScript Hoisting = moving declarations to the top that's why we can access variable before declare
hoisting = 123;
console.log(hoisting);
var hoisting;

//Hoisting did not work with const and let
//This keyword
console.log("-------------------------Use of this----------------------------");

const person2 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log("Perspn details:", person2.fullName());
console.log("Print this = ", this);
("use strict");
console.log("After strict this = ", this);

//Use of call
const pr = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const pr1 = {
  firstName: "John",
  lastName: "Doe",
};
console.log("Use of call = ", pr.fullName.call(pr1, "Oslo", "Norway"));
//Use of apply

const pr2 = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};
const pr3 = {
  firstName: "John",
  lastName: "Doe",
};
console.log("Use of apply = ", pr2.fullName.apply(pr3, ["Oslo", "Norway"]));

// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.

//Arrow Function
console.log("------------Arrow Function-----------------");
let hello = () => {
  return "Hello";
};
console.log(hello());
let arrExample = (a, b) => {
  console.log("Sum = ", a + b);
};
arrExample(12, 43);
console.log("-----------------Classes------------------");
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}
const myCar = new Car("Ford", 2014);
console.log(myCar, " Age = ", myCar.age());
console.log("------------JSON-------------");
let jsonData = {
  firstName: "Nitya",
  lastName: "Makwana",
};
console.log("JSON = ", jsonData);
let jsonString = JSON.stringify(jsonData);
console.log("JSON String = ", jsonString);
var obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log("JSON Parse = ", obj);

// //Objects
// Objects are mutable
// const person = {
//   firstName:"John",
//   lastName:"Doe",
//   age:50, eyeColor:"blue"
// }

// const x = person;
// x.age = 10;      // Will change both x.age and person.age
myObj = {
  name: "John",
  age: 30,
  cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};
console.log("Nested Objects = ", myObj.cars.car2);
//or
console.log("Nested Objects  = ", myObj.cars["car2"]);
//Display Object
//1.Using Property
const display = {
  name: "Nitya",
  age: 21,
  city: "New York",
};
console.log(display.name + "," + display.age + "," + display.city);
//2.Using loop
for (x in display) {
  console.log(display[x]);
}
//3.Using Object.values()
console.log(Object.values(display));
//4.Using JSON.stringify()
let myString = JSON.stringify(person);
console.log(myString);
//Getter and Setter
const display1 = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  set lang(lang) {
    this.language = lang;
  },
  get lang() {
    return this.language;
  },
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};
display1.lang = "Gujarati";
console.log("Language = ", display1.lang);
console.log(display1.fullName);

//Build in constructor for Function
const myFunction1 = new Function("a", "b", "return a * b");

let x4 = myFunction1(4, 3);
console.log("Function using built in constructor = ", x4);

function sum1(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
let ans = sum1(4, 9, 16, 25, 29, 100, 66, 77);
console.log("Using ... =", ans);
//Accessing Parameter value using Argument object
function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log("Use of argument object = ", findMax(1, 34, 4543, 535345, 7));

//Use of bind
const originalFunction = function () {
  console.log(this.name);
};

const detail = { name: "John" };

// Using bind to create a customized function
const customizedFunction = originalFunction.bind(detail);

// Calling the customized function
customizedFunction(); // Outputs: John
//Async
//callback
function myDisplayer(some) {
  console.log(some);
}
function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}
myCalculator(5, 5, myDisplayer);
//setTimeout
setTimeout(function () {
  myFunction("Hello");
}, 3000);

function myFunction(value) {
  console.log("Using Async = ", value);
}
console.log("Before");
//setinterval
let count = 0;

const intervalId = setInterval(function () {
  console.log("Interval: ", count);
  count++;

  if (count === 5) {
    clearInterval(intervalId); // Stop the interval after 5 iterations
  }
}, 1000);

//ID of the settimeout
let timeOutId = setTimeout(function () {
  myFunction("Hello");
}, 3000);
console.log("Settimeout ID : ", timeOutId);

//Promise
function myDisplayer(some) {
  console.log(some);
}

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;
  if (x == 0) {
    myResolve("Sucess");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);

//async await

async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("Helllo!!");}, 3000);
  });
 console.log(await myPromise);
 
}
myDisplay();
