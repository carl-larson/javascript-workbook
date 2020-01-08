//write a for loop that performs the function of forEach() method on an array.

let array1 = [
    {
        name: "john",
        role: "employee",
        phone: "555555"
    },{
        name: "steve",
        role: "boss",
        phone: "553333"
    }
];

function call(array, callback){
    for (i = 0; i<array.length; i++){
    let element = array[i];
    let index = i;
    write(element, index);
    }
}

function write(element, index){
    return `Hello ${element}`
}

console.log(call);