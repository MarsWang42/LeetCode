/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let res= [];
    res[0] = 1;
    res[1] = 2;
    for (let i = 2; i < n; i++){
        res[i] = res[i-1]+res[i-2];
    }
    return res[n-1]
};
