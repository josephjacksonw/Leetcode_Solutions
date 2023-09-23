/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    length = nums1.length + nums2.length
    goal = Math.ceil((nums1.length + nums2.length)/2)
    if (length % 2 == 0) {
        goal ++
    }
    last2 = [0, 0]
    o = 0
    t = 0
    count = 0
    while (count < goal) {
        if (nums1[o] > nums2[t]) {
            last2[1] = last2[0]
            last2[0] = nums2[t]
            t++
        } else if (nums1[o] <= nums2[t]) {
            last2[1] = last2[0]
            last2[0] = nums1[o]
            o++
        } else if (o == nums1.length) {
            last2[1] = last2[0]
            last2[0] = nums2[t]
            t++
        } else if (t == nums2.length) {
            last2[1] = last2[0]
            last2[0] = nums1[o]
            o++
        }
        count ++
    }
    if (length % 2 == 0) {
        return (last2[0] + last2[1])/2
    } else {
        return (last2[0])
    }
};