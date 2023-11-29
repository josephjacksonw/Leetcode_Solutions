/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    out = []
    for (i=0; i<words.length; i++) {
        if (words[i].includes(x)) {
            out.push(i)
        }
    }
    return out
};