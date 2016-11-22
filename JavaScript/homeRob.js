/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    let n = nums.length,
        result = [nums[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < n; i++) {
        result.push(Math.max(result[i-2]+nums[i], result[i-1]))
    }
    return result[n-1]
};
