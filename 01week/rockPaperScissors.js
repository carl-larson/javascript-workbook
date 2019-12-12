'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  if (hand1 === 'rock' || hand1 === 'paper' || hand1 === 'scissors'){
    if (hand1 === hand2) {
    return "It's a tie!";
    } else if (hand1 === 'rock') {
    return hand1Rock(hand2);
    } else if (hand1 === 'scissors') {
      return hand1Scissors(hand2);
    } else if (hand1 === 'paper') {
      return hand1Paper(hand2);
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
      // answer1.trim();
      // answer2.trim();
      let a1 = answer1.toLowerCase();
      let a2 = answer2.toLowerCase();
      console.log( rockPaperScissors(a1.trim(), a2.trim()) );
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
