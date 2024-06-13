/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    two = 0
    for (i=0; i<nums.length; i++) {
      if (nums[i] == 0) {
          nums.splice(i, 1)
          nums.unshift(0)
      } else if (nums[i] == 2) {
          two ++
      }
    }
    for (i=0; i<nums.length; i++) {
      if (nums[i] == 2) {
          nums.splice(i, 1)
          nums.push(2)
          two --
          i --
      }
      if (two == 0) {
          return nums
      }
    }
  };