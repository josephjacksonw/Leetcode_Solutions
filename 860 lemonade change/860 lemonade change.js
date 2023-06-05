/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  five = 0
  ten = 0
  for (i=0; i < bills.length; i++) {
      if (bills[i] == 5) {
          five ++
      } else if (bills[i] == 10) {
          five --
          ten ++
          if (five < 0) {
              return false
          }
      } else {
          ten --
          five --
          while (ten < 0) {
              five -= 2
              ten ++
          }
          if (five < 0) {
              return false
          }
      }
  }
  return true
};