/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let hash = {},
        n = nums.length;
    for (let i = 0; i < n; i++) {
        if (hash[nums[i]] === undefined) {
            hash[nums[i]] = i;
        } else if (i - hash[nums[i]] > k) {
            hash[nums[i]] = i;
        } else return true;
    }
    return false
};
