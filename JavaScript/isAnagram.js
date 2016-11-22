/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s = s.split("");
    t = t.split("");
    if (s.length !== t.length) return false;
    let hash = s.reduce((pre, cur) => {
        pre[cur] = pre[cur]? ++pre[cur]: 1;
        return pre;
    }, {});
    for (let i = 0, len = t.length; i < len; i++) {
        if (hash[t[i]]) {
            hash[t[i]]--;
            if (hash[t[i]] < 0) return false;
        } else return false;
    }
    return true;
};
