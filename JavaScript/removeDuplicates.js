/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0,
        j = 0,
        n = nums.length;
    if (n === 0) return 0;
    while (j < n-1) {
        if (nums[j] === nums[j+1]) j++;
        else nums[i++] = nums[j++]
    }
    nums[i++] = nums[j++]
    return i;
};
