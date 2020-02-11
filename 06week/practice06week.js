'use strict';

let arr1 = [1,3,5,5,3,2,4,9,9,7,7,4];

function dups(arr) {
    let leng = arr.length;
    arr.sort();
    for (let i = 0; i < leng; i++) {
    if(arr[i] === arr[i+1]){
        arr.splice(i,1);
        leng--;
    }
    }
    return arr;
}

console.log(dups(arr1));

