/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    s1 = 0
    d1 = 0
    s2 = 0
    d2 = 0
    for (i = 0; i<player1.length; i++) {
        if (d1 > 0) {
            s1 += 2 * player1[i]
            d1 --
        } else {
            s1 += player1[i]
        }
        if (player1[i] == 10) {
            d1 = 2
        }
        if (d2> 0) {
            s2+= 2 * player2[i]
            d2--
        } else {
            s2+= player2[i]
        }
        if (player2[i] == 10) {
            d2= 2
        }
    }
    if (s1 > s2) {
        return 1
    } else if (s1 == s2) {
        return 0
    } else {
        return 2
    }
};