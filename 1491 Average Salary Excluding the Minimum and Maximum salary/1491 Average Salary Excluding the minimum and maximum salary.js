/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  salary.sort(function(a, b){return a - b});
  output = 0
  temp = 0
  for (i=1; i<salary.length -1; i++) {
      output += salary[i]
      temp +=1
  }
  return output / temp
};