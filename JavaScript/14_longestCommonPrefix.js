/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let n = strs.length,
        min = 999999999999999;
    if (n === 0) return "";
    for (let i = 0; i < n; i++) {
        if (strs[i].length < min)
            min = strs[i].length;
    }
    let low = 0,
        high = min,
        prefix = "";
    while (low <= high) {
        mid = low + Math.floor((high-low)/2);
        if (containSubstring(strs, low, mid)){
            prefix += strs[0].slice(low, mid+1);
            low = mid+1;
        } else high = mid-1;
    }
    return prefix;
};

var containSubstring = function(strs, low, mid) {
    let substring = strs[0];
    for (let i = 1; i < strs.length; i++) {
        for (let j = low; j <= mid; j++) {
            if (strs[i].charAt(j) !== substring.charAt(j))
                return false;
        }
    }
    return true;
};
