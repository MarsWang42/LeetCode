/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = [1],
        n = nums.length;
    for (let i = 1; i < n; i++) {
        result.push(result[i-1] * nums[i-1])
    }
    let temp = 1;
    for (let i = n-1; i >= 0; i--) {
        result[i] *= temp;
        temp *= nums[i]
    }
    return result;
};
