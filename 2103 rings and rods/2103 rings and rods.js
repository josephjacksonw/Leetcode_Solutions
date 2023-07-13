/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    output = 0
    arr = [[],[],[],[],[],[],[],[],[],[]]
    for (i = 0; i < rings.length; i += 2) {
        if (arr[rings[i+1]].includes(rings[i])) {
        } else {
            arr[rings[i+1]].push(rings[i])
        }
    }
    for (i=0; i < 10; i++) {
        if (arr[i].length == 3) {
            output ++
        }
    }
    return output
};