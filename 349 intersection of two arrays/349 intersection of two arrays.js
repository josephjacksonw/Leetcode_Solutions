/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    out = []
    nums1.sort(function(a, b){return a - b})
    count = 0
    for (i=0; i<nums1.length; i++) {
        count = 1
        while (nums1[i] == nums1[i+1]) {
            i++
        }
        j = 0
        while (count > 0) {
            if (nums2[j] == nums1[i]) {
                count --
                out.push(nums1[i])
            }
            j++
            if (j == nums2.length) {
                count = 0
            }
        }
    }
    return out
};