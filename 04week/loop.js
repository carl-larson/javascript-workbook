// Create a new branch off of master called loops
// Use the loops.js in the /04week folder of your workbook.
// Complete each of the following exercises.
// Use a do...while loop to console.log the numbers from 1 to 1000.


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
// Create an object (an array with keys and values) called person with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"

let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1927",
    gender: "female",
};
person.longDate = new Date(person.birthDate);
// Use a for...in loop and if statement to console.log the value associated with the key 
//  birthDate if the birth year is an odd number.

let x;
console.log(person);
for (x in person) {
    let year = person.longDate.getFullYear();
    if (year%2 != 0) {
        console.log(`${person.firstName}'s birthday is on ${person.birthDate}`);
    } else {
        return;
    }
}
// Create an arrayOfPersons that contains mulitiple objects. 
// You can simply copy/paste the person object you made above multiple times. 
// Feel free to change the values to reflect multiple people you might have in your database.
let arrayOfPersons = [
    {
        firstName: "Jenn",
        lastName: "Doe",
        birthDate: "Jan 5, 1976",
        gender: "female",
    },
    {
        firstName: "Henry",
        lastName: "Erikson",
        birthDate: "Feb 6, 1997",
        gender: "male",
    },
    {
        firstName: "Morgan",
        lastName: "Miller",
        birthDate: "Jan 10, 1978",
        gender: "female",
    }
]
// Use .forEach() to map over the arrayOfPersons and console.log() their information.
console.log("The Array of Persons contains:");
arrayOfPersons.forEach((value)=>{
    console.log(value);
});
// Use .filter() to filter the persons array and console.log only males in the array.
console.log("The males in Array of Persons are:");
let males = arrayOfPersons.filter((value)=> value.gender === "male");
console.log(males);
// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

arrayOfPersons.forEach(value =>{
    
    value.year = new Date(value.birthDate);
    value.year = value.year.getFullYear();
    // console.log(value);
});
// console.log(arrayOfPersons);

console.log("The people born before 1990 are:");
let old = arrayOfPersons.filter((value)=> value.year <1990);
console.log(old);