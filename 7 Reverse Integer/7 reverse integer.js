/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    zcheck = 0
    s = x.toString();
    out = ""
    for (i=s.length-1; i>0; i--) {
        while (s[i] == 0 && zcheck == 0) {
            i--
        }
        zcheck = 1
        if (i != 0) {
            out += s[i]
        }
    }
    if (s[0] == "-") {
        sol = parseInt(out) *-1
    } else {
        out += s[0]
        sol = parseInt(out)
    }
    if (sol > Math.pow(2,31) -1 || sol < -Math.pow(2,31)) {
        console.log("too high") 
        return 0
    }
    return sol
};