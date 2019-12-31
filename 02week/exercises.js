let cars = ['ford', 'mazda', 'acura', 'toyota'];
let moreCars = ['lincoln', 'chevy', 'mercedes', 'honda']

console.log(cars.length);
let total = cars.concat(moreCars);
console.log(total);

console.log('ford is in spot '+total.indexOf('ford'))
console.log('ford is in spot '+total.indexOf('honda'))

let stringOfCars = total.join(' ');
console.log('string of cars is: '+stringOfCars);

let totalCars = stringOfCars.split(' ');
console.log('put them back to array: ')
console.log(totalCars);

let carsReverse = totalCars.reverse();
console.log('reverse them:');
console.log(carsReverse);

let sortCars = total.sort();
console.log(`the location of 'acura' is ${sortCars.indexOf('acura')}`);

let removedCars = carsReverse.slice(0,1);
// console.log(removedCars);
removedCars =removedCars.concat(carsReverse.slice(7));
console.log(removedCars);

carsReverse.splice(1, 2, removedCars[0], removedCars[1]);
console.log(carsReverse);

carsReverse.push('mercedes', 'chevy');
console.log(carsReverse);

console.log(carsReverse.pop());
console.log(carsReverse.shift());
carsReverse.unshift('jeep')
console.log(carsReverse);

let numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];
function addEach(item, index){
    // let num = item+2;
    numbers[index]=item+2;
};

console.log(numbers);
numbers.forEach(addEach);
console.log(numbers);
