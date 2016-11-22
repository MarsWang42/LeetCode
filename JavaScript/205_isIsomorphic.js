/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    s = s.split("");
    t = t.split("");
    let n = s.length,
        hash = {};
    for (let i = 0; i < n; i++) {
        if (hash[s[i]] === undefined){
            if (Object.values(hash).indexOf(t[i]) !== -1)
                return false;
            else hash[s[i]] = t[i];
        }
        else if (t[i] !== hash[s[i]])
            return false;
    }
    return true;
};
