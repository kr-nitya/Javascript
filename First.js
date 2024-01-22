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
console.log("(123).valueOf() = ",(123).valueOf());

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
console.log("Length of the array : ",fruits.length);
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

