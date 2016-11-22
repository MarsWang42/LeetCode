/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0,
        j = 0,
        n = nums.length;
    while (j < n) {
        if (nums[j] === val) j++;
        else nums[i++] = nums[j++]
    }
    return i;
};
