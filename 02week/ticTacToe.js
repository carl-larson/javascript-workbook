'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';
let draw = false;

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  for (let i = 0; i <=2; i++){
    if(board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != ' '){
      return true;
    }
  }
}

function verticalWin() {
  for (let i = 0; i <=2; i++){
    if(board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != ' '){
      return true;
    }
  }
}

function diagonalWin() {
  if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' '){
    return true;
  }
  if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' '){
    return true;
  }
}

function checkForWin() {
  if (horizontalWin() == true || verticalWin() == true || diagonalWin() == true) {
    return true;
  }
  let space = 0;
  // let draw = false;
  for (let a=0; a<=2; a++){
    for (let b=0; b<=2; b++){
      if (board[a][b] != ' '){
        space++;
        
      }
    }
  }if(space === 9) {
          console.log("It's a Draw!");
          draw = true;
          // return;
        }
}

function ticTacToe(row, column) {
  if (board[row][column] === ' '){
    board[row][column] = playerTurn;
    if (checkForWin()== true) {
      console.log(`${playerTurn} Wins!`);
    }
    if (playerTurn === 'X'){
      playerTurn = 'O';
    } else {
      playerTurn = 'X';
    }
  } else {
    return;
  }
}

function getPrompt() {
  printBoard();
  if (checkForWin() == true || draw == true){
    return;
  }
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
