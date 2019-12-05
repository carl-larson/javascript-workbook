//Display date and time

let currentDate = new Date();

console.log("The current date and time is " + currentDate);

//Convert number to string
var num = 15;
var n = num.toString();

console.log("The number is "+ num);
console.log("The string is "+ n);

//Convert string to number

var str = "1001";
var s = Number(str);

console.log("The string is "+ str);
console.log("The number is " + s);

//Show type of variable

var name = "John";
var und;
var boo = true;
// var nan = 15 + name;
var empty = null;
console.log("The name variable is a ", typeof name);
console.log("The und variable is a ", typeof und);
console.log("The boo variable is a ", typeof boo);
// console.log("The nan variable is a ", typeof nan);
console.log("The empty variable is a ", typeof empty);

//Add two numbers

var x = 11;
var add = x + num;
console.log("15 + 11 = "+ add);

//Are two things true?

var booNot = true;
if (boo == true) {
    if (booNot == boo) {
        console.log("boo and booNot are both true");
    }
}

//Is Exactly one thing true?
var notTrue = false;
if (boo || notTrue) {
    console.log("boo or notTrue is true");
}

var isFalse = false;
if (isFalse == notTrue) {
    if (notTrue == false){
    console.log("isFalse and notTrue are both false");
    }
}