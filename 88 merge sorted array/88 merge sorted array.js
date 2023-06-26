/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (n == 0) {
        return nums1
    }
    for (i = 0; i < n; i++) {
        nums1[(nums1.length - 1) - i] = nums2[i]
    }
    return nums1.sort(function(a, b){return a - b})
};