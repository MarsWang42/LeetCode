/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = [],
        set = [9,8,7,6,5,4,3,2,1];
    helper(k, n, [], set, result);
    return result;
};

var helper = function(k, n, cur, set, result) {
    if (k === 0 && n === 0) {
        result.push(cur);
        return;
    }
    else if (k !== 0 && n !== 0) {
        let s = set.slice(0);
        while(s.length !== 0) {
            let t = s[0];
            s.splice(0,1);
            if (t <= n) helper(k-1, n-t, [...cur, t], s, result);
        }
    }
};
