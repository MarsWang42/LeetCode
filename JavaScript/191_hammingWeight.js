/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return n.toString(2).split("").reduce((pre,cur) => {
        return cur==="1"? ++pre: pre;
    }, 0)
};
