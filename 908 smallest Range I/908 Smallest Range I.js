/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
  nums.sort(function(a, b){return a - b})
  if (nums[nums.length - 1] - nums[0] > 2*k) {
    return (nums[nums.length - 1] - k) - (nums[0] + k)
  } else { 
    return 0
  }

};