/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n == 0) {
      return true
    }
    if (flowerbed.length == 1) {
      if(flowerbed[0] == 0) {
        return true
      } else {
        return false
      }
    }
    pot = 0
    for (i=0; i < flowerbed.length; i++) {
      if (i == 0 && flowerbed[0] == 0 && flowerbed[1] == 0) {
        flowerbed[0] = 1
        pot ++
      } else {
        while (flowerbed[i] == 1 || flowerbed[i+1] == 1) {
          i++
        }
        if (flowerbed[i] == 0 && flowerbed[i-1] == 0 && flowerbed[i+1] != 1) {
          flowerbed[i] = 1
          pot ++
        }
      }
      if (pot == n) {
        return true
      }
    }
    return false
};