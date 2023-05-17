/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    satisfaction.sort(function(a, b){return b - a});
    output = 0
    currentAdd = 0
    for (i=0; i < satisfaction.length; i++) {
        currentAdd += satisfaction[i]
        if (currentAdd > 0) {
            output += currentAdd
        } else {
            return output
        }
    }
    return output
};