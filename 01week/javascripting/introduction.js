let amount = 732.47;
let a = amount*100;
let denom = [100, 50, 20, 10, 5, 1, .25, .1, .05, .01];
console.log(denom);
let r = a % 10000;
console.log(r);
let d = Math.floor(a / 10000);
console.log(d);


let list = ["bananas", "apples", "beef", "spinach", "eggs"];
let disp = list.forEach(myFunc);

    function myFunc(word, number, arr) {
console.log(word, number, arr);
}

