/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function(nums, threshold) {
  count = 0
  output = 0
  counting = false
  for (i = 0; i < nums.length; i++) {
      if (!counting && nums[i] <= threshold && nums[i] % 2 == 0) {
          counting = true
          count = 1
      } else if (counting && nums[i] <= threshold && nums[i] %2 != nums[i-1] %2) {
          count ++
      } else if (counting && nums[i] <= threshold && nums[i] %2 == 0) {
          output = Math.max(count, output)
          count = 1
      } else if (counting) {
          output = Math.max(count, output)
          count = 0
          counting = false
      } 
  }
  output = Math.max(count, output)
  return output
};