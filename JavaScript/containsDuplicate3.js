/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    var length = nums.length;
    if (length === 0) return false;
    for(var i = 0; i < length; i++) {
        var j = i + 1;
        while(j <= i+k) {
            if (Math.abs(nums[i] - nums[j]) <= t) return true;
            j++;
        }
    }
    return false
};
