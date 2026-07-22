/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = s.split(" ");

    if (pattern.length !== words.length) {
        return false;
    }

    let charToWord = new Map();
    let wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        let ch = pattern[i];
        let word = words[i];

        // Character already has a mapping
        if (charToWord.has(ch)) {
            if (charToWord.get(ch) !== word) {
                return false;
            }
        }
        // Word already mapped to another character
        else if (wordToChar.has(word)) {
            return false;
        }

        // Create mapping
        charToWord.set(ch, word);
        wordToChar.set(word, ch);
    }

    return true;
};