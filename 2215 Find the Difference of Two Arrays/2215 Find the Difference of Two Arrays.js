/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  output = [[], []];
  nums1.sort(function(a, b){return a - b})
  nums2.sort(function(a, b){return a - b})
  for (i=0; i<nums1.length; i++) {
      while (nums1[i] == nums1[i+1]) {
          i++
      }
      if (nums2.includes(nums1[i])) {
      } else {
          output[0].push(nums1[i])
      }
  }
  for (i=0; i<nums2.length; i++) {
      while (nums2[i] == nums2[i+1]) {
          i++
      }
      if (nums1.includes(nums2[i])) {
      } else {
          output[1].push(nums2[i])
      }
  }

  return output
};