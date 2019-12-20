function longestWord(sentence) {
    let words = sentence.split(' ');
    let longest = words[0];
        for(let i = 0; i < words.length - 1; i++){
        let word2 = words[i];
        if (longest.length < word2.length ){
            longest = word2;
        }
    } 
    console.log(`In the sentence: ${sentence}`);
    console.log(`The longest word is: ${longest}`);
    console.log(`This word is number ${words.indexOf(longest)+1}.`);
}

longestWord('Sphinx of black quartz judge my vow')

