/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    helper(result, "", n, n);
    return result;
};

var helper = function(res, cur, l, r) {
    if (l === 0 && r === 0) res.push(cur);
    if (l > 0) helper(res, cur+'(', l-1, r);
    if (l < r) helper(res, cur+')', l, r-1);
};
