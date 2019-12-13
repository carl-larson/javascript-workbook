'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  let a = word.indexOf('a');
  let e = word.indexOf('e');
  let i = word.indexOf('i');
  let o = word.indexOf('o');
  let u = word.indexOf('u');
  let vowel = Math.min(a, e, i, o, u);
  
  if (a === 0){
    let latin = word + 'yay';
    return latin;
  } else {
    let latin = word.subString(1)+word.subString(0, 1)+'ay';
    return latin;
    
  }

  let first = word.charAt(0);

  if (a && e && i && o && u === -1) {
    return word+'ay';
  }
  console.log(a, e, i, o, u);
  console.log(vowel);
  console.log(first);


}


function getPrompt() {
  rl.question('word ', (answer) => {
    let ans = answer.trim();
    console.log( pigLatin(ans.toLowerCase()) );
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
