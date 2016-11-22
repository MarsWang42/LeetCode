/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = hash[nums[i]] ? ++hash[nums[i]]: 1;
        if (hash[nums[i]] > 1) return true;
    }
    return false;
};
