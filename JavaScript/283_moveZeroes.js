/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let n = nums.length,
        j = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] !== 0) nums[j++] = nums[i];
    }
    for (;j < n; j++) {
        nums[j] = 0;
    }
};
