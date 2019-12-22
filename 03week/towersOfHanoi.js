'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  let start = stacks[startStack].pop();
  stacks[endStack].push(start);

}

function isLegal(startStack, endStack) {
  // let firstLength = startStack.length - 1;
  if (startStack != 'a' && startStack != 'b' && startStack != 'c') {
    return false;
  }
  if (endStack != 'a' && endStack != 'b' && endStack != 'c') {
    return false;
  }
  let startLength = stacks[startStack].length - 1;
  let endLength = stacks[endStack].length-1;
  let start = stacks[startStack][startLength];
  let end = stacks[endStack][endLength];
  // console.log(start);
  // console.log(end);
  
  if (endLength === -1){
    return true;
  } else if (start < end){
    return true;
  } else if (startLength === -1){
    return false;
  } else {
    return false;
  }
  
}

function checkForWin() {
  if (stacks.c.length === 4){
    return true;
  } else if (stacks.b.length === 4){
    return true;
  } else {
    return false;
  }

}
var moves = 0;
function towersOfHanoi(startStack, endStack) {
  let legal = isLegal(startStack, endStack);
  
  if (legal === true){
    movePiece(startStack, endStack);
    moves ++;
    if (checkForWin() === true){
      console.log(`You Won in ${moves} moves!`);
      return true;
    } else{
      return;
    }
  } else {
    console.log('Illegal Move');
    return;
  }


}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      // towersOfHanoi(startStack, endStack);
      if (towersOfHanoi(startStack, endStack) === true) {
        return;
      } 
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
