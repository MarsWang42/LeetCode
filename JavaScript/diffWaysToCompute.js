/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    let nums = input.split(/\D/),
        signs = input.split(/\d*/);
    signs = signs.slice(1, signs.length-1)
    return helper(nums,signs);
};

var helper = function(nums, signs) {
    let slen = signs.length,
        n = nums.length,
        result = [];
    if (slen === 0) return [Number(nums[0])];
    for (let i = 0; i < slen; i++) {
        let left= helper(nums.slice(0, i+1), signs.slice(0, i)),
            right = helper(nums.slice(i+1, n), signs.slice(i+1, slen));
        for (let j = 0; j < left.length; j++) {
            for (let k = 0; k < right.length; k++) {
                switch(signs[i]) {
                    case "+": result.push(left[j] + right[k]); break;
                    case "-": result.push(left[j] - right[k]); break;
                    case "*": result.push(left[j] * right[k]); break;
                }
            }
        }
    }
    return result;
};
