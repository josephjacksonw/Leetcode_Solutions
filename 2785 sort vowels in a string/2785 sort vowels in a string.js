/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) { 
    test = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
    vowels = []
    ref = []
    for (i=0; i<s.length; i++) {
        if (test.includes(s[i])) {
            vowels.push(s[i])
            ref.push(i)
        }
    }
    vowels.sort();
    count = 0
    out = "";
    for (i=0; i<s.length; i++) {
      if (i == ref[count]) {
        out += vowels[count]
        count ++
      } else {
        out += s[i]
      }
    }
    return out
  };