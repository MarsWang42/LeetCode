/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let diff = nums.reduce((p, c) => p ^ c, 0);
    diff &= -diff;
    return nums.reduce((p, c) => {
        if (c & diff) return [p[0], p[1] ^ c]
        else return [p[0] ^ c, p[1]]
    }, [0, 0])
}; 
