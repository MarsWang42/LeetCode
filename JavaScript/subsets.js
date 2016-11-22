/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let length = nums.length,
        n = Math.pow(2, length),
        result = [];
    if (length === 0) return [];
    for (let i = 0; i < n; i++) {
        let str = i.toString(2);
        var subset = [];
        for (j = str.length-1; j >= 0; j--) {
            if (str.charAt(j) === '1') {
                subset.push(nums[length-str.length+j]);
            }
        }
        result.push(subset);
    }
    return result;
};
