'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard(arrGuess, numExact, numAlmost) {
  for (let i = 0; i < board.length; i++) {
    let row = [arrGuess, numExact, numAlmost];
    board.push(row);
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// function generateHint() {
//   // your code here
// }

function exactMatch(arrGuess, arrSolution) {
  let numExact = 0;
  arrGuess.forEach((element, index) =>{
    if (element === arrSolution[index]) {
      numExact++;
    }
  });
  return numExact;
}

function almostMatch(arrGuess, arrSolution) {
  let numAlmost = 0;
  arrSolution.forEach((element, index) =>{
    for (let j = 0; j<arrGuess.length; j++){
      if (element === arrGuess[j]){
        arrGuess[j] = null;
        numAlmost++;
      }
    }
  })
  return numAlmost;
}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  // generateSolution();
  if (guess === solution){
    return true;
  } else {
    let arrSolution = guess.split('');
    let arrGuess = guess.split('');
    exactMatch(arrGuess, arrSolution);
    almostMatch(arrGuess, arrSolution);
    printBoard(arrGuess, numExact, numAlmost);
  }
}


function getPrompt() {
  console.log(`Make your guess from four letters: a, b, c, d, e, f, g, h.`)
  rl.question('guess: ', (guess) => {
    let win = mastermind(guess);
    if (win === true) {
      console.log("You Won!");
      return;
    } else {
      printBoard();
      getPrompt();
    }
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
