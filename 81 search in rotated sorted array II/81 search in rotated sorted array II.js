/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  if (nums[0] == target) {
      return true
  } else if (nums[0] > target) {
      //go backwards
      for (i=nums.length-1; i>-1; i--) {
          if (nums[i] < target) {
              return false
          } else if (nums[i] == target) {
              return true
          } else if (nums[i] == nums[i-1]) {
              i--
          }
      }
  } else {
      //go right to left
      for (i=0; i<nums.length; i++) {

          if (nums[i] == target) {
              return true
          } else if (nums[i] > target) {
              return false
          } else if (nums[i+1] < nums[i]) {
              return false
          } else if (nums[i] == nums[i+1]) {
              i++
          }
      }
  }
  return false
};