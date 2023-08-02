/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  output = []
  for (i=0; i< nums.length; i++) {
      temp = -1
      for (x=i+1; x!=i; x++) {
          if (x == nums.length) {
              x = 0
          }
          if (x == i) {
              x = i-1
          } else if (nums[x] > nums[i]) {
              temp = nums[x]
              x = i-1
          }
      }
      output.push(temp)
  }
  return output
};