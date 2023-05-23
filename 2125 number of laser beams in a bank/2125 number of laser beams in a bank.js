/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    output = 0;
    l1 = 0;
    l2 = 0;
    starter = 0;
    for (i=0; i < bank.length; i++) {
        for (x = 0; x < bank[i].length; x ++) {
            if (bank[i].charAt(x) == 1 && starter == 0) {
                l1 ++;
            } else if (bank[i].charAt(x) == 1) {
                l2 ++;
            }
        }
        if (l1 != 0) {
            starter = 1;
        }
        if (l2 != 0) {
            output += l1 * l2;
            l1 = l2;
            l2 = 0;
        }
    }
    return output;
};