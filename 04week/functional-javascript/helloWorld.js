// 'use strict'

// function upperCaser(input) {
//   return input.toUpperCase();
// }

// module.exports = upperCaser

let charges = [
  {
    date: "01/01/2020",
    payee: "Target",
    amount: 43.00,
  },
  {
    date: "01/02/2020",
    payee: "Targe",
    amount: 44.00,
  },
  {
    date: "02/01/2020",
    payee: "Targ",
    amount: 45.00,
  },
  {
    date: "02/02/2020",
    payee: "Tar",
    amount: 46.00,
  },
];

let discount = charges.map((value) => {
  let newT = {};
  newT.date = value.date;
  newT.payee = value.payee;
  newT.amount = value.amount * 0.9;
  return newT;
});
let amounts = discount.map((value)=>{
  return value.amount;
});
let lowVal = charges.filter((value, index)=>{
  return value.amount > 44;
});
console.log(lowVal);
charges.forEach((charge) => {
  console.log(`I spent $${charge.amount} at ${charge.payee} on ${charge.date}.`);
});
discount.forEach((charge) => {
  console.log(`I spent $${charge.amount} at ${charge.payee} on ${charge.date}.`);
});
console.log(amounts);
// console.log(`I spent ${money} at ${loc} on ${day}`);