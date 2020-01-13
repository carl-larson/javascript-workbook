// Create a new branch off of master called loops
// Use the loops.js in the /04week folder of your workbook.
// Complete each of the following exercises.
// Use a do...while loop to console.log the numbers from 1 to 1000.
// Create an object (an array with keys and values) called person with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
// Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
// Create an arrayOfPersons that contains mulitiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.
// Use .forEach() to map over the arrayOfPersons and console.log() their information.
// Use .filter() to filter the persons array and console.log only males in the array.
// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

// let num = 1;
// do {
//     console.log(num);
//     num++;
// } while (num <=1000);
let short = [];
let i = 0;
do {
    i++;
    short.push(i);
} while (i<1000);
console.log(short);

let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1926",
    gender: "female",
};
person.longDate = new Date(person.birthDate);

console.log(person);
for (longDate in person) {
    let year = longDate.getFullYear;
    if (year%2 != 0) {
        console.log(year);
    } else {
        console.log('year not odd');
    }
}