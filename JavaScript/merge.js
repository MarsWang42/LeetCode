/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0,
        j = 0;
    while (nums2[j] < nums1[i]) {
        if (nums2[j] !== undefined) {
            nums1.splice(i, 0, nums2[j]);
            i++;
            j++;
        } else return;
    }
    for (j; j < n; j++) {
        while (nums2[j] > nums1[i]) {
            if (nums1[i] === undefined) {
                nums1.push(nums2.slice[j-1]);
                return;
            } else {
                i++;
            }
        }
        nums1.splice(i, 0, nums2[j]);
    }
};
