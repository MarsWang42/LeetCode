/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var i = 0;
    var len = nums2.length;
    for (var j = 0; j < len; j++) {
        while (nums2[j] > nums1[i]) {
            i++;
        }
        nums1.splice(i, 0, nums2[j]);
        i++;
    }
    var temp = parseInt(nums1.length/2)
    if (nums1.length %2 === 1) return nums1[temp];
    else return (nums1[temp-1] + nums1[temp])/2;
};
