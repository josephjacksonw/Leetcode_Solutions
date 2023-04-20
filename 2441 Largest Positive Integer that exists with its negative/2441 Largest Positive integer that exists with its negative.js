/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
  //so we sort the array and go through the front and the back at the same time
  sortedArr = nums.sort(function(a, b){return b - a})
  console.log(sortedArr)
  for (i = 0; i < sortedArr.length; i++) {
      if (sortedArr.includes(-sortedArr[i])) {
          return sortedArr[i];
      } else if (sortedArr[i] < 0) {
          return -1;
      }
  }
  return -1;
};