/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    str = str.split(" ");
    pattern = pattern.split("");
    if (str.length !== pattern.length) return false;
    let hash = {},
        n = pattern.length;
    for (i = 0; i < n; i++) {
        if (hash[pattern[i]] === undefined) {
            if (Object.values(hash).indexOf(str[i]) !== -1)
                return false
            hash[pattern[i]] = str[i];
        } else if (hash[pattern[i]] !== str[i]) {
            return false;
        }
    }
    return true;

};
