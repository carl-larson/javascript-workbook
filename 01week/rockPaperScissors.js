'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
let hd1 = hand1.trim();
let hd2 = hand2.trim();
let h1 = hd1.toLowerCase();
let h2 = hd2.toLowerCase();
  if (h1 === 'rock' || h1 === 'paper' || h1 === 'scissors'){
    if (h1 === h2) {
      return "It's a tie!";
    } else if (h1 === 'rock') {
      return hand1Rock(h2);
    } else if (h1 === 'scissors') {
      return hand1Scissors(h2);
    } else if (h1 === 'paper') {
      return hand1Paper(h2);
    } 
  }else {
    return "Invalid input";
    }
  }

function hand1Rock(hand) {
  if (hand === 'paper') {
    return 'Hand two wins!';
  } else if (hand === 'scissors') {
    return 'Hand one wins!';
  } else {
    return "Invalid input";
    }
}
function hand1Scissors(hand) {
  if (hand === 'rock') {
    return 'Hand two wins!';
  } else if (hand === 'paper') {
    return 'Hand one wins!';
  } else {
    return "Invalid input";
    }
}
function hand1Paper(hand) {
  if (hand === 'scissors') {
    return 'Hand two wins!';
  } else if (hand === 'rock') {
    return 'Hand one wins!';
  } else {
    return "Invalid input";
    }
}
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
