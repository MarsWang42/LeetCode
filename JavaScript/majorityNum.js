/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hash = {};
    for (let i = 0, len = nums.length; i < len; i++) {
        hash[nums[i]] = hash[nums[i]]? ++hash[nums[i]]: 1;
        if (hash[nums[i]] > Math.floor(len/2)) {
            return nums[i];
        }
    }
};
