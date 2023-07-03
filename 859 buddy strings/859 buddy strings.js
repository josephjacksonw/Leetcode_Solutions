/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if (s.length != goal.length) {
        return false
    }
    checkdone = 0
    checks = []
    places = []
    for (i = 0; i < s.length; i++) {
        if (s[i] != goal[i]) {
            places.push(i)
            if (places.length == 3) {
                return false
            }
        } else if (checkdone == 0) {
            if (checks.includes(s.charAt(i))) {
                checkdone = 1
            } else {
                checks.push(s.charAt(i))
            }
        }
    }
    if (places.length == 2 && s[places[0]] == goal[places[1]] && goal[places[0]] == s[places[1]]) {
        return true
    } else if (places.length == 0 && checkdone == 1) {
        return true
    }
    return false
};