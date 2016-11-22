/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let total = nums.reduce((total, pre) => (total + pre)),
        len = nums.length;
    return (len+1)*len/2 - total;
};
