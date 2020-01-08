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
let numExact = 0;
let numAlmost = 0;
let turns = 0;

function printBoard(arrGuess, numExact, numAlmost) {
  let row = [arrGuess, numExact, numAlmost];
  board.push(row);
  for (let i = 0; i < board.length; i++) {
    
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



function almostMatch(arrGuess, arrSolution) {
  numAlmost = 0;
  arrSolution.forEach((element, index) =>{
    for (let j = 0; j<arrGuess.length; j++){
      if (element === arrGuess[j]){
        arrGuess[j] = null;
        numAlmost++;
      }
    }
  });
  console.log('almost matches removed:');
  console.log(arrSolution);
  console.log(arrGuess);
  console.log('exact '+numExact);
  console.log('almost '+numAlmost);
  printBoard(arrGuess, numExact, numAlmost);
}

function exactMatch(arrGuess, arrSolution) {
  numExact = 0;
  arrGuess.forEach((element, index) =>{
    if (element === arrSolution[index]) {
      numExact++;
      arrGuess[index] = null;
      arrSolution[index] = null;
    }
  });
  console.log('exact matches removed:');
  console.log(arrSolution);
  console.log(arrGuess);
  console.log('exact ' + numExact);
  almostMatch(arrGuess, arrSolution);
  // return numExact;
}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  // generateSolution();
  if (guess === solution){
    return 'You guessed it!';
  } else {
    let arrSolution = solution.split('');
    let arrGuess = guess.split('');
    console.log(arrSolution);
    console.log(arrGuess);
    exactMatch(arrGuess, arrSolution);
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
      turns++;
      // printBoard();
      if(turns < 10){
        getPrompt();
      } else {
        console.log("The correct solution was:");
        console.log(solution);
        return;
      }
      
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
