/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let list = [],
        len = s.length,
        hash = {};
    s = s.split("");
    for (let i = 0; i < len; i++) {
        if (hash[s[i]] === undefined){
            hash[s[i]] = 1;
            list.push(s[i]);
        } else if (list.indexOf(s[i]) !== -1) {
            list.splice(list.indexOf(s[i]), 1);
        }
    }
    return s.indexOf(list[0]);
};
