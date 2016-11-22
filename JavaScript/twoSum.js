/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Simple Brutal force

var twoSum = function(nums, target) {
    for (i=0; i<nums.length; i++) {
        for (j=i+1; j<nums.length; j++) {
            if (nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
};

// Use hash

var twoSum = function(nums, target) {
    var hash = {};
    for (i=0; i<nums.length; i++) {
        if (hash[nums[i]]!==undefined) {
            return [hash[nums[i]], i];
        }
        hash[target-nums[i]] = i;
    }
}
