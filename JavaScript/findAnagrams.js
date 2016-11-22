/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    s = s.split("");
    p = p.split("");
    let n1 = s.length,
        n2 = p.length,
        results = [];
    for (let i = 0; i < n1-n2+1; i++) {
        let temp = s.slice(i, i+n2);
        if (helper(temp, p) === true) results.push(i);
    }
    return results;

};

var helper = function(a, b) {
    let n = a.length;
    b = b.slice(0);
    for (let i = 0; i < n; i++) {
        if (b.indexOf(a[i]) !== -1) {
            b.splice(b.indexOf(a[i]), 1);
        } else return false;
    }
    return true;
};
