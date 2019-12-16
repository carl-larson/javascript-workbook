'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  let lower = word.toLowerCase();
  let fixed = lower.trim();
  let space = fixed.indexOf(' ');
  
  // let vowel = Math.min(a, e, i, o, u);
  
  if (space != -1){
    let word1 = fixed.substring(0, space);
    let word2 = fixed.substring(space+1);
    let latin1 = toLatin(word1);
    let latin2 = toLatin(word2);
    return latin1 + ' ' + latin2;
  } else {
    let latin = toLatin(fixed);
    return latin;
  }
  
}

function toLatin(word){
  let a = word.indexOf('a');
  let e = word.indexOf('e');
  let i = word.indexOf('i');
  let o = word.indexOf('o');
  let u = word.indexOf('u');
  let firstCon = false;

  if (a === 0 || e === 0 || i === 0 || o === 0 || u === 0){
    let latin = word + 'yay';
    return latin;
  } else {
    firstCon = true;
  }

  if (firstCon === true) {
    // let secondChar = word.charAt(1);
    // if (secondChar != 'a' && secondChar != 'e' && secondChar != 'i' && secondChar != 'o' && secondChar != 'u'){
    if (a != 1 && e != 1 && i != 1 && o != 1 && u != 1){  
      let latin = word.substring(2)+word.substring(0, 2)+'ay';
      return latin;
    } else {
    let latin = word.substring(1)+word.substring(0, 1)+'ay';
    return latin;
    }
  }
}

// function separateWords(word, space){
//   let word1 = word.substring(0, space);
//   let word2 = word.substring(space);
//   return
// }

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
    it('Should separate two words and return them together', () => {
      assert.equal(pigLatin('Hop Fest'), 'Ophay Estfay');
    });
  });
} else {

  getPrompt();

}
