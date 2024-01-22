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
