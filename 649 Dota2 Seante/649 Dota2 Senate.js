/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    rnet = 0;
    dnet = 0;
    loopcheck = 0;
    senArray = senate.split("")
    while (senArray.includes("R") && senArray.includes("D")) {
        for (i=0; i < senArray.length; i++) {
            loopcheck = 0
            if (senArray[i] == "R") {
                if (dnet != 0) {
                    senArray.splice(i,1)
                    i -= 1
                    dnet -= 1
                    loopcheck = 1
                } else {
                    rnet += 1
                }
            }
            if (senArray[i] == "D" && loopcheck == 0) {
                if (rnet != 0) {
                    senArray.splice(i,1)
                    i -= 1
                    rnet -= 1
                } else {
                    dnet += 1
                }
            }
        }
    }
    if (senArray.includes("R")) {
        return "Radiant"
    } else {
        return "Dire"
    }

};